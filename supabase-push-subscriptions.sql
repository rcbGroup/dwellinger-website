-- Run this in Supabase SQL Editor → New Query
-- Creates the push_subscriptions table for Dwellinger PWA notifications

CREATE TABLE IF NOT EXISTS push_subscriptions (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  endpoint      TEXT UNIQUE NOT NULL,
  p256dh        TEXT,
  auth          TEXT,
  user_type     TEXT NOT NULL DEFAULT 'homeowner'
                  CHECK (user_type IN ('homeowner', 'contractor', 'investor')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for fast lookups by user_type (broadcast by segment)
CREATE INDEX IF NOT EXISTS idx_push_subs_user_type
  ON push_subscriptions (user_type);

-- RLS: service role bypasses all policies (our API uses service role key)
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;

-- No public access — only our server can read/write via service role
-- (service role key bypasses RLS automatically)

-- Trigger: auto-update updated_at
CREATE OR REPLACE FUNCTION update_push_subscription_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS push_sub_updated_at ON push_subscriptions;
CREATE TRIGGER push_sub_updated_at
  BEFORE UPDATE ON push_subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_push_subscription_updated_at();
