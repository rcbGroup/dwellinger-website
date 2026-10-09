import type { MetadataRoute } from 'next'

const BASE_URL = 'https://dwellinger.co.uk'
const TODAY = '2026-10-09'

const STATIC_PAGES: MetadataRoute.Sitemap = [
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Try to get blog posts — best-effort, never breaks the sitemap
  let blogEntries: MetadataRoute.Sitemap = []
  try {
    const { prisma } = await import('@/lib/prisma')
    const rows = await prisma.setting.findMany({
      where: { key: { startsWith: 'blog_post_' } },
      orderBy: { key: 'desc' },
      take: 500,
    })
    const seen = new Set<string>()
    for (const r of rows) {
      try {
        const parsed = JSON.parse(r.value)
        if (parsed?.slug && !seen.has(parsed.slug)) {
          seen.add(parsed.slug)
          blogEntries.push({
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

  return [...STATIC_PAGES, ...blogEntries]
}
