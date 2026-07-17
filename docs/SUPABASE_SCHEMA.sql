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
