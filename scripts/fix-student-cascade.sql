-- Les contraintes de cle etrangere student_id ajoutees lors de la migration
-- multi-tenant n'avaient pas ON DELETE CASCADE, ce qui bloquait la suppression
-- d'un eleve (et donc d'un compte parent) des qu'il avait de l'historique de
-- progression : Postgres refusait avec une violation de contrainte, remontee
-- de facon illisible par l'API Supabase Auth ("AuthRetryableFetchError").
alter table public.day_attempts drop constraint if exists day_attempts_student_id_fkey;
alter table public.day_attempts add constraint day_attempts_student_id_fkey
  foreign key (student_id) references public.students(id) on delete cascade;

alter table public.question_attempts drop constraint if exists question_attempts_student_id_fkey;
alter table public.question_attempts add constraint question_attempts_student_id_fkey
  foreign key (student_id) references public.students(id) on delete cascade;

alter table public.active_day_sessions drop constraint if exists active_day_sessions_student_id_fkey;
alter table public.active_day_sessions add constraint active_day_sessions_student_id_fkey
  foreign key (student_id) references public.students(id) on delete cascade;
