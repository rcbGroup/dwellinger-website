-- Migration 006: Builder Score v1.0 fields on contractors table
-- Adds 1000-point scale fields alongside the existing 0-100 score column.

ALTER TABLE contractors
  ADD COLUMN IF NOT EXISTS score_1000      INT CHECK (score_1000 BETWEEN 0 AND 1000),
  ADD COLUMN IF NOT EXISTS score_components JSONB,
  ADD COLUMN IF NOT EXISTS score_version   TEXT,
  ADD COLUMN IF NOT EXISTS score_coverage  NUMERIC(4,3) CHECK (score_coverage BETWEEN 0 AND 1),
  ADD COLUMN IF NOT EXISTS score_updated_at TIMESTAMPTZ;

-- score_1000 is only populated by computeBuilderScore() with recorded inputs.
-- A NULL value means "Not yet scored".
