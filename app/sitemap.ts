import type { MetadataRoute } from 'next'

const BASE_URL = 'https://dwellinger.co.uk'
const TODAY = '2026-10-13'

const CITY_SLUGS = ['london', 'manchester', 'birmingham', 'bristol', 'leeds', 'edinburgh', 'glasgow', 'liverpool']

const STATIC_PAGES: MetadataRoute.Sitemap = [
  // Core pages
  { url: `${BASE_URL}/`, lastModified: TODAY, changeFrequency: 'weekly', priority: 1.0 },
  { url: `${BASE_URL}/about`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/trust`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/how-it-works`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/contact`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.6 },
  { url: `${BASE_URL}/book-a-call`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/get-a-quote`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/post-a-job`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  // Audience pages
  { url: `${BASE_URL}/homeowners`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/for-homeowners`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/contractors`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/for-contractors`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/investors`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/for-investors`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/investor-hub`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/professionals`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/for-professionals`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  // Search & Builder Score
  { url: `${BASE_URL}/search`, lastModified: TODAY, changeFrequency: 'daily', priority: 0.9 },
  { url: `${BASE_URL}/builder-score`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.9 },
  // Blog
  { url: `${BASE_URL}/blog`, lastModified: TODAY, changeFrequency: 'weekly', priority: 0.8 },
  // Resources
  { url: `${BASE_URL}/resources`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  // Platform
  { url: `${BASE_URL}/platform`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/platform/pricing`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/platform/for-contractors`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  // Tools
  { url: `${BASE_URL}/tools`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/tools/extension-cost-calculator`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/tools/loft-conversion-calculator`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/tools/development-appraisal`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/tools/scope-builder`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/tools/project-readiness`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/tools/hmo-calculator`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/tools/roi-calculator`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/tools/planning`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  // Services
  { url: `${BASE_URL}/services`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/estimating`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.9 },
  { url: `${BASE_URL}/services/quantity-surveying`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/design-and-build`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/principal-contractor`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE_URL}/services/project-management`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  // Sectors
  { url: `${BASE_URL}/sectors`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/sectors/residential`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/sectors/commercial`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/sectors/developers`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE_URL}/sectors/bespoke`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
  // Locations (8 cities)
  { url: `${BASE_URL}/locations`, lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
  ...CITY_SLUGS.map(city => ({
    url: `${BASE_URL}/locations/${city}`,
    lastModified: TODAY,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  })),
  // Legal
  { url: `${BASE_URL}/terms`, lastModified: TODAY, changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE_URL}/privacy`, lastModified: TODAY, changeFrequency: 'yearly', priority: 0.3 },
  { url: `${BASE_URL}/cookies`, lastModified: TODAY, changeFrequency: 'yearly', priority: 0.2 },
]

const BLOG_SLUGS = [
  'loft-conversion-cost-london-2026',
  'house-extension-planning-permission-uk',
  'quantity-surveyor-cost-uk',
  'average-cost-to-build-a-house-uk-2026',
  'building-costs-per-m2-london-2026',
  'garage-conversion-cost-uk-2026',
  'why-builder-score-beats-star-ratings',
  'how-to-choose-a-building-contractor',
  'loft-conversion-planning-permission-guide',
  'cdm-regulations-homeowners-guide',
  'rear-extension-cost-uk-guide',
  'how-much-does-a-rear-extension-cost-uk-2025',
  'builder-score-explained-why-star-ratings-arent-enough',
  'residual-land-value-calculator-explained',
  'cdm-2015-for-homeowners-what-you-need-to-know',
  'dwell-agents-ai-for-construction-businesses',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static blog entries (always available)
  const staticBlogEntries: MetadataRoute.Sitemap = BLOG_SLUGS.map(slug => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: TODAY,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic blog entries from DB (best-effort)
  let dynamicBlogEntries: MetadataRoute.Sitemap = []
  try {
    const { prisma } = await import('@/lib/prisma')
    const rows = await prisma.setting.findMany({
      where: { key: { startsWith: 'blog_post_' } },
      orderBy: { key: 'desc' },
      take: 500,
    })
    const seen = new Set<string>(BLOG_SLUGS)
    for (const r of rows) {
      try {
        const parsed = JSON.parse(r.value)
        if (parsed?.slug && !seen.has(parsed.slug)) {
          seen.add(parsed.slug)
          dynamicBlogEntries.push({
            url: `${BASE_URL}/blog/${parsed.slug}`,
            lastModified: parsed.updatedAt ?? parsed.date ?? TODAY,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
          })
        }
      } catch { /* skip malformed */ }
    }
  } catch {
    // DB not available at build time — skip dynamic blog entries
  }

  return [...STATIC_PAGES, ...staticBlogEntries, ...dynamicBlogEntries]
}
