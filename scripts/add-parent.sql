-- Cree un compte parent directement en SQL (sans passer par l'API Admin).
-- A executer dans le SQL Editor de Supabase.
-- Le trigger public.handle_new_user() cree automatiquement la ligne
-- public.profiles (role='parent' par defaut) des l'insertion dans auth.users.

-- pgcrypto est necessaire pour crypt()/gen_salt() ; deja active par defaut sur Supabase.
create extension if not exists pgcrypto;

do $$
declare
  v_user_id uuid := gen_random_uuid();
  v_email text := 'bensalemingrid@gmail.com';
  v_password text := 'IngSeb2026';
  v_display_name text := 'Ingrid';
begin
  insert into auth.users (
    instance_id, id, aud, role, email, encrypted_password,
    email_confirmed_at, raw_app_meta_data, raw_user_meta_data,
    created_at, updated_at, confirmation_token, recovery_token
  ) values (
    '00000000-0000-0000-0000-000000000000',
    v_user_id,
    'authenticated',
    'authenticated',
    v_email,
    crypt(v_password, gen_salt('bf')),
    now(),
    jsonb_build_object('provider', 'email', 'providers', array['email'], 'role', 'parent'),
    jsonb_build_object('display_name', v_display_name),
    now(),
    now(),
    '',
    ''
  );

  insert into auth.identities (
    id, provider_id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at
  ) values (
    gen_random_uuid(),
    v_user_id::text,
    v_user_id,
    jsonb_build_object('sub', v_user_id::text, 'email', v_email),
    'email',
    now(),
    now(),
    now()
  );
end $$;
