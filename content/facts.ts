/**
 * Dwellinger — single source of truth for entity, contact and feature facts.
 *
 * Every component that outputs entity details (JSON-LD, footer, llms.txt,
 * the chat prompt) reads from this file.
 *
 * See lib/company.ts for the entity constants that are gated behind PUBLISH_ENTITY.
 */

export const FACTS = {
  name: 'Dwellinger',
  url: 'https://dwellinger.co.uk',
  email: 'info@dwellinger.co.uk',

  /**
   * Short description ≤ 160 chars — used in meta descriptions, directory listings
   * and the AI chat prompt.
   */
  shortDescription:
    'Free London building-cost calculators and guides to checking a builder. Builder Score™ contractor ratings are in development.',

  descriptor:
    'UK contractor trust and verification platform, and property and construction intelligence toolkit',

  connectedBusinessDisclosure:
    'rcbGroup (RCBS Limited, 09500269) is a connected business through common ownership. It is not independently rated, and Dwellinger does not recommend it over other contractors.',

  connectedBusinessDescriptor:
    'Property Project Delivery, Coordination & Assurance',

  tradeMarkLine: 'Builder Score™ is a trade mark of Dwellinger',

  /**
   * What is live today vs planned.
   * Keep this accurate — it feeds the AI chat system prompt and llms.txt.
   */
  liveToday: [
    'Free calculators: extension, loft, bathroom, kitchen, garage, cost, HMO, ROI, development appraisal, materials guide',
    'Ask Dwellinger AI chat (powered by OpenAI gpt-4o-mini)',
    'Planning intelligence pages (sample data — live council feed coming soon)',
    'Estimating packages: Outline £95, Standard £150, Full £250, Premium £350 — manual service; request form then payment link sent by email within 1 working day',
    'Connected-business page for rcbGroup (not listed in directory; noindex)',
  ],

  planned: [
    'Contractor directory with Builder Score™ ratings (no contractors onboarded yet)',
    'Contractor platform plans: Member £49, Professional £99, Premium £199, Franchise £499 (planned pricing)',
    'Magic-link login and contractor accounts (pending email provider setup)',
    'Project Passport and scope builder (built; unreachable until login is fixed)',
    'Live council planning data feed',
    '"Check a builder" tool with Companies House live lookup (pending API key)',
    'Waitlist for founding contractors',
  ],

  /**
   * Estimating packages — shown on /services/estimating and /platform/pricing.
   */
  estimatingPackages: [
    { name: 'Outline', price: 95, description: 'Outline cost estimate for budgeting' },
    { name: 'Standard', price: 150, description: 'Standard cost plan with trade breakdown' },
    { name: 'Full', price: 250, description: 'Full cost plan with elemental breakdown' },
    { name: 'Premium', price: 350, description: 'Premium cost plan with full specification notes' },
  ],

  /**
   * Platform contractor plans — shown on /platform/pricing as planned pricing.
   * Not yet transactable.
   */
  contractorPlans: [
    { name: 'Member', price: 49, period: 'month', status: 'planned' },
    { name: 'Professional', price: 99, period: 'month', status: 'planned' },
    { name: 'Premium', price: 199, period: 'month', status: 'planned' },
    { name: 'Franchise', price: 499, period: 'month', status: 'planned' },
  ],

  /**
   * Geography
   */
  geography: {
    primary: 'Greater London (32 boroughs and the City of London)',
    secondary: 'Home Counties',
  },

  /**
   * Builder Score methodology version — must match content/builder-score-method.ts
   */
  builderScoreMethodVersion: '1.0-draft',
  builderScoreStatus: 'Draft methodology — not yet applied to any contractor',
} as const
