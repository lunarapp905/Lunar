-- Lunar Supabase schema (MVP)

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamptz default now()
);

create table public.spaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  created_by uuid references auth.users(id),
  created_at timestamptz default now()
);

create table public.space_members (
  id uuid primary key default gen_random_uuid(),
  space_id uuid references public.spaces(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  role text not null default 'member',
  created_at timestamptz default now(),
  unique (space_id, user_id)
);

create table public.space_events (
  id uuid primary key default gen_random_uuid(),
  space_id uuid references public.spaces(id) on delete cascade,
  title text not null,
  description text,
  event_time timestamptz,
  location text,
  created_by uuid references auth.users(id),
  created_at timestamptz default now()
);

create table public.space_announcements (
  id uuid primary key default gen_random_uuid(),
  space_id uuid references public.spaces(id) on delete cascade,
  title text not null,
  body text not null,
  created_by uuid references auth.users(id),
  created_at timestamptz default now()
);

create table public.bazaar_posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  description text,
  contact_email text,
  contact_phone text,
  location text,
  created_at timestamptz default now()
);

create table public.verification_levels (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text
);

-- Your existing restaurants table is used by Halal Finder.
-- Consider adding a foreign key to verification_levels if you standardize.
-- Example:
-- alter table public.restaurants add column verification_level_id uuid references public.verification_levels(id);
