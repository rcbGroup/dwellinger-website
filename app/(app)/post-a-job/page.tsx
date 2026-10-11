'use client'

import Link from 'next/link'
import { Clipboard, ArrowLeft, Clock } from 'lucide-react'

export default function PostAJobPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-2xl text-center">
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
        style={{ background: 'rgba(196,119,59,0.1)', border: '1px solid rgba(196,119,59,0.3)' }}
      >
        <Clipboard className="w-7 h-7 text-amber" />
      </div>
      <h1 className="font-display text-3xl text-white mb-3">Post a Job</h1>
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-4 h-4 text-amber" />
        <span className="text-amber text-sm font-medium">Coming soon</span>
      </div>
      <p className="text-text-muted mb-2 leading-relaxed">
        The contractor job board is in development. Post project opportunities and receive responses from verified contractors on the Dwellinger network.
      </p>
      <p className="text-text-muted text-sm mb-8">
        In the meantime, use the Scope Builder to prepare your project scope — you&apos;ll be ready to post the moment this feature launches.
      </p>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <Link
          href="/scope-builder"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-lg"
          style={{ background: '#C4773B' }}
        >
          <Clipboard className="w-4 h-4" />
          Build a scope
        </Link>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: 'var(--color-text-muted)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to dashboard
        </Link>
      </div>
    </main>
  )
}