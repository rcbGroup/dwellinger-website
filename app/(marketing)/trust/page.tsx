import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  Lock,
  FileText,
  Star,
  ArrowRight,
  Eye,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Trust Centre | Dwellinger',
  description:
    'How Dwellinger verifies contractors, protects homeowners, and ensures every interaction on the platform is backed by real data — not promises.',
}

const verifications = [
  {
    icon: FileText,
    title: 'Identity & Companies House',
    desc: 'Every contractor account is matched against Companies House records. Sole traders must supply a verified government-issued ID. Unverified accounts are never listed.',
  },
  {
    icon: Shield,
    title: 'Public Liability Insurance',
    desc: 'A minimum of £2m public liability insurance is required before a Builder Score™ is issued. Certificates are checked at onboarding and must be renewed annually.',
  },
  {
    icon: CheckCircle,
    title: 'CDM Compliance Record',
    desc: 'We verify that contractors have correctly applied CDM 2015 regulations on relevant past projects. CDM compliance history is one of the five components in the Builder Score™ algorithm.',
  },
  {
    icon: Star,
    title: 'Verified Client Reviews',
    desc: 'Reviews are invited by the platform directly to the homeowner — not by the contractor. Clients confirm key project details before a review is accepted. Unverifiable reviews are rejected.',
  },
  {
    icon: Eye,
    title: 'Payment Behaviour',
    desc: 'We track payment disputes, late payment reports from subcontractors, and CCJ history through public records. Contractors with unresolved payment issues are flagged on their profile.',
  },
]

const scoreComponents = [
  { label: 'Verified client reviews', pct: 30, color: '#C4773B' },
  { label: 'Compliance record', pct: 25, color: '#b56b30' },
  { label: 'Insurance & accreditations', pct: 20, color: '#a05f28' },
  { label: 'Payment behaviour', pct: 15, color: '#8c5323' },
  { label: 'Dispute resolution', pct: 10, color: '#78461e' },
]

const reviewSteps = [
  {
    n: '01',
    title: 'Invite sent by the platform',
    desc: 'After a project milestone or completion is recorded, Dwellinger sends a review request directly to the verified homeowner email. The contractor cannot trigger or modify this invitation.',
  },
  {
    n: '02',
    title: 'Client confirms project details',
    desc: 'The homeowner confirms the project type, value band, start and end dates, and contractor name before their review is accepted. This prevents fake or recycled reviews.',
  },
  {
    n: '03',
    title: 'Review weighted by project size',
    desc: 'A review for a £180k double-storey extension carries more weight in the algorithm than a £5k bathroom refurbishment. The scoring reflects the complexity of work verified.',
  },
]

const disputeSteps = [
  {
    label: 'Report submitted',
    desc: 'Use the Report button on any contractor profile or project page. Provide a description and any supporting documents.',
  },
  {
    label: 'Acknowledgement within 24 hours',
    desc: 'Our trust team confirms receipt and assigns a case number. You will receive communication through the platform, not email.',
  },
  {
    label: 'Investigation period — 5 working days',
    desc: 'We contact both parties, review project records held on the platform, and assess any documentary evidence provided.',
  },
  {
    label: 'Decision and action',
    desc: "We issue a decision to both parties. Outcomes range from a formal warning on the contractor's profile to suspension and removal from the platform.",
  },
  {
    label: 'Escalation',
    desc: 'If you are unsatisfied with the outcome you may escalate to a senior review. We aim to resolve escalations within 10 additional working days.',
  },
]

