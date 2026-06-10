-- Estatein admin platform schema

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Admin profiles (linked to Supabase Auth users)
-- ---------------------------------------------------------------------------
create table public.admin_profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text not null unique,
  full_name text,
  created_at timestamptz not null default now()
);

alter table public.admin_profiles enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.admin_profiles where id = auth.uid()
  );
$$;

create policy "Admins can read own profile"
  on public.admin_profiles for select
  using (auth.uid() = id);

create policy "Admins can update own profile"
  on public.admin_profiles for update
  using (auth.uid() = id);

-- ---------------------------------------------------------------------------
-- Properties
-- ---------------------------------------------------------------------------
create table public.properties (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  location text not null,
  location_tag text not null,
  price integer not null,
  price_formatted text not null,
  description text not null,
  bedrooms integer not null,
  bathrooms integer not null,
  area text not null,
  type text not null,
  image text not null,
  gallery text[] not null default '{}',
  features text[] not null default '{}',
  is_published boolean not null default true,
  is_featured boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index properties_published_idx on public.properties (is_published, sort_order);
create index properties_slug_idx on public.properties (slug);

alter table public.properties enable row level security;

create policy "Public can read published properties"
  on public.properties for select
  using (is_published = true);

create policy "Admins can manage properties"
  on public.properties for all
  using (public.is_admin())
  with check (public.is_admin());

-- ---------------------------------------------------------------------------
-- Contact / inquiry messages
-- ---------------------------------------------------------------------------
create type public.message_type as enum ('contact', 'inquiry', 'simple');
create type public.message_status as enum ('new', 'read', 'forwarded', 'resolved');

create table public.messages (
  id uuid primary key default gen_random_uuid(),
  type public.message_type not null default 'contact',
  status public.message_status not null default 'new',
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  message text not null,
  property_name text,
  preferred_location text,
  property_type text,
  bathrooms text,
  bedrooms text,
  budget text,
  inquiry_type text,
  hear_about text,
  agreed_terms boolean not null default false,
  assigned_team text,
  admin_notes text,
  forwarded_at timestamptz,
  created_at timestamptz not null default now()
);

create index messages_status_idx on public.messages (status, created_at desc);
create index messages_type_idx on public.messages (type, created_at desc);

alter table public.messages enable row level security;

create policy "Anyone can submit messages"
  on public.messages for insert
  with check (true);

create policy "Admins can read messages"
  on public.messages for select
  using (public.is_admin());

create policy "Admins can update messages"
  on public.messages for update
  using (public.is_admin());

create policy "Admins can delete messages"
  on public.messages for delete
  using (public.is_admin());

-- ---------------------------------------------------------------------------
-- Auto-create admin profile (run after creating user in Supabase Auth)
-- ---------------------------------------------------------------------------
create or replace function public.handle_new_admin_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.admin_profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.email)
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

-- Optional: enable if you want auto-profile on every signup
-- create trigger on_auth_user_created
--   after insert on auth.users
--   for each row execute function public.handle_new_admin_user();

-- ---------------------------------------------------------------------------
-- Updated_at trigger for properties
-- ---------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger properties_updated_at
  before update on public.properties
  for each row execute function public.set_updated_at();
