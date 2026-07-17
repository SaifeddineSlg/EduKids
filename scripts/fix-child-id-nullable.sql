-- Les colonnes child_id (ancien schema mono-famille) sont obsoletes depuis le
-- passage a student_id/school_level_id, mais elles etaient restees NOT NULL,
-- ce qui bloquait tous les inserts/upserts qui ne les renseignent plus.
alter table public.active_day_sessions alter column child_id drop not null;
alter table public.day_attempts alter column child_id drop not null;
alter table public.question_attempts alter column child_id drop not null;
