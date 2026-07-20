-- Historique des tentatives TERMINEES uniquement, jamais ecrasees
create table if not exists public.day_attempts (
  id bigint generated always as identity primary key,
  child_id text not null,
  day_number int not null,
  attempt_number int not null,               -- 1, 2, 3... par (child_id, day_number)
  subject_results jsonb not null,             -- SubjectResult[] snapshot
  total_xp_earned int not null,
  average_percent numeric(5,2) not null,      -- moyenne des 5 (correctCount/6)*100
  passed boolean not null,                    -- average_percent >= 80
  time_spent_seconds int not null default 0,
  started_at timestamptz not null,
  completed_at timestamptz not null default now(),
  unique (child_id, day_number, attempt_number)
);

create index if not exists day_attempts_child_day_idx
  on public.day_attempts (child_id, day_number);
create index if not exists day_attempts_child_passed_idx
  on public.day_attempts (child_id, day_number, passed);

-- Historique detaille de CHAQUE reponse, dans n'importe quelle tentative (terminee ou abandonnee)
create table if not exists public.question_attempts (
  id bigint generated always as identity primary key,
  child_id text not null,
  day_number int not null,
  attempt_number int not null,
  subject_id text not null,
  question_order int not null,                -- 1..6
  question_prompt text not null,               -- snapshot de l'enonce
  given_answer text not null,
  correct_answer text not null,                -- snapshot (independant du contenu statique qui peut changer)
  accepted_answers jsonb,
  correct boolean not null,
  elapsed_seconds int,
  answered_at timestamptz not null default now(),
  unique (child_id, day_number, attempt_number, subject_id, question_order)
);

create index if not exists question_attempts_lookup_idx
  on public.question_attempts (child_id, day_number, attempt_number, subject_id);

-- Etat de reprise exacte : UNE ligne par enfant = la tentative en cours (si il y en a une)
create table if not exists public.active_day_sessions (
  child_id text primary key,
  day_number int not null,
  attempt_number int not null,
  subject_index int not null default 0,        -- 0..4 (index dans SUBJECT_ORDER)
  lesson_step text not null default 'story'
    check (lesson_step in ('story', 'examples', 'questions')),
  question_index int not null default 0,       -- 0..5 dans la matiere en cours
  subject_results jsonb not null default '[]', -- SubjectResult[] des matieres deja terminees dans CETTE tentative
  started_at timestamptz not null,
  updated_at timestamptz not null default now()
);

alter table public.day_attempts enable row level security;
alter table public.question_attempts enable row level security;
alter table public.active_day_sessions enable row level security;

drop policy if exists day_attempts_no_direct_access on public.day_attempts;
create policy day_attempts_no_direct_access
on public.day_attempts
for all
to anon, authenticated
using (false)
with check (false);

drop policy if exists question_attempts_no_direct_access on public.question_attempts;
create policy question_attempts_no_direct_access
on public.question_attempts
for all
to anon, authenticated
using (false)
with check (false);

drop policy if exists active_day_sessions_no_direct_access on public.active_day_sessions;
create policy active_day_sessions_no_direct_access
on public.active_day_sessions
for all
to anon, authenticated
using (false)
with check (false);

-- Fonction transactionnelle : termine une tentative de jour et supprime la session active
-- correspondante en une seule operation atomique.
create or replace function public.complete_day_attempt(
  p_child_id text,
  p_day_number int,
  p_attempt_number int,
  p_subject_results jsonb,
  p_total_xp_earned int,
  p_time_spent_seconds int,
  p_started_at timestamptz
) returns table (average_percent numeric, passed boolean) as $$
declare
  v_avg numeric;
  v_passed boolean;
begin
  select avg((elem->>'correctCount')::numeric / 6.0) * 100
    into v_avg
  from jsonb_array_elements(p_subject_results) elem;

  v_passed := v_avg >= 80;

  insert into public.day_attempts (
    child_id, day_number, attempt_number, subject_results,
    total_xp_earned, average_percent, passed,
    time_spent_seconds, started_at, completed_at
  ) values (
    p_child_id, p_day_number, p_attempt_number, p_subject_results,
    p_total_xp_earned, v_avg, v_passed,
    p_time_spent_seconds, p_started_at, now()
  );

  delete from public.active_day_sessions where child_id = p_child_id;

  return query select v_avg, v_passed;
