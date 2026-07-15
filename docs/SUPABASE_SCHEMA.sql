create table if not exists public.progress_attempts (
  id bigint generated always as identity primary key,
  child_id text not null,
  subject_id text not null,
  lesson_id text not null,
  activity_kind text not null check (activity_kind in ('exercise', 'quiz')),
  activity_id text not null,
  correct boolean not null,
  difficulty int,
  elapsed_seconds int,
  created_at timestamptz not null default now()
);

create index if not exists progress_attempts_child_id_idx
  on public.progress_attempts (child_id);

create index if not exists progress_attempts_created_at_idx
  on public.progress_attempts (created_at);

create table if not exists public.child_state (
  child_id text primary key,
  last_session_at timestamptz,
  xp int not null default 0,
  coins int not null default 0,
  updated_at timestamptz not null default now()
);

alter table public.progress_attempts enable row level security;
alter table public.child_state enable row level security;

-- For this project, writes/reads are currently done through Next.js API routes
-- using SUPABASE_SERVICE_ROLE_KEY on the server.
-- Keep restrictive policies by default.

drop policy if exists progress_attempts_no_direct_access on public.progress_attempts;
create policy progress_attempts_no_direct_access
on public.progress_attempts
for all
to anon, authenticated
using (false)
with check (false);

drop policy if exists child_state_no_direct_access on public.child_state;
create policy child_state_no_direct_access
on public.child_state
for all
to anon, authenticated
using (false)
with check (false);
