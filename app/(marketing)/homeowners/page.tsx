import { pageMetadata } from '@/lib/seo'
import Link from 'next/link'
import { Home, CheckCircle, ArrowRight, Shield, Zap, FileText, AlertCircle } from 'lucide-react'

export const metadata = pageMetadata({
  path: '/homeowners',
  title: 'For Homeowners — Find Verified Builders | Dwellinger',
  description: 'Dwellinger helps homeowners find verified builders for extensions, loft conversions, refurbishments and more. Get AI cost estimates. Compare Builder Score™ rated contractors.',
})

const projectTypes = [
  { name: 'Rear extensions', range: '£35k–£120k', link: '/tools/extension-cost-calculator?type=extension' },
  { name: 'Loft conversions', range: '£30k–£85k', link: '/tools/loft-conversion-calculator?type=loft' },
  { name: 'Full refurbishments', range: '£40k–£200k+', link: '/estimate?type=refurb' },
  { name: 'Kitchen extensions', range: '£45k–£130k', link: '/tools/extension-cost-calculator?type=kitchen-extension' },
  { name: 'Structural alterations', range: '£8k–£45k', link: '/estimate?type=structural' },
  { name: 'Bathroom renovation', range: '£5k–£25k', link: '/estimate?type=bathroom' },
]

const steps = [
  { n: '01', title: 'Describe your project', desc: "Tell us what you want to achieve. We'll ask the right questions to understand your project." },
  { n: '02', title: 'Get an AI cost estimate', desc: 'Receive an instant ballpark range grounded in real UK project data — not pulled from thin air.' },
  { n: '03', title: 'Check Builder Score™', desc: 'Search verified contractors ranked by compliance records, payment history, and verified reviews.' },
  { n: '04', title: 'Invite contractors to quote', desc: 'Send your project brief to matched contractors. They come to you with informed quotes.' },
  { n: '05', title: 'Compare properly', desc: "Our comparison tool shows what's included and what's missing in each quote — not just the totals." },
  { n: '06', title: 'Appoint and manage', desc: 'Issue a contract, agree milestones, and manage everything — documents, payments, sign-off — on-platform.' },
]