end;
$$ language plpgsql security definer;

-- Anciennes tables (localStorage-era), remplacees par day_attempts / question_attempts / active_day_sessions.
-- A executer APRES avoir verifie que le nouveau code est deploye et fonctionnel.
drop table if exists public.progress_attempts;
drop table if exists public.child_state;
drop table if exists public.day_completions;

-- =========================================================================
-- Multi-tenant : Admin / Parent / Enfant, auth Supabase, multi-niveaux
-- =========================================================================

-- Profil applicatif lie 1-1 a un compte Supabase Auth (auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  role text not null check (role in ('admin', 'parent')),
  display_name text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Trigger : cree automatiquement une ligne profiles a chaque inscription Supabase Auth
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, role, display_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_app_meta_data->>'role', 'parent'),
    new.raw_user_meta_data->>'display_name'
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create table if not exists public.school_levels (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,           -- 'cp-ce1','ce1-ce2','ce2-cm1','cm1-cm2','cm2-6e','6e-4e'
  label text not null,
  display_order int not null,
  is_active boolean not null default true
);

create table if not exists public.subjects (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,           -- matche SubjectId ('mathematiques', ...)
  label text not null,
  icon text not null,
  display_order int not null,
  is_active boolean not null default true
);

create table if not exists public.students (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid not null references public.profiles(id) on delete cascade,
  first_name text not null,
  birth_date date,
  school_level_id uuid not null references public.school_levels(id),
  avatar text not null default '🧒',
  is_active boolean not null default true,
  archived_at timestamptz,              -- soft-delete : "supprimer un enfant" n'efface jamais son historique pedagogique
  legacy_child_id text unique,          -- 'child-1'/'child-2' le temps de la migration
  created_at timestamptz not null default now()
);

create index if not exists students_parent_idx on public.students (parent_id);

create table if not exists public.badge_definitions (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  label text not null,
  icon text not null default '🏅',
  threshold_type text not null check (threshold_type in ('total_attempts','accuracy','streak_days','mastered_skills','xp')),
  threshold_value int not null,
  is_active boolean not null default true
);

create table if not exists public.app_settings (
  key text primary key,
  value jsonb not null
);
insert into public.app_settings (key, value) values ('max_children_per_parent', '2')
  on conflict (key) do nothing;

alter table public.profiles enable row level security;
alter table public.school_levels enable row level security;
alter table public.subjects enable row level security;
alter table public.students enable row level security;
alter table public.badge_definitions enable row level security;
alter table public.app_settings enable row level security;

drop policy if exists profiles_no_direct_access on public.profiles;
create policy profiles_no_direct_access on public.profiles for all to anon, authenticated using (false) with check (false);
drop policy if exists school_levels_no_direct_access on public.school_levels;
create policy school_levels_no_direct_access on public.school_levels for all to anon, authenticated using (false) with check (false);
drop policy if exists subjects_no_direct_access on public.subjects;
create policy subjects_no_direct_access on public.subjects for all to anon, authenticated using (false) with check (false);
drop policy if exists students_no_direct_access on public.students;
create policy students_no_direct_access on public.students for all to anon, authenticated using (false) with check (false);
drop policy if exists badge_definitions_no_direct_access on public.badge_definitions;
create policy badge_definitions_no_direct_access on public.badge_definitions for all to anon, authenticated using (false) with check (false);
drop policy if exists app_settings_no_direct_access on public.app_settings;
create policy app_settings_no_direct_access on public.app_settings for all to anon, authenticated using (false) with check (false);

-- Colonnes ajoutees aux tables de progression existantes pour le scoping multi-eleve/multi-niveau.
-- child_id (text) est conserve en lecture le temps de la transition, retire dans une passe ulterieure.
alter table public.day_attempts add column if not exists student_id uuid references public.students(id);
alter table public.day_attempts add column if not exists school_level_id uuid references public.school_levels(id);
alter table public.question_attempts add column if not exists student_id uuid references public.students(id);
alter table public.question_attempts add column if not exists school_level_id uuid references public.school_levels(id);
alter table public.active_day_sessions add column if not exists student_id uuid references public.students(id);
alter table public.active_day_sessions add column if not exists school_level_id uuid references public.school_levels(id);

