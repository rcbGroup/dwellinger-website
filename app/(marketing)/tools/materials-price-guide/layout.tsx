import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Construction Materials Price Guide UK 2026',
  description: 'UK construction materials prices for 2026. Compare timber, brick, insulation, plasterboard and more. Updated quarterly by Dwellinger's estimating team.',
  alternates: { canonical: '/tools/materials-price-guide' },
}

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
