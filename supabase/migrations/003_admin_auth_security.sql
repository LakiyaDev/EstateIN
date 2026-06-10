-- Admin login rate limiting & audit trail

create table public.admin_login_attempts (
  id uuid primary key default gen_random_uuid(),
  login_key text not null,
  success boolean not null default false,
  attempted_at timestamptz not null default now()
);

create index admin_login_attempts_key_time_idx
  on public.admin_login_attempts (login_key, attempted_at desc);

alter table public.admin_login_attempts enable row level security;

-- No direct client access; only security definer functions below.

create or replace function public.check_admin_login_allowed(p_login_key text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  failed_count integer;
begin
  select count(*)::integer into failed_count
  from public.admin_login_attempts
  where login_key = p_login_key
    and success = false
    and attempted_at > now() - interval '15 minutes';

  return failed_count < 5;
end;
$$;

create or replace function public.record_admin_login_attempt(
  p_login_key text,
  p_success boolean
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.admin_login_attempts (login_key, success)
  values (p_login_key, p_success);

  -- Keep table small
  delete from public.admin_login_attempts
  where attempted_at < now() - interval '7 days';
end;
$$;

grant execute on function public.check_admin_login_allowed(text) to anon, authenticated;
grant execute on function public.record_admin_login_attempt(text, boolean) to anon, authenticated;

-- Admins can read login audit log
create policy "Admins can read login attempts"
  on public.admin_login_attempts for select
  using (public.is_admin());
