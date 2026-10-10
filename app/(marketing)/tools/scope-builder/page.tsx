import { pageMetadata } from '@/lib/seo'
import Link from 'next/link'
import { FileText, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react'

export const metadata = pageMetadata({
  path: '/tools/scope-builder',
  title: 'Scope Builder — Define Your Project Before Getting Quotes | Dwellinger',
  description: 'Use Dwellinger\'s Scope Builder to create a clear, structured project brief. Better scope = better quotes. Guided questions take under 10 minutes.',
})

const sections = [
  { title: 'Project goals', desc: 'What do you want to achieve? Which rooms or areas are involved? What\'s staying and what\'s changing?' },
  { title: 'Site information', desc: 'Address, access constraints, neighbouring properties, ground conditions, existing structure type.' },
  { title: 'Design status', desc: 'Do you have drawings? Planning status? Structural engineer involvement? What\'s confirmed vs. still flexible?' },
  { title: 'Specification level', desc: 'Finish quality (budget / mid / high). Which materials are you providing yourself? What do you need contractors to include?' },
  { title: 'Programme & budget', desc: 'When do you need to start? Is there a hard deadline? What\'s your budget range?' },
  { title: 'Contractor expectations', desc: 'What are you looking for in a contractor? Any mandatory qualifications or accreditations?' },
]

const outputs = [
  'A structured project brief contractors can actually use',
  'A Readiness Score showing how complete your information is',
  'Suggested questions to ask contractors',
  'A ready-to-share PDF brief',
]

export default function ScopeBuilderPage() {
  return (
    <main>
      <section style={{ background: 'var(--color-bg)', padding: '80px 0 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: 'rgba(196,119,59,0.1)', border: '1px solid rgba(196,119,59,0.2)', color: 'var(--amber)' }}>
            <FileText style={{ width: 12, height: 12 }} />
            Free tool
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6 max-w-3xl" style={{ color: 'var(--color-text)' }}>
            Define your project properly.<br />
            Get quotes that actually compare.
          </h1>
          <p className="text-xl mb-8 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            The Scope Builder guides you through a structured set of questions that turn your idea into a project brief contractors can price accurately — not just guess at.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/register" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg">
              Start my scope
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </div>
        </div>
      </section>

      {/* The gap */}
      <section style={{ padding: '32px 0', background: 'rgba(239,68,68,0.04)', borderBottom: '1px solid rgba(239,68,68,0.12)' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex gap-3">
            <AlertTriangle style={{ width: 20, height: 20, color: '#f59e0b', flexShrink: 0, marginTop: 2 }} />
            <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
              <strong style={{ color: 'var(--color-text)' }}>Most homeowners send contractors a description, not a scope.</strong>{' '}
              Without a proper scope, contractors have to guess at quantities, finishes, and what&apos;s included. The result: quotes that can&apos;t be fairly compared and surprises once work starts.
            </p>
          </div>
        </div>
      </section>

      {/* What the scope builder covers */}
      <section style={{ padding: '80px 0', background: 'var(--color-bg-surface)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl font-bold mb-3 text-center" style={{ color: 'var(--color-text)' }}>
            Six sections. Ten minutes.
          </h2>
          <p className="text-center mb-12" style={{ color: 'var(--color-text-secondary)' }}>
            The Scope Builder walks you through six areas. Skip sections you don&apos;t know yet — the Readiness Score will tell you what&apos;s missing.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map((s, i) => (
              <div key={s.title} className="p-5 rounded-xl"
                style={{ background: 'var(--color-bg)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: 'rgba(196,119,59,0.1)', border: '1px solid rgba(196,119,59,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700, color: 'var(--amber)', marginBottom: 12,
                }}>{i + 1}</div>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--color-text)' }}>{s.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section style={{ padding: '80px 0', background: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-display text-2xl font-bold mb-8" style={{ color: 'var(--color-text)' }}>
            What you get at the end
          </h2>
          <div className="space-y-4">
            {outputs.map(o => (
              <div key={o} className="flex gap-4">
                <CheckCircle style={{ width: 20, height: 20, color: '#22c55e', flexShrink: 0 }} />
                <span style={{ color: 'var(--color-text-secondary)' }}>{o}</span>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/register" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg">
              Build my project scope
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
