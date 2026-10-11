import Nav from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
import SuggestionWidget from '@/components/shared/SuggestionWidget'
import { CookieConsent } from '@/components/shared/CookieConsent'
import type { ReactNode } from 'react'

export default function LangLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
      <Nav />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <SuggestionWidget />
      <CookieConsent />
    </div>
  )
}
