import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'App — Dwellinger', template: '%s | Dwellinger App' },
  robots: { index: false, follow: false },
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
      {children}
    </div>
  )
}
