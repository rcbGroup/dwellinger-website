import type { Metadata } from 'next'
import Link from 'next/link'
import { FACTS } from '@/content/facts'

export const metadata: Metadata = {
  title: 'rcbGroup — Connected Business | Dwellinger',
  description:
    'rcbGroup is a connected business to Dwellinger through common ownership. It is not independently rated and Dwellinger does not recommend it over other contractors.',
  robots: { index: false, follow: false }, // noindex until independent contractors are listed
}

export default function RCBGroupPage() {
  return (
    <div className="pt-16 pb-20 container mx-auto max-w-2xl">
      <div className="mb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-text-secondary bg-bg-surface border border-border px-3 py-1 rounded-full">
          Connected Business
        </span>
      </div>

      <h1 className="font-display text-3xl text-white mb-4">rcbGroup</h1>
      <p className="text-text-secondary mb-2">
        {FACTS.connectedBusinessDescriptor}
      </p>

      {/* Disclosure — required by §3 */}
      <div className="bg-bg-surface border border-amber/40 rounded-lg p-4 mb-8">
        <p className="text-sm text-text-secondary">
          <strong className="text-white">Disclosure:</strong>{' '}
          {FACTS.connectedBusinessDisclosure}
        </p>
      </div>

      {/* Verifiable facts only */}
      <div className="space-y-4 mb-8">
        <div className="flex gap-4">
          <span className="text-text-secondary text-sm w-40 flex-shrink-0">Companies House</span>
          <a
            href="https://find-and-update.company-information.service.gov.uk/company/09500269"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber hover:underline text-sm"
          >
            RCBS Limited — 09500269
          </a>
        </div>
        <div className="flex gap-4">
          <span className="text-text-secondary text-sm w-40 flex-shrink-0">Website</span>
          <a
            href="https://www.rcbgroup.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber hover:underline text-sm"
          >
            rcbgroup.co.uk
          </a>
        </div>
      </div>

      {/* Not scored */}
      <div className="bg-bg-surface border border-border rounded-lg p-4 mb-8">
        <p className="text-sm text-text-secondary">
          <strong className="text-white">Builder Score™:</strong> Not yet scored.
          Builder Score is a draft methodology and has not been applied to any contractor.
        </p>
      </div>

      <div className="mt-8 pt-8 border-t border-border">
        <p className="text-sm text-text-secondary">
          Looking for a contractor?{' '}
          <Link href="/get-a-quote" className="text-amber hover:underline">
            Request an estimate
          </Link>{' '}
          and we will help you find the right team.
        </p>
      </div>
    </div>
  )
}
