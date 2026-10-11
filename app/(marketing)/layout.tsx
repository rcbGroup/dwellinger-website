import Nav from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
import { CookieConsent } from '@/components/shared/CookieConsent'
import { AskDwellinger } from '@/components/shared/AskDwellinger'
import type { ReactNode } from 'react'

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
      <Nav />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <CookieConsent />
      <AskDwellinger />
    </div>
  )
}
