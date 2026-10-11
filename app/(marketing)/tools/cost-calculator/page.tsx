import { pageMetadata } from '@/lib/seo'
import CostCalc from './CostCalc'
import Link from 'next/link'

export const metadata = pageMetadata({
  path: '/tools/cost-calculator',
  title: 'Construction Cost Calculator UK | Free Instant Estimate | Dwellinger',
  description: 'Free UK construction cost calculator. Get an instant estimate for extensions, loft conversions, refurbishments and more. Based on real project data across London and the South East.',
})

export default function CostCalculatorPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#1A2340', color: '#FFFFFF', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
            Free Tool
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.9rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}>
            Construction Cost Calculator
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#c8d0de', maxWidth: 560, margin: '0 auto', lineHeight: 1.6 }}>
            Get an instant cost range for extensions, loft conversions, refurbishments and new builds. Based on 200+ real UK projects.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <CostCalc />

      {/* Explainer */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, textAlign: 'center', marginBottom: 40 }}>
            What affects construction costs in the UK?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { title: 'Location', desc: 'London and the South East typically cost 20–40% more than the Midlands or North due to higher labour rates and logistics.' },
              { title: 'Specification level', desc: 'Finishes, glazing, kitchen and bathroom quality account for 20–40% of total project cost. Spec decisions matter more than size.' },
              { title: 'Structural complexity', desc: 'Steelwork, underpinning, ground conditions and structural openings all add cost that calculators cannot fully capture.' },
              { title: 'Planning & compliance', desc: 'Building Regulations, party wall matters, planning conditions and CDM compliance all affect programme and cost.' },
            ].map((item) => (
              <div key={item.title} style={{ padding: 24, borderRadius: 8, border: '1px solid #EDE8DC' }}>
                <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1rem', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '40px 24px' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#6B7280', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
            <strong>Disclaimer:</strong> These figures are indicative estimates for budgeting purposes only and are not formal quotations.
            Actual costs will vary based on site conditions, specification, procurement route, and contractor.
            Figures reflect typical market rates in 2026. Always obtain a site-visit quotation before committing to a budget.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1A2340', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <h2 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', marginBottom: 14 }}>
            Need a Proper Estimate?
          </h2>
          <p style={{ color: '#c8d0de', fontSize: '1rem', marginBottom: 28, lineHeight: 1.6 }}>
            Our QS-reviewed estimating service produces a detailed cost breakdown suitable for planning, finance, and contractor appointments — from £95.
          </p>
          <Link
            href="/services/estimating"
            style={{ display: 'inline-block', backgroundColor: '#C4773B', color: '#FFFFFF', padding: '14px 36px', borderRadius: 6, fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}
          >
            Get a Detailed Estimate from £95
          </Link>
        </div>
      </section>
    </div>
  )
}
