-- Wave 7: Contractors table for Dwellinger platform
-- Run this in Supabase Dashboard → SQL Editor

CREATE TABLE IF NOT EXISTS public.contractors (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text UNIQUE NOT NULL,
  name text NOT NULL,
  tagline text,
  location text NOT NULL DEFAULT 'London',
  score int DEFAULT 0 CHECK (score >= 0 AND score <= 100),
  verified boolean DEFAULT false,
  description text,
  specialisms text[] DEFAULT '{}',
  accreditations text[] DEFAULT '{}',
  years_experience int,
  projects_completed int,
  response_time text DEFAULT 'Same day',
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.contractors ENABLE ROW LEVEL SECURITY;

-- Public read — no auth required (this is a public directory)
CREATE POLICY "contractors_public_select" ON public.contractors
  FOR SELECT USING (active = true);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_contractors_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER contractors_updated_at
  BEFORE UPDATE ON public.contractors
  FOR EACH ROW
  EXECUTE FUNCTION update_contractors_updated_at();

-- Seed: RCB Design & Build as first verified contractor
INSERT INTO public.contractors
  (slug, name, tagline, location, score, verified, description, specialisms, accreditations, years_experience, projects_completed, response_time)
VALUES (
  'rcb-design-build',
  'RCB Design & Build | A2Z Principal Contractors',
  'London''s design-led, A-to-Z principal contractor for extensions, loft conversions and full refurbishments',
  'Greater London',
  94,
  true,
  'RCB Design & Build is a full-service design-and-build principal contractor operating across Greater London and surrounding counties. We take projects from initial idea through design, pre-construction planning, structural coordination, and full build delivery — giving homeowners one professional point of accountability from start to finish. We are not a loose collection of trades. We are a structured, design-aware, compliance-conscious principal contractor that understands how to manage a project end-to-end.',
  ARRAY['Rear Extensions', 'Loft Conversions', 'Full Refurbishments', 'Structural Alterations', 'Kitchen & Bathroom', 'Side Extensions', 'Wrap-Around Extensions'],
  ARRAY['Checkatrade'],
  12,
  200,
  'Same day'
)
ON CONFLICT (slug) DO NOTHING;
