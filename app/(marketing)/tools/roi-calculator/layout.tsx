import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ROI Calculator — Property Investment Return on Investment',
  description: 'Free property ROI calculator for UK investors. Calculate return on investment, net yield, capital growth, and total return for buy-to-let and development projects.',
}

export default function RoiCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
