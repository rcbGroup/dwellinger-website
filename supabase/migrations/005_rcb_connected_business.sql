-- Migration 005: rcbGroup as disclosed connected business
-- Adds a non-listed, noindex contractor row for the connected-business page.
-- Do NOT edit migration 002 (contractors seed).

INSERT INTO contractors (
  slug,
  name,
  tagline,
  verified,
  accreditations,
  score,
  years_experience,
  projects_completed,
  active,
  created_at
)
VALUES (
  'rcbgroup',
  'rcbGroup',
  'Property Project Delivery, Coordination & Assurance',
  false,
  '{}',
  NULL,
  NULL,
  NULL,
  false,  -- not listed in directory
  now()
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  tagline = EXCLUDED.tagline,
  verified = false,
  accreditations = '{}',
  score = NULL,
  active = false;
