/**
 * Company / entity constants for Dwellinger.
 *
 * PUBLISH_ENTITY controls whether legal identity details (registered name,
 * number, registered office) are rendered on the site.
 *
 * Default: false — pending confirmation of which entity operates the site (§8 #1).
 *
 * When §8 #1 is resolved:
 *   1. Set PUBLISH_ENTITY = true
 *   2. Update registeredOffice to the confirmed registered address
 *   3. Update legalName if the operating company differs from DWELLINGER LTD
 */

export const PUBLISH_ENTITY = false

/**
 * Always-safe public details (shown regardless of PUBLISH_ENTITY).
 */
export const DWELLINGER = {
  name: 'Dwellinger',
  url: 'https://dwellinger.co.uk',
  email: 'info@dwellinger.co.uk',
  /** Trade mark line — add "Ltd" only after §8 #1 is answered */
  tradeMarkLine: 'Builder Score™ is a trade mark of Dwellinger',
} as const

/**
 * Entity details — only published when PUBLISH_ENTITY is true.
 * Companies House record as of 15 Oct 2026: DWELLINGER LTD 16871183,
 * sole director Orsolya Kiss, registered office 167-169 5th Floor,
 * Great Portland Street, London W1W 5PF.
 *
 * lib/company.ts is the only file allow-listed for the company number.
 */
export const ENTITY = {
  legalName: 'Dwellinger Ltd',
  companyNumber: '16871183',
  jurisdiction: 'England and Wales',
  incorporated: '2025-11-24',
  registeredOffice: {
    line1: '167-169 5th Floor',
    line2: 'Great Portland Street',
    city: 'London',
    postcode: 'W1W 5PF',
    country: 'GB',
  },
  companiesHouseUrl:
    'https://find-and-update.company-information.service.gov.uk/company/16871183',
} as const
