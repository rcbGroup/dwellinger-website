import type { MetadataRoute } from 'next'

const BASE = 'https://dwellinger.co.uk'

const staticRoutes = [
  '/',
  '/about',
  '/blog',
  '/contact',
  '/register',
  '/login',
  '/privacy',
  '/terms',
  '/cookies',
  '/suggest',
  '/search',
  '/platform',
  '/platform/for-contractors',
  '/platform/pricing',
  '/investor-hub',
  '/homeowners',
  '/contractors',
  '/investors',
  '/services/design-and-build',
  '/services/principal-contractor',
  '/services/project-management',
  '/services/estimating',
  '/services/quantity-surveying',
  '/sectors/residential',
  '/sectors/commercial',
  '/sectors/developers',
  '/sectors/bespoke',
  '/tools/extension-cost-calculator',
  '/tools/loft-conversion-calculator',
  '/tools/development-appraisal',
  '/tools/hmo-calculator',
  '/tools/roi-calculator',
  '/tools/planning',
  '/book-a-call',
  '/get-a-quote',
  '/builder-score',
  '/estimate',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? 1 : route.startsWith('/tools') || route.startsWith('/services') ? 0.8 : 0.6,
  }))
}
