create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.newsletter_subscribers enable row level security;

create policy "Anyone can subscribe"
  on public.newsletter_subscribers for insert
  with check (true);

create policy "Admins can read subscribers"
  on public.newsletter_subscribers for select
  using (public.is_admin());

create policy "Admins can delete subscribers"
  on public.newsletter_subscribers for delete
  using (public.is_admin());