export default function TrustCentrePage() {
  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="pt-16 pb-20 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <p className="section-tag mb-3">Trust Centre</p>
          <h1 className="font-display text-h1 text-white max-w-3xl mb-6">
            Dwellinger{' '}
            <span className="text-amber">Trust Centre</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mb-8 leading-relaxed">
            How we verify contractors, protect homeowners, and ensure every interaction on
            the platform is backed by real data — not promises.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/search" className="btn-primary-lg">
              Find verified contractors <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-secondary text-base px-8 py-4">
              Report a concern
            </Link>
          </div>
        </div>
      </section>

      {/* ─── What We Verify ─── */}
      <section className="py-20 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">Verification</p>
            <h2 className="section-title">What we verify before a contractor is listed</h2>
            <p className="text-text-secondary mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Every contractor on Dwellinger must pass five verification checks before receiving
              a Builder Score™ and appearing in search results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {verifications.map((v) => (
              <div key={v.title} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-md bg-amber-subtle border border-amber-border flex items-center justify-center flex-shrink-0">
                    <v.icon className="w-4 h-4 text-amber" />
                  </div>
                  <h3 className="text-white font-bold text-base">{v.title}</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
            <div className="card p-6 border-amber-border bg-amber-subtle">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-md bg-amber flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-white font-bold text-base">Annual re-verification</h3>
              </div>
              <p className="text-text-muted text-sm leading-relaxed">
                Verification is not a one-time event. Insurance certificates, CDM records, and
                payment behaviour are reviewed annually. Any contractor who fails re-verification
                has their Builder Score™ suspended until the issue is resolved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Builder Score™ Methodology ─── */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">Builder Score™ Methodology</p>
            <h2 className="section-title">How the 0–1000 score is calculated</h2>
            <p className="text-text-secondary mt-4 max-w-xl mx-auto text-sm leading-relaxed">
              Builder Score™ is a proprietary algorithm that distils five data categories into a
              single trust rating. Higher scores indicate a stronger, more consistent track record
              across all five dimensions.
            </p>
          </div>
          <div className="card p-8 mb-8 space-y-5">
            {scoreComponents.map((sc) => (
              <div key={sc.label}>
                <div className="flex justify-between mb-1">
                  <span className="text-text-secondary text-sm">{sc.label}</span>
                  <span className="text-amber font-bold text-sm">{sc.pct}%</span>
                </div>
                <div style={{ height: '8px', borderRadius: '4px', backgroundColor: '#1f2937', overflow: 'hidden' }}>
                  <div style={{ width: `${sc.pct}%`, height: '100%', backgroundColor: sc.color, borderRadius: '4px' }} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { band: '800–1000', label: 'Exceptional', color: '#C4773B' },
              { band: '600–799', label: 'Strong', color: '#a05f28' },
              { band: '400–599', label: 'Acceptable', color: '#6b7280' },
              { band: '0–399', label: 'Below threshold', color: '#4b5563' },
            ].map((b) => (
              <div key={b.band} className="card p-4 text-center">
                <div className="text-sm font-bold mb-1" style={{ color: b.color }}>{b.band}</div>
                <div className="text-text-muted text-xs">{b.label}</div>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-xs text-center mt-4">
            Contractors scoring below 400 are not listed in homeowner search results.
          </p>
        </div>
      </section>

      {/* ─── Review Verification Process ─── */}
      <section className="py-20 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="section-tag mb-3">Reviews</p>
            <h2 className="section-title">How we verify every review</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-0">
            {reviewSteps.map((step, i) => (
              <div key={step.n} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-amber flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-sm text-white">{step.n}</span>
                  </div>
                  {i < reviewSteps.length - 1 && (
                    <div className="w-px flex-1 bg-border my-2" />
                  )}
                </div>
                <div className="pb-10 last:pb-0">
                  <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── When Something Goes Wrong ─── */}
      <section className="py-20 bg-bg">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">Disputes</p>
            <h2 className="section-title">What happens when something goes wrong</h2>
          </div>
          <div className="space-y-4 mb-8">
            {disputeSteps.map((ds, i) => (
              <div key={ds.label} className="flex gap-5 card p-5">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#C4773B' }}>
                  <span className="text-white font-bold text-xs">{i + 1}</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1">{ds.label}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{ds.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-6 border" style={{ backgroundColor: 'rgba(196,119,59,0.08)', borderColor: 'rgba(196,119,59,0.3)' }}>
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-bold text-sm mb-1">Resolution timeline</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Standard disputes resolved within <strong className="text-amber">5 working days</strong>.
                  Escalated disputes within <strong className="text-amber">10 additional working days</strong>.
                  Safety or financial harm issues within <strong className="text-amber">1 working day</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Data & Privacy ─── */}
      <section className="py-20 bg-bg-surface border-y border-border">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="section-tag mb-3">Data & Privacy</p>
            <h2 className="section-title">How we protect your data</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: Lock, title: 'Encrypted at rest', desc: 'All personal data, project files, and documents are encrypted at rest using AES-256. Data in transit is protected by TLS 1.3.' },
              { icon: Shield, title: 'GDPR compliant', desc: 'Operated in compliance with UK GDPR. You have the right to access, correct, export, and delete your data at any time.' },
              { icon: Eye, title: 'Never sold', desc: 'We do not sell, trade, or rent your personal data to third parties. Data shared with contractors is limited to what the project requires.' },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-md bg-amber-subtle border border-amber-border flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-amber" />
                  </div>
                  <h3 className="text-white font-bold text-base">{item.title}</h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-xs text-center mt-6">
            Read our <Link href="/privacy" className="text-amber hover:underline">Privacy Policy</Link> and <Link href="/cookies" className="text-amber hover:underline">Cookie Policy</Link>.
          </p>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-16 bg-bg border-t border-border">
        <div className="container mx-auto text-center">
          <p className="section-tag mb-3">Get in touch</p>
          <h2 className="section-title mb-4">Report a concern or ask a question about trust</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto text-sm leading-relaxed">
            If you have a question about how we verify contractors, handle disputes, or protect
            your data — our trust team is here to help.
          </p>
          <Link href="/contact" className="btn-primary-lg">
            Contact the trust team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
