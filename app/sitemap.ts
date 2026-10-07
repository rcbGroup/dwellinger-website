import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://dwellinger.co.uk'
  const boroughs = ['hackney','enfield','barking','waltham-forest','greenwich','lewisham','islington','camden','tower-hamlets','newham']

  const staticRoutes = [
    '/', '/about', '/blog', '/contact', '/homeowners', '/contractors', '/investors',
    '/builder-score', '/pricing', '/login', '/register', '/estimate', '/search',
    '/get-a-quote', '/post-a-job',
    '/sectors/residential', '/sectors/commercial', '/sectors/developers',
    '/services/design-and-build', '/services/principal-contractor', '/services/estimating',
    '/tools/extension-cost-calculator', '/tools/loft-conversion-calculator',
    '/resources/guides/rear-extension-cost-london', '/resources/guides/loft-conversion-cost-london',
    '/portal', '/contractor/rcb-design-build',
    '/platform', '/platform/pricing',
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
