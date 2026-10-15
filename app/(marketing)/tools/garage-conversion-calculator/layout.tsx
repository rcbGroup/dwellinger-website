import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Garage Conversion Cost Calculator London',
  description: 'Estimate the cost of converting your garage in London. Get an instant budget estimate based on size and specification level.',
  alternates: { canonical: '/tools/garage-conversion-calculator' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
