-- Dwellinger: projects table
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New query)

CREATE TABLE IF NOT EXISTS public.projects (
  id            uuid        DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id       uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name          text        NOT NULL,
  type          text        NOT NULL,
  address       text        NOT NULL,
  postcode      text,
  description   text,
  status        text        DEFAULT 'idea',
  readiness     int         DEFAULT 15,
  budget_estimate text,
  docs_count    int         DEFAULT 0,
  team_count    int         DEFAULT 0,
  open_decisions int        DEFAULT 0,
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);

-- Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "projects_select"
  ON public.projects FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "projects_insert"
  ON public.projects FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "projects_update"
  ON public.projects FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "projects_delete"
  ON public.projects FOR DELETE
  USING (auth.uid() = user_id);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
