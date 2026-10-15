import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Bathroom Cost Calculator London | Instant Estimates',
  description: 'Estimate your bathroom renovation cost in London. Input your bathroom size and spec level to get an instant budget estimate from Dwellinger's cost data.',
  alternates: { canonical: '/tools/bathroom-cost-calculator' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
