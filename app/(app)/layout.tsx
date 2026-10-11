import AppNav from '@/components/ui/AppNav'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh' }}>
      <AppNav />
      {children}
    </div>
  )
}