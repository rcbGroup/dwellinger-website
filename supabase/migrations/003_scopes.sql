-- Migration 003: Scope of Works table
-- Stores generated scopes from the Scope Builder tool
-- RLS: users can only read/write their own scopes

create table if not exists public.scopes (
  id           uuid        primary key default gen_random_uuid(),
  user_id      uuid        not null references auth.users(id) on delete cascade,
  project_id   uuid        references public.projects(id) on delete set null,
  project_type text        not null,
  address      text,
  size_m2      numeric,
  storeys      text,
  design_status text,
  spec_level   text,
  requirements text[]      default '{}',
  notes        text,
  trades       text[]      default '{}',
  professionals text[]     default '{}',
  documents    text[]      default '{}',
  created_at   timestamptz default now()
);

-- Enable RLS
alter table public.scopes enable row level security;

-- Users can only see and manage their own scopes
create policy "scopes_owner_all"
  on public.scopes
  for all
  using  (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Index for fast user lookups
create index if not exists scopes_user_id_idx on public.scopes (user_id);
create index if not exists scopes_project_id_idx on public.scopes (project_id);
