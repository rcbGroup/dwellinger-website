import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HMO Yield Calculator — House in Multiple Occupation Analysis',
  description: 'Free HMO yield calculator for London property investors. Calculate gross and net rental yield, conversion costs, licensing requirements and room-by-room income for HMO properties.',
}

export default function HmoCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
