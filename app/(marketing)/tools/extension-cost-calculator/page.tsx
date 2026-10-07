import { Metadata } from 'next'
import Link from 'next/link'
import ExtensionCalc from './ExtensionCalc'

export const metadata: Metadata = {
  title: 'Extension Cost Calculator London | Instant Estimate | Dwellinger',
  description: 'Calculate the cost of your house extension in London or the South East. Instant indicative range based on 143+ real London projects. Single and double storey.',
}

export default function ExtensionCalculatorPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ backgroundColor: '#1A2340', color: '#FFFFFF', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '14px', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Free Tool
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 2.9rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '16px' }}>
            House Extension Cost Calculator
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#c8d0de', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
            Get an instant cost range for your extension based on size, type, location, and finish level. Based on real London project data.
          </p>
        </div>
      </section>

      {/* Calculator (client component) */}
      <ExtensionCalc />

      {/* Context strip */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '64px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 700, textAlign: 'center', marginBottom: '40px' }}>
            What Affects Extension Costs in London?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {[
              { title: 'Structure & foundations', desc: 'Ground conditions, existing structure type and the proximity to neighbours all affect foundation and structural costs significantly.' },
              { title: 'Specification', desc: 'Glazing, flooring, kitchen, bathrooms and finishes vary enormously. A glass-roof kitchen extension can cost 60% more than a standard tiled-roof one at the same m².' },
              { title: 'Planning conditions', desc: 'Listed building consent, conservation area restrictions, or unusual permitted development constraints can all add cost and time.' },
              { title: 'Access & logistics', desc: 'Narrow London terraced streets, no parking for skips, basement access — all increase prelim costs that the calculator cannot account for.' },
            ].map((item) => (
              <div key={item.title} style={{ padding: '24px', borderRadius: '8px', border: '1px solid #EDE8DC' }}>
                <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1rem', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#1A2340', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '580px', margin: '0 auto' }}>
          <h2 style={{ color: '#FFFFFF', fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', marginBottom: '14px' }}>
            Ready to Get a Proper Number?
          </h2>
          <p style={{ color: '#c8d0de', fontSize: '1rem', marginBottom: '28px', lineHeight: 1.6 }}>
            Our QS-reviewed estimate service starts from £95 and gives you a detailed cost breakdown suitable for planning and budgeting.
          </p>
          <Link
            href="/services/estimating"
            style={{
              display: 'inline-block',
              backgroundColor: '#C4773B',
              color: '#FFFFFF',
              padding: '14px 36px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
            }}
          >
            See Estimating Packages from £95
          </Link>
        </div>
      </section>
    </main>
  )
}
