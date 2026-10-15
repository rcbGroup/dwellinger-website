-- Migration 004: Lead capture tables
-- Apply to production Supabase once §8 #2 is confirmed.
-- Until then, API routes handle errors with mailto: fallback.

-- quote_requests
CREATE TABLE IF NOT EXISTS quote_requests (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type             TEXT NOT NULL DEFAULT 'quote',
  name                  TEXT NOT NULL,
  email                 TEXT NOT NULL,
  phone                 TEXT,
  project_type          TEXT NOT NULL,
  package               TEXT,
  budget_range          TEXT,
  description           TEXT,
  postcode              TEXT,
  address               TEXT,
  source_page           TEXT,
  referrer              TEXT,
  utm_source            TEXT,
  utm_medium            TEXT,
  utm_campaign          TEXT,
  privacy_notice_version TEXT,
  marketing_consent     BOOLEAN NOT NULL DEFAULT false,
  status                TEXT NOT NULL DEFAULT 'new',
  created_at            TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
-- No anon/authenticated policies: only service-role can insert (bypasses RLS)

-- job_postings
CREATE TABLE IF NOT EXISTS job_postings (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type             TEXT NOT NULL DEFAULT 'job_posting',
  title                 TEXT NOT NULL,
  description           TEXT,
  location              TEXT,
  budget                TEXT,
  project_type          TEXT,
  contact_name          TEXT NOT NULL,
  contact_email         TEXT NOT NULL,
  contact_phone         TEXT,
  start_date            TEXT,
  source_page           TEXT,
  referrer              TEXT,
  utm_source            TEXT,
  utm_medium            TEXT,
  utm_campaign          TEXT,
  privacy_notice_version TEXT,
  marketing_consent     BOOLEAN NOT NULL DEFAULT false,
  status                TEXT NOT NULL DEFAULT 'open',
  created_at            TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE job_postings ENABLE ROW LEVEL SECURITY;

-- contact_submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type             TEXT NOT NULL DEFAULT 'contact',
  name                  TEXT NOT NULL,
  email                 TEXT NOT NULL,
  phone                 TEXT,
  subject               TEXT,
  message               TEXT,
  source                TEXT,
  source_page           TEXT,
  referrer              TEXT,
  utm_source            TEXT,
  utm_medium            TEXT,
  utm_campaign          TEXT,
  privacy_notice_version TEXT,
  marketing_consent     BOOLEAN NOT NULL DEFAULT false,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- call_bookings
CREATE TABLE IF NOT EXISTS call_bookings (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  form_type             TEXT NOT NULL DEFAULT 'call_booking',
  name                  TEXT NOT NULL,
  email                 TEXT NOT NULL,
  phone                 TEXT,
  preferred_time        TEXT,
  project_type          TEXT,
  notes                 TEXT,
  source_page           TEXT,
  referrer              TEXT,
  utm_source            TEXT,
  utm_medium            TEXT,
  utm_campaign          TEXT,
  privacy_notice_version TEXT,
  marketing_consent     BOOLEAN NOT NULL DEFAULT false,
  status                TEXT NOT NULL DEFAULT 'pending',
  created_at            TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE call_bookings ENABLE ROW LEVEL SECURITY;
