import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Post a Job — Find Verified Contractors in London',
  description: 'Post your construction project on Dwellinger and receive quotes from Builder Score™-verified contractors in London. Free to post. No obligation.',
}

export default function PostAJobLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
