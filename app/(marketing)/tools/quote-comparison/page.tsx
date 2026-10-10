import { pageMetadata } from '@/lib/seo'
import Link from 'next/link'
import { BarChart2, ArrowRight, CheckCircle, X } from 'lucide-react'

export const metadata = pageMetadata({
  path: '/tools/quote-comparison',
  title: 'Quote Comparison Tool — Compare Contractor Quotes Properly | Dwellinger',
  description: 'Compare contractor quotes beyond the bottom line. Dwellinger\'s Quote Comparison tool reveals what\'s included, what\'s excluded, and what to ask each contractor.',
})

const dimensions = [
  { title: 'Scope coverage', desc: 'Does each quote cover the same work? Are any sections missing or ambiguous?' },
  { title: 'Exclusions & assumptions', desc: 'What has the contractor explicitly excluded? What have they assumed that could change the price?' },
  { title: 'Material responsibilities', desc: 'What materials are the contractor providing vs. what are you expected to supply?' },
  { title: 'Preliminaries', desc: 'Does the quote include site setup, protection, waste removal, scaffold, and welfare?' },
  { title: 'VAT status', desc: 'Is VAT included? Is the contractor VAT registered?' },
  { title: 'Payment terms', desc: 'Milestone payments, retention, advance payments, final account mechanism?' },
  { title: 'Programme', desc: 'Stated start date, duration, key milestones, completion definition?' },
  { title: 'Insurance', desc: 'Is the contractor\'s insurance valid and does it cover this project type?' },
]

export default function QuoteComparisonPage() {
  return (
    <main>
      <section style={{ background: 'var(--color-bg)', padding: '80px 0 60px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{ background: 'rgba(196,119,59,0.1)', border: '1px solid rgba(196,119,59,0.2)', color: 'var(--amber)' }}>
            <BarChart2 style={{ width: 12, height: 12 }} />
            Free tool
          </div>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6 max-w-3xl" style={{ color: 'var(--color-text)' }}>
            Don&apos;t compare quotes by price.<br />
            Compare them by scope.
          </h1>
          <p className="text-xl mb-8 max-w-2xl" style={{ color: 'var(--color-text-secondary)' }}>
            The cheapest quote often isn&apos;t cheaper — it just excludes more. Dwellinger&apos;s Quote Comparison tool reveals what&apos;s actually in each quote, what&apos;s missing, and what questions to ask before you sign.
          </p>
          <Link href="/register" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg">
            Compare my quotes
            <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>
      </section>

      {/* Visual example of the problem */}
      <section style={{ padding: '60px 0', background: 'var(--color-bg-surface)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="font-semibold text-center mb-8" style={{ color: 'var(--color-text)' }}>
            The same project. Three quotes. What they actually include:
          </p>
          <div className="overflow-x-auto">
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--color-bg-raised)' }}>
                  {['', 'Quote A — £48,500', 'Quote B — £61,200', 'Quote C — £55,000'].map((h, i) => (
                    <th key={i} style={{
                      padding: '10px 12px', textAlign: i === 0 ? 'left' : 'center',
                      color: i === 2 ? 'var(--amber)' : 'var(--color-text-muted)',
                      fontWeight: i === 2 ? 700 : 600,
                      borderBottom: '1px solid rgba(255,255,255,0.06)',
                      fontSize: i === 0 ? 11 : 12,
                    }}>{h}{i === 2 ? ' ⭐' : ''}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Structural steels', true, true, true],
                  ['Scaffold', false, true, true],
                  ['Waste removal', false, true, true],
                  ['Provisional sums stated', false, false, true],
                  ['VAT included', false, true, true],
                  ['Site protection', false, true, true],
                  ['Floor screed', false, false, true],
                  ['Making good after trades', false, true, true],
                ].map(([label, a, b, c]) => (
                  <tr key={label as string} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '9px 12px', color: 'var(--color-text-secondary)' }}>{label}</td>
                    {[a, b, c].map((val, i) => (
                      <td key={i} style={{ padding: '9px 12px', textAlign: 'center' }}>
                        {val
                          ? <CheckCircle style={{ width: 16, height: 16, color: '#22c55e', display: 'inline' }} />
                          : <X style={{ width: 16, height: 16, color: '#ef4444', display: 'inline' }} />
                        }
                      </td>
                    ))}
                  </tr>
                ))}
                <tr style={{ background: 'rgba(196,119,59,0.05)' }}>
                  <td style={{ padding: '10px 12px', fontWeight: 700, color: 'var(--color-text)', fontSize: 12 }}>Adjusted like-for-like</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', fontWeight: 700, color: '#ef4444', fontSize: 13 }}>~£79,000</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', fontWeight: 700, color: 'var(--amber)', fontSize: 13 }}>£61,200</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', fontWeight: 700, color: '#22c55e', fontSize: 13 }}>£55,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-center mt-4" style={{ color: 'var(--color-text-muted)' }}>
            Illustrative example. Cheapest bottom line is often not the cheapest project.
          </p>
        </div>
      </section>

      {/* What it checks */}
      <section style={{ padding: '80px 0', background: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl font-bold mb-3 text-center" style={{ color: 'var(--color-text)' }}>
            Eight dimensions of a quote
          </h2>
          <p className="text-center mb-12" style={{ color: 'var(--color-text-secondary)' }}>
            The comparison tool checks every quote across eight dimensions that affect the real cost and risk.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {dimensions.map((d, i) => (
              <div key={d.title} className="flex gap-4 p-5 rounded-xl"
                style={{ background: 'var(--color-bg-surface)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{
                  width: 28, height: 28, borderRadius: '50%',
                  background: 'rgba(196,119,59,0.1)', border: '1px solid rgba(196,119,59,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, color: 'var(--amber)', flexShrink: 0,
                }}>{i + 1}</div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: 'var(--color-text)' }}>{d.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/register" className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg">
              Start comparing my quotes
              <ArrowRight style={{ width: 16, height: 16 }} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
