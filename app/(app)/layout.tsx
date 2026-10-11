import type { ReactNode } from 'react'
import AppNav from '@/components/ui/AppNav'

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <AppNav />
      {children}
    </div>
  )
}
