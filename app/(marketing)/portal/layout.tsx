import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contractor Portal — Leads, Quotes & Builder Score',
  description: 'Manage your Dwellinger contractor account. View qualified leads, generate professional quotes, track your Builder Score™, and access AI tools for your business.',
}

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
