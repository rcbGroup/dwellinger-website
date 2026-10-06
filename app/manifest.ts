import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dwellinger — UK Property Platform',
    short_name: 'Dwellinger',
    description: "The UK's national design, build, and property intelligence platform.",
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-GB',
    categories: ['business', 'finance', 'utilities'],
    icons: [
      { src: '/icons/icon-72x72.png', sizes: '72x72', type: 'image/png', purpose: 'maskable any' },
      { src: '/icons/icon-96x96.png', sizes: '96x96', type: 'image/png', purpose: 'maskable any' },
      { src: '/icons/icon-128x128.png', sizes: '128x128', type: 'image/png', purpose: 'maskable any' },
      { src: '/icons/icon-144x144.png', sizes: '144x144', type: 'image/png', purpose: 'maskable any' },
      { src: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png', purpose: 'maskable any' },
      { src: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable any' },
      { src: '/icons/icon-384x384.png', sizes: '384x384', type: 'image/png', purpose: 'maskable any' },
      { src: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable any' },
    ],
    shortcuts: [
      { name: 'Get a Quote', short_name: 'Quote', description: 'AI-powered project estimate', url: '/estimate', icons: [{ src: '/icons/icon-96x96.png', sizes: '96x96' }] },
      { name: 'Find Contractors', short_name: 'Search', description: 'Search verified contractors', url: '/search', icons: [{ src: '/icons/icon-96x96.png', sizes: '96x96' }] },
    ],
    prefer_related_applications: false,
  }
}
