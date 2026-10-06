import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Dwellinger — UK's Property Intelligence Platform",
    template: '%s | Dwellinger',
  },
  description:
    "The UK's national design, build, and property intelligence platform. Find verified contractors with Builder Score™, get AI-powered estimates, and manage your project from first idea to completion.",
  keywords: [
    'extension cost UK', 'loft conversion cost London', 'find builder London',
    'verified contractors UK', 'Builder Score', 'property platform UK',
    'construction estimating', 'principal contractor London', 'home extension planning',
  ],
  authors: [{ name: 'Dwellinger Ltd', url: 'https://dwellinger.co.uk' }],
  metadataBase: new URL('https://dwellinger.co.uk'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://dwellinger.co.uk',
    siteName: 'Dwellinger',
    title: "Dwellinger — UK's Property Intelligence Platform",
    description: 'Find verified contractors, get AI estimates, manage your build — one platform.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Dwellinger Platform' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dwellinger — UK's Property Intelligence Platform",
    description: 'Builder Score™. AI estimates. Verified contractors. One platform.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Dwellinger',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#0A0A0A',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
      </head>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js');})}`,
          }}
        />
      </body>
    </html>
  )
}
