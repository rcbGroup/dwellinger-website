import Nav from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
import SuggestionWidget from '@/components/shared/SuggestionWidget'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
      <Nav />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <SuggestionWidget />
    </div>
  )
}
