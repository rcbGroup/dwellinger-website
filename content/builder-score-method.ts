/**
 * Builder Score™ methodology — single source of truth.
 *
 * Every page and llms.txt that describes the methodology imports from here.
 * Version: 1.0-draft  |  Date: October 2026
 *
 * Status: DRAFT METHODOLOGY — not yet applied to any contractor.
 * No contractor has been scored using this method.
 */

export const BUILDER_SCORE_METHOD = {
  version: '1.0-draft',
  date: '2026-10',
  status: 'Draft methodology — not yet applied to any contractor',
  scale: '0–1000',

  summary:
    'Builder Score™ is a 0–1000 trust rating for UK building contractors. It combines six evidence-based components. The methodology is in draft; no contractor has been scored yet.',

  components: [
    {
      name: 'Verified reviews',
      weight: 0.35,
      points: 350,
      dataSource: 'Project reviews tied to completed jobs with photos, dates and client confirmation',
      evidenceAccepted: 'Homeowner-confirmed project reviews submitted through Dwellinger',
      verifiedBy: 'Dwellinger review team (planned)',
      refreshInterval: 'On each new review',
      limitations: 'Dwellinger cannot verify reviews from third-party platforms',
    },
    {
      name: 'CDM compliance record',
      weight: 0.20,
      points: 200,
      dataSource: 'Contractor-supplied evidence; data partnerships planned',
      evidenceAccepted:
        'Pre-Construction Information, Construction Phase Plan, Health & Safety File for qualifying projects (CDM 2015)',
      verifiedBy: 'Dwellinger compliance team (planned)',
      refreshInterval: 'Annual re-submission',
      limitations: 'Dwellinger cannot access HSE enforcement records directly',
    },
    {
      name: 'Payment behaviour',
      weight: 0.15,
      points: 150,
      dataSource: 'Contractor-supplied evidence; data partnerships planned',
      evidenceAccepted: 'Supplier and subcontractor payment records; late-payment and dispute events',
      verifiedBy: 'Cross-referenced with supplier declarations (planned)',
      refreshInterval: 'Quarterly',
      limitations: 'Self-reported data until data-sharing partnerships are established',
    },
    {
      name: 'Insurance and accreditation',
      weight: 0.15,
      points: 150,
      dataSource: 'Contractor-supplied certificates; third-party register checks',
      evidenceAccepted:
        'Current public liability insurance certificate; professional indemnity where applicable; trade body membership; identity check',
      verifiedBy: 'Dwellinger verification team (planned)',
      refreshInterval: 'Annual certificate renewal',
      limitations: 'Insurance validity between renewal dates cannot be confirmed in real time',
    },
    {
      name: 'Dispute resolution record',
      weight: 0.10,
      points: 100,
      dataSource: 'Contractor-supplied evidence; data partnerships planned',
      evidenceAccepted: 'Outcome of disputes lodged through Dwellinger or named third-party resolution services',
      verifiedBy: 'Dwellinger compliance team (planned)',
      refreshInterval: 'On each resolved dispute',
      limitations: 'Disputes outside Dwellinger or named services are not visible',
    },
    {
      name: 'Response rate and platform activity',
      weight: 0.05,
      points: 50,
      dataSource: 'Dwellinger platform data',
      evidenceAccepted: 'Lead response time, communication quality, platform engagement',
      verifiedBy: 'Automated (Dwellinger platform)',
      refreshInterval: 'Rolling 90-day window',
      limitations: 'Only measures activity on the Dwellinger platform',
    },
  ],

  tiers: [
    { name: 'Platinum', min: 900, max: 1000 },
    { name: 'Gold', min: 700, max: 899 },
    { name: 'Silver', min: 500, max: 699 },
    { name: 'Bronze', min: 0, max: 499 },
  ],

  /** Minimum evidence coverage required to publish a score */
  coverageThreshold: 0.70,

  /** Days a contractor gets to review their score before first publication */
  rightOfReplyDays: 14,

  publishingRules: [
    'Scores are shown only for contractors who have claimed their profile and given explicit consent',
    'Contractors receive a preview and a right to reply before first publication',
    'A dispute contact is published at info@dwellinger.co.uk',
    'Missing evidence is never scored as zero; insufficient coverage returns "Not yet scored"',
    'A full DPIA will be completed before any scoring begins',
  ],

  legalNote:
    'Scoring is an evaluation and scoring activity that triggers a DPIA under UK GDPR Art 35. No contractor will be scored without their consent and without the DPIA being completed.',

  changelog: [
    { version: '1.0-draft', date: '2026-10', notes: 'Initial draft methodology. Not yet applied.' },
  ],
} as const

/** Convenience: single text block for pages that need a short status sentence */
export const BUILDER_SCORE_STATUS_TEXT =
  'Draft methodology — not yet applied to any contractor'
