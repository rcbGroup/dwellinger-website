import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Development Appraisal Calculator — Property Development Analysis',
  description: 'Free development appraisal tool for UK property developers. Calculate GDV, build costs, profit margin and development finance requirements for any residential scheme.',
}

export default function DevelopmentAppraisalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
