/**
 * lib/leads.ts — shared lead persistence logic.
 *
 * Rules:
 * - Uses the service-role server client, which bypasses RLS.
 * - Does NOT use try/catch for Supabase errors: PostgREST errors return { error },
 *   they do not throw. Always check { error } from .insert().
 * - Never logs PII; logs only table name and error code.
 * - On failure, returns an honest error so the caller can show a mailto: fallback.
 */

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { z } from 'zod'

export type LeadTable =
  | 'quote_requests'
  | 'job_postings'
  | 'contact_submissions'
  | 'call_bookings'

export interface LeadInsertResult {
  ok: boolean
  /** Human-readable error to show the user (never contains PII) */
  userMessage?: string
}

/**
 * Insert a lead row into the given table.
 * Returns { ok: true } on success, { ok: false, userMessage } on failure.
 * Never throws; never silently swallows PostgREST errors.
 */
export async function insertLead(
  table: LeadTable,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: Record<string, any>
): Promise<LeadInsertResult> {
  let supabase
  try {
    supabase = createServerSupabaseClient()
  } catch {
    // Supabase env vars not set (e.g. preview without env)
    console.error(`[leads] Supabase not configured — cannot insert into ${table}`)
    return { ok: false, userMessage: 'Our systems are temporarily unavailable.' }
  }

  const { error } = await supabase.from(table).insert(row)
  if (error) {
    // Log code and table only — no PII
    console.error(`[leads] Insert failed on ${table}: code=${error.code} hint=${error.hint ?? ''}`)
    return { ok: false, userMessage: 'We could not save your request.' }
  }

  return { ok: true }
}

// ---------------------------------------------------------------------------
// Zod schemas — validate and sanitise form bodies before any DB insert
// ---------------------------------------------------------------------------

const nameField = z.string().min(1).max(120).transform((s) => s.trim())
const emailField = z
  .string()
  .email()
  .max(254)
  .transform((s) => s.toLowerCase().trim())
const phoneField = z.string().max(30).optional().nullable()
const textField = (max = 5000) => z.string().max(max).optional().nullable()
const honeypotField = z.string().max(0).optional() // must be empty

export const quoteRequestSchema = z.object({
  name: nameField,
  email: emailField,
  phone: phoneField,
  project_type: z.string().min(1).max(120),
  budget_range: textField(120),
  description: textField(),
  postcode: textField(12),
  timeline: textField(120),
  address: textField(500),
  source_page: textField(500),
  referrer: textField(500),
  utm_source: textField(200),
  utm_medium: textField(200),
  utm_campaign: textField(200),
  privacy_notice_version: textField(50),
  marketing_consent: z.boolean().optional().default(false),
  _hp: honeypotField, // honeypot
})

export const jobPostingSchema = z.object({
  title: z.string().min(1).max(200),
  description: textField(),
  location: textField(200),
  budget: textField(120),
  project_type: textField(120),
  contact_name: nameField,
  contact_email: emailField,
  contact_phone: phoneField,
  start_date: textField(50),
  source_page: textField(500),
  referrer: textField(500),
  utm_source: textField(200),
  utm_medium: textField(200),
  utm_campaign: textField(200),
  privacy_notice_version: textField(50),
  marketing_consent: z.boolean().optional().default(false),
  _hp: honeypotField,
})

export const contactSubmissionSchema = z.object({
  name: nameField,
  email: emailField,
  phone: phoneField,
  subject: textField(200),
  message: textField(),
  source_page: textField(500),
  referrer: textField(500),
  utm_source: textField(200),
  utm_medium: textField(200),
  utm_campaign: textField(200),
  privacy_notice_version: textField(50),
  marketing_consent: z.boolean().optional().default(false),
  _hp: honeypotField,
})

export const callBookingSchema = z.object({
  name: nameField,
  email: emailField,
  phone: phoneField,
  preferred_time: textField(200),
  project_type: textField(120),
  notes: textField(),
  source_page: textField(500),
  referrer: textField(500),
  utm_source: textField(200),
  utm_medium: textField(200),
  utm_campaign: textField(200),
  privacy_notice_version: textField(50),
  marketing_consent: z.boolean().optional().default(false),
  _hp: honeypotField,
})

/**
 * Build a pre-filled mailto: URL so the user can email their data if the DB fails.
 * Only plain fields — no sensitive data beyond what they already typed.
 */
export function buildMailtoFallback(
  to: string,
  subject: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>
): string {
  const safeEntries = Object.entries(data)
    .filter(([k]) => !k.startsWith('_') && k !== 'marketing_consent')
    .map(([k, v]) => `${k}: ${v ?? ''}`)
    .join('\n')
  const body = encodeURIComponent(`${safeEntries}\n\n(Sent via Dwellinger form fallback)`)
  const subjectEncoded = encodeURIComponent(subject)
  return `mailto:${to}?subject=${subjectEncoded}&body=${body}`
}