-- day_number seul n'a plus de sens sans school_level_id : nouvelle unicite/PK composite.
alter table public.day_attempts drop constraint if exists day_attempts_child_id_day_number_attempt_number_key;
alter table public.day_attempts drop constraint if exists day_attempts_student_level_day_attempt_key;
alter table public.day_attempts add constraint day_attempts_student_level_day_attempt_key
  unique (student_id, school_level_id, day_number, attempt_number);

alter table public.question_attempts drop constraint if exists question_attempts_child_id_day_number_attempt_number_subject__key;
alter table public.question_attempts drop constraint if exists question_attempts_student_level_day_attempt_subject_key;
alter table public.question_attempts add constraint question_attempts_student_level_day_attempt_subject_key
  unique (student_id, school_level_id, day_number, attempt_number, subject_id, question_order);

-- On utilise une contrainte UNIQUE (pas PRIMARY KEY) : une UNIQUE autorise plusieurs
-- lignes avec student_id/school_level_id NULL (chaque NULL est distinct), donc sans risque
-- meme si une session active existe deja pour Balkis/Bayrem avant que le script de seed
-- n'ait rempli ces colonnes. Necessaire aussi pour que l'upsert onConflict des routes API
-- fonctionne des maintenant (un onConflict a besoin d'un index unique/PK sur ces colonnes).
alter table public.active_day_sessions drop constraint if exists active_day_sessions_pkey;
alter table public.active_day_sessions drop constraint if exists active_day_sessions_student_level_unique;
alter table public.active_day_sessions add constraint active_day_sessions_student_level_unique
  unique (student_id, school_level_id);

-- child_id n'est plus renseigne par le code applicatif (qui utilise desormais
-- student_id/school_level_id) : sa contrainte NOT NULL d'origine bloquait tous les
-- inserts/upserts de progression (erreur "null value in column child_id violates
-- not-null constraint"). On la retire ; la colonne reste en lecture pour l'historique.
alter table public.active_day_sessions alter column child_id drop not null;
alter table public.day_attempts alter column child_id drop not null;
alter table public.question_attempts alter column child_id drop not null;

-- Les contraintes student_id ci-dessus n'avaient pas ON DELETE CASCADE : supprimer
-- un eleve (ou un parent, via profiles -> students -> ces tables) echouait avec une
-- violation de contrainte des qu'il existait de l'historique de progression.
alter table public.day_attempts drop constraint if exists day_attempts_student_id_fkey;
alter table public.day_attempts add constraint day_attempts_student_id_fkey
  foreign key (student_id) references public.students(id) on delete cascade;

alter table public.question_attempts drop constraint if exists question_attempts_student_id_fkey;
alter table public.question_attempts add constraint question_attempts_student_id_fkey
  foreign key (student_id) references public.students(id) on delete cascade;

alter table public.active_day_sessions drop constraint if exists active_day_sessions_student_id_fkey;
alter table public.active_day_sessions add constraint active_day_sessions_student_id_fkey
  foreign key (student_id) references public.students(id) on delete cascade;

-- Fonction RPC mise a jour : accepte student_id/school_level_id en plus de day_number/attempt_number.
create or replace function public.complete_day_attempt(
  p_student_id uuid,
  p_school_level_id uuid,
  p_day_number int,
  p_attempt_number int,
  p_subject_results jsonb,
  p_total_xp_earned int,
  p_time_spent_seconds int,
  p_started_at timestamptz
) returns table (average_percent numeric, passed boolean) as $$
declare
  v_avg numeric;
  v_passed boolean;
begin
  select avg((elem->>'correctCount')::numeric / 6.0) * 100
    into v_avg
  from jsonb_array_elements(p_subject_results) elem;

  v_passed := v_avg >= 80;

  insert into public.day_attempts (
    student_id, school_level_id, day_number, attempt_number, subject_results,
    total_xp_earned, average_percent, passed,
    time_spent_seconds, started_at, completed_at
  ) values (
    p_student_id, p_school_level_id, p_day_number, p_attempt_number, p_subject_results,
    p_total_xp_earned, v_avg, v_passed,
    p_time_spent_seconds, p_started_at, now()
  );

  delete from public.active_day_sessions
    where student_id = p_student_id and school_level_id = p_school_level_id;

  return query select v_avg, v_passed;
end;
$$ language plpgsql security definer;
