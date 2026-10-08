import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { LanguageProvider } from '@/components/providers/LanguageProvider'

export const metadata: Metadata = {
  title: {
    default: "Dwellinger — UK's Property & Construction Intelligence Platform",
    template: '%s | Dwellinger',
  },
  description:
    "The UK's national property and construction intelligence platform. Find verified contractors with Builder Score™, get AI-powered estimates, analyse planning data, and manage your project from first idea to completion.",
  keywords: [
    'extension cost UK', 'loft conversion cost London', 'find builder London',
    'verified contractors UK', 'Builder Score', 'property platform UK',
    'construction estimating', 'principal contractor London', 'home extension planning',
    'UK property intelligence', 'planning applications UK', 'construction cost calculator',
    'HMO calculator', 'property development UK', 'contractor vetting UK',
  ],
  authors: [{ name: 'Dwellinger Ltd', url: 'https://dwellinger.co.uk' }],
  metadataBase: new URL('https://dwellinger.co.uk'),
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': '/',
      'ro': '/ro',
      'pl': '/pl',
      'pt': '/pt',
      'es': '/es',
      'de': '/de',
      'fr': '/fr',
      'it': '/it',
      'ar': '/ar',
      'zh': '/zh',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://dwellinger.co.uk',
    siteName: 'Dwellinger',
    title: "Dwellinger — UK's Property Intelligence Platform",
    description: 'Find verified contractors, get AI estimates, analyse planning data — one platform.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Dwellinger — UK Construction Intelligence' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dwellinger',
    title: "Dwellinger — UK's Property Intelligence Platform",
    description: 'Builder Score™. AI estimates. Verified contractors. One platform.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Dwellinger',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#C4773B',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
    { media: '(prefers-color-scheme: light)', color: '#F9F6F1' },
  ],
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://dwellinger.co.uk/#organization',
      name: 'Dwellinger',
      url: 'https://dwellinger.co.uk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dwellinger.co.uk/icons/icon-192x192.png',
      },
      description:
        "The UK's national property and construction intelligence platform — find verified contractors, AI estimates, planning data.",
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GB',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+44-7359-872594',
          contactType: 'customer service',
          areaServed: 'GB',
          availableLanguage: ['English', 'Romanian', 'Polish'],
        },
      ],
      sameAs: [
        'https://www.linkedin.com/company/dwellinger',
        'https://www.instagram.com/dwellinger',
        'https://www.youtube.com/@dwellinger',
        'https://www.tiktok.com/@dwellinger',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://dwellinger.co.uk/#website',
      url: 'https://dwellinger.co.uk',
      name: 'Dwellinger',
      publisher: { '@id': 'https://dwellinger.co.uk/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: 'https://dwellinger.co.uk/search?q={search_term_string}' },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Dwellinger',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'GBP',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192x192.png" />
        <link rel="shortcut icon" href="/icons/icon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        {/* Prevent flash of unstyled theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('dwell-theme');if(t&&['dark','mid','light'].includes(t)){document.documentElement.setAttribute('data-theme',t);}else{document.documentElement.setAttribute('data-theme','dark');}})()`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js');})}`,
          }}
        />
      </body>
    </html>
  )
}
