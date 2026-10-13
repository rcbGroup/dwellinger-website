import type { MetadataRoute } from 'next'

const BASE_URL = 'https://dwellinger.co.uk'
const TODAY = '2026-10-13'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, lastModified: TODAY, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/trust`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/search`, lastModified: TODAY, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/builder-score`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: TODAY, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contractors`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/homeowners`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/professionals`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/platform`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/platform/pricing`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/platform/for-contractors`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/tools/scope-builder`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/project-readiness`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/extension-cost-calculator`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/loft-conversion-calculator`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/bathroom-cost-calculator`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/kitchen-cost-calculator`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/garage-conversion-calculator`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/tools/materials-price-guide`, lastModified: TODAY, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/tools/hmo-calculator`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/tools/roi-calculator`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/tools/development-appraisal`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/tools/planning`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/services/design-and-build`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/principal-contractor`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/project-management`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/estimating`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services/quantity-surveying`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/sectors/residential`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/sectors/commercial`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/sectors/developers`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/sectors/bespoke`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/book-a-call`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/get-a-quote`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/post-a-job`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/terms`, lastModified: TODAY, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/privacy`, lastModified: TODAY, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/cookies`, lastModified: TODAY, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
