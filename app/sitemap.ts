import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://dwellinger.co.uk'
  const boroughs = [
    'hackney', 'enfield', 'barking', 'waltham-forest', 'greenwich',
    'lewisham', 'islington', 'camden', 'tower-hamlets', 'newham',
    'barnet', 'bexley', 'brent', 'bromley', 'croydon', 'ealing',
    'hammersmith-and-fulham', 'haringey', 'harrow', 'havering',
    'hillingdon', 'hounslow', 'kensington-and-chelsea', 'kingston-upon-thames',
    'lambeth', 'merton', 'redbridge', 'richmond-upon-thames',
    'southwark', 'sutton', 'wandsworth', 'westminster',
  ]

  const staticRoutes = [
    '/', '/about', '/blog', '/contact', '/homeowners', '/contractors', '/investors',
    '/builder-score', '/pricing', '/login', '/register', '/estimate', '/search',
    '/get-a-quote', '/post-a-job', '/book-a-call',
    '/sectors/residential', '/sectors/commercial', '/sectors/developers', '/sectors/bespoke',
    '/services/design-and-build', '/services/principal-contractor', '/services/estimating',
    '/services/estimating/order', '/services/quantity-surveying', '/services/project-management',
    '/tools/extension-cost-calculator', '/tools/loft-conversion-calculator',
    '/tools/hmo-calculator', '/tools/roi-calculator', '/tools/development-appraisal',
    '/tools/planning', '/investor-hub',
    '/resources/guides/rear-extension-cost-london', '/resources/guides/loft-conversion-cost-london',
    '/portal', '/contractor/rcb-design-build',
    '/platform', '/platform/for-contractors', '/platform/estimating-services', '/platform/pricing',
    '/privacy', '/terms', '/cookies',
  ]

  return [
    ...staticRoutes.map(route => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '/' ? 1 : 0.8,
    })),
    ...boroughs.map(b => ({
      url: `${base}/locations/${b}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
