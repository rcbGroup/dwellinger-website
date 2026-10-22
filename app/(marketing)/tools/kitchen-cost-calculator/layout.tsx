import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Kitchen Cost Calculator London | Instant Estimates',
  description: 'Estimate your kitchen renovation cost in London. Input your kitchen size and spec level to get an instant budget estimate from Dwellinger's cost data.',
  alternates: { canonical: '/tools/kitchen-cost-calculator' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