export default function HomeownersPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'var(--color-bg)', padding: '80px 0 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: 'rgba(196,119,59,0.1)', border: '1px solid rgba(196,119,59,0.2)', color: 'var(--amber)' }}
          >
            <Home style={{ width: 12, height: 12 }} />
            For homeowners
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6 max-w-3xl" style={{ color: 'var(--color-text)' }}>
            Build with confidence.<br />
            Know the cost before you start.
          </h1>
          <p className="text-xl mb-8 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            Dwellinger helps homeowners understand project costs, find verified contractors, and manage their build — from first idea to final handover.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/estimate" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg">
              Get a free cost estimate
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
            <Link href="/search" className="btn-secondary inline-flex items-center px-8 py-4 text-base font-semibold rounded-lg">
              Find a contractor
            </Link>
          </div>
        </div>
      </section>

      {/* Warning — what most homeowners don't know */}
      <section style={{ padding: '32px 0', background: 'rgba(239,68,68,0.04)', borderBottom: '1px solid rgba(239,68,68,0.12)' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex gap-3">
            <AlertCircle style={{ width: 20, height: 20, color: '#ef4444', flexShrink: 0, marginTop: 2 }} />
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              <strong style={{ color: 'var(--color-text)' }}>The average homeowner receives 3 quotes with no way to properly compare them.</strong>{' '}
              Scope is different. Exclusions are hidden. The cheapest quote often misses the most. Dwellinger shows you what&apos;s actually in each quote — and what&apos;s missing.
            </p>
          </div>
        </div>
      </section>

      {/* Project types */}
      <section style={{ padding: '80px 0', background: 'var(--color-bg-surface)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--amber)' }}>Project types</p>
            <h2 className="font-display text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
              What does your project cost?
            </h2>
            <p className="mt-3" style={{ color: 'var(--color-text-secondary)' }}>
              UK ranges based on real project data. Actual cost depends on spec, location, and site conditions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectTypes.map((pt) => (
              <Link
                key={pt.name}
                href={pt.link}
                className="p-5 rounded-xl flex items-center justify-between transition-all duration-200"
                style={{ background: 'var(--color-bg)', border: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none' }}
              >
                <div>
                  <div className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{pt.name}</div>
                  <div className="text-sm" style={{ color: 'var(--amber)' }}>{pt.range}</div>
                </div>
                <ArrowRight style={{ width: 16, height: 16, color: 'rgba(255,255,255,0.3)' }} />
              </Link>
            ))}
          </div>
          <p className="text-center text-xs mt-6" style={{ color: 'var(--color-text-muted)' }}>
            Ranges are illustrative. UK market data, Q4 2026. Excludes VAT. Excludes professional fees.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '80px 0', background: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--amber)' }}>The journey</p>
            <h2 className="font-display text-3xl font-bold" style={{ color: 'var(--color-text)' }}>How Dwellinger helps</h2>
          </div>
          {steps.map((step, i) => (
            <div key={step.n} className="flex gap-6" style={{ marginBottom: i < steps.length - 1 ? 40 : 0, position: 'relative' }}>
              {i < steps.length - 1 && (
                <div style={{ position: 'absolute', left: 19, top: 44, bottom: -40, width: 1, background: 'linear-gradient(to bottom, rgba(196,119,59,0.4), transparent)' }} />
              )}
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(196,119,59,0.1)', border: '1px solid rgba(196,119,59,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--amber)' }}>{step.n}</span>
              </div>
              <div>
                <h3 className="font-semibold mb-1.5" style={{ color: 'var(--color-text)' }}>{step.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reassurance cards */}
      <section style={{ padding: '80px 0', background: 'var(--color-bg-surface)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Builder Score™ on every contractor',
                desc: 'Not just star ratings. CDM compliance, payment behaviour, insurance, and verified reviews — one score.',
              },
              {
                icon: FileText,
                title: 'Project Passport',
                desc: 'All drawings, decisions, contracts, and sign-offs in one place. Yours to keep forever.',
              },
              {
                icon: Zap,
                title: 'AI assistant, human options',
                desc: 'Get AI guidance instantly. Escalate to a real professional when it matters.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-xl" style={{ background: 'var(--color-bg)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'rgba(196,119,59,0.1)', border: '1px solid rgba(196,119,59,0.2)' }}
                >
                  <Icon style={{ width: 20, height: 20, color: 'var(--amber)' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text)' }}>{title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to check next */}
      <section style={{ padding: '64px 0', background: 'var(--color-bg)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>Useful next steps</h2>
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              Not sure where to start? These tools help you get project-ready faster.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Project readiness', desc: '20-point checklist — see if you have enough to go to tender.', href: '/tools/project-readiness', cta: 'Check readiness' },
              { title: 'Scope builder', desc: "Document what you want built so every contractor quotes the same project.", href: '/tools/scope-builder', cta: 'Build scope' },
              { title: 'Planning checker', desc: 'Find out whether your project needs planning permission or qualifies as permitted development.', href: '/tools/planning', cta: 'Check planning' },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl flex flex-col" style={{ background: 'var(--color-bg-surface)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle style={{ width: 14, height: 14, color: 'var(--amber)', flexShrink: 0 }} />
                  <span className="font-semibold text-sm" style={{ color: 'var(--color-text)' }}>{item.title}</span>
                </div>
                <p className="text-xs mb-4 flex-1" style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
                <Link href={item.href} className="text-xs font-semibold inline-flex items-center gap-1" style={{ color: 'var(--amber)', textDecoration: 'none' }}>
                  {item.cta} <ArrowRight style={{ width: 12, height: 12 }} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--amber)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: '#0A0A0A' }}>
            Know your costs before you commit
          </h2>
          <p className="mb-8 text-lg" style={{ color: 'rgba(0,0,0,0.7)' }}>
            Get a free AI estimate for your project in under 2 minutes.
          </p>
          <Link
            href="/estimate"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold rounded-lg"
            style={{ background: '#0A0A0A', color: '#C4773B', textDecoration: 'none' }}
          >
            Get my free estimate
            <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>
      </section>
    </main>
  )
}
