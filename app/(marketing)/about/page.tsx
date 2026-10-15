import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import { FACTS } from '@/content/facts'
import { BUILDER_SCORE_STATUS_TEXT } from '@/content/builder-score-method'

export const metadata = pageMetadata({
  path: '/about',
  title: 'About Dwellinger — Builder Trust Score & Property Intelligence Platform',
  description:
    'Dwellinger is a UK contractor trust and verification platform. Learn how Builder Score™ works and how we help homeowners find trustworthy contractors.',
})

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="container mx-auto relative z-10 max-w-3xl">
          <p className="section-tag mb-3">About Dwellinger</p>
          <h1 className="font-display text-h1 text-white mb-6">
            A platform for contractor trust,{' '}
            <span className="text-amber">not just ratings</span>
          </h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">
            {FACTS.descriptor}. We serve homeowners, contractors, property investors and professionals
            across {FACTS.geography.primary} and {FACTS.geography.secondary}.
          </p>
          <p className="text-text-secondary text-lg leading-relaxed">
            Dwellinger is a platform, not a contractor. We do not manage or deliver construction projects.
          </p>
        </div>
      </section>

      {/* What is live today */}
      <section className="py-12 bg-bg-surface border-y border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl text-white mb-6">What is live today</h2>
          <ul className="space-y-3">
            {FACTS.liveToday.map((item, i) => (
              <li key={i} className="flex gap-3 text-text-secondary">
                <span className="text-amber mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <h2 className="font-display text-2xl text-white mb-6 mt-10">What is coming</h2>
          <ul className="space-y-3">
            {FACTS.planned.map((item, i) => (
              <li key={i} className="flex gap-3 text-text-secondary">
                <span className="text-text-muted mt-0.5">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Builder Score status */}
      <section className="py-12 bg-bg">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl text-white mb-4">Builder Score™</h2>
          <p className="text-text-secondary mb-4">
            Builder Score™ is a 0–1000 trust rating for UK building contractors, combining six
            evidence-based components: verified reviews, CDM compliance, payment behaviour,
            insurance and accreditation, dispute resolution, and platform activity.
          </p>
          <div className="bg-bg-surface border border-amber/40 rounded-lg p-4">
            <p className="text-sm text-amber font-semibold mb-1">Status</p>
            <p className="text-text-secondary text-sm">{BUILDER_SCORE_STATUS_TEXT}</p>
          </div>
          <p className="text-text-secondary mt-4 text-sm">
            Full methodology: <a href="/builder-score" className="text-amber hover:underline">/builder-score</a>
          </p>
        </div>
      </section>

      {/* Ownership and connected businesses — §3 required section */}
      <section id="ownership" className="py-12 bg-bg-surface border-y border-border">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl text-white mb-6">Ownership and connected businesses</h2>
          <p className="text-text-secondary mb-4">
            Dwellinger is operated by its team. For the legal entity that operates this site, see our{' '}
            <a href="/terms" className="text-amber hover:underline">Terms of Service</a> and{' '}
            <a href="/privacy" className="text-amber hover:underline">Privacy Policy</a>.
          </p>

          <div className="bg-bg border border-amber/40 rounded-lg p-5 mb-6">
            <h3 className="text-white font-semibold mb-2">Connected business: rcbGroup</h3>
            <p className="text-text-secondary text-sm mb-3">
              {FACTS.connectedBusinessDisclosure}
            </p>
            <p className="text-text-secondary text-sm">
              Descriptor: {FACTS.connectedBusinessDescriptor}.{' '}
              <a href="/contractor/rcbgroup" className="text-amber hover:underline">
                View connected business page
              </a>
            </p>
          </div>

          <div className="bg-bg border border-border rounded-lg p-5">
            <h3 className="text-white font-semibold mb-2">Lead routing</h3>
            <p className="text-text-secondary text-sm">
              Your details submitted through any Dwellinger form go to the Dwellinger team only.
              We will not pass them to any contractor, including our connected business rcbGroup,
              without asking you first.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-bg">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl text-white mb-4">Get in touch</h2>
          <p className="text-text-secondary">
            Email us at{' '}
            <a href={`mailto:${FACTS.email}`} className="text-amber hover:underline">
              {FACTS.email}
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
