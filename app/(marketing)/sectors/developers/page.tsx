import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Construction Intelligence for Property Developers',
  description: 'Development appraisals, cost intelligence, BTR delivery and mixed-use construction for property developers in London and the Home Counties.',
};

const services = [
  {
    title: 'Development Appraisals',
    desc: 'AI-backed cost modelling and residual land value analysis before you commit to a site. Know your numbers before your competitors know the site is available.',
  },
  {
    title: 'Cost Intelligence',
    desc: 'Elemental cost plans benchmarked against live London market data. Updated quarterly. Available as standalone reports or integrated into our build service.',
  },
  {
    title: 'BTR / PRS Delivery',
    desc: 'Build-to-rent and private rented sector schemes delivered from groundworks to handover. Contractors on the platform understand the operational requirements of BTR landlords.',
  },
  {
    title: 'Mixed-Use Development',
    desc: 'Residential-over-commercial schemes managed under a single principal contractor. Planning coordination, structural delivery and fit-out — one contract, one team.',
  },
];

const stats = [
  { value: '1,972', label: 'Knowledge articles' },
  { value: '0–1000', label: 'Builder Score™ range' },
  { value: 'London & Home Counties', label: 'Operating Area' },
];

const whyPoints = [
  {
    title: 'AI-backed cost modelling',
    desc: 'Our proprietary platform produces elemental cost plans in hours, not weeks. Benchmarked against real London project data — not published indices.',
  },
  {
    title: 'QS review at every stage',
    desc: 'Quantity surveyor cost control from appraisal through to final account. Variances flagged early. No surprises at practical completion.',
  },
  {
    title: 'Vetted supply chain',
    desc: 'Every subcontractor is scored on our Builder Score™ system — reviews, compliance, on-time delivery, financial stability. Only the best make our list.',
  },
  {
    title: 'Planning intelligence',
    desc: 'We track planning decisions across London boroughs and flag opportunities and risks relevant to your pipeline. Data-backed, not guesswork.',
  },
];

export default function DevelopersPage() {
  return (
    <div style={{ background: '#f0ede6' }}>
      {/* Hero */}
      <section style={{ background: '#1A2340', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: 840, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px' }}>
            Developer Services
          </p>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.15 }}>
            Construction Intelligence for Property Developers
          </h1>
          <p style={{ color: '#c8d0e0', fontSize: '1.15rem', margin: '0 0 40px', lineHeight: 1.7, maxWidth: 660, marginLeft: 'auto', marginRight: 'auto' }}>
            From development appraisals to BTR delivery — data-backed decisions, one trusted contractor.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#C4773B',
              color: '#ffffff',
              padding: '16px 40px',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
            }}
          >
            Book a Call with Our Development Team
          </Link>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, textAlign: 'center', margin: '0 0 12px' }}>
            Developer Services
          </h2>
          <p style={{ color: '#4A5568', textAlign: 'center', margin: '0 0 48px' }}>
            Data-backed intelligence and principal contractor delivery for every stage of your scheme.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {services.map((s) => (
              <div key={s.title} style={{ background: '#ffffff', borderRadius: 12, padding: '32px 28px', border: '1px solid #EDE8DC' }}>
                <div style={{ width: 44, height: 4, background: '#C4773B', borderRadius: 2, marginBottom: 20 }} />
                <h3 style={{ color: '#1A2340', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 12px' }}>{s.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section style={{ background: '#0F1621', padding: '64px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center', padding: '16px 8px' }}>
                <div style={{ color: '#C4773B', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: 8, lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ color: '#c8d0e0', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section style={{ background: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, textAlign: 'center', margin: '0 0 16px' }}>
            Built for Developers
          </h2>
          <p style={{ color: '#4A5568', textAlign: 'center', margin: '0 0 48px' }}>
            The Dwellinger platform is aligned to development cycles — intelligence tools, cost data, and verified contractors all in one place.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            {whyPoints.map((p, i) => (
              <div key={p.title}>
                <div style={{
                  width: 40, height: 40, background: '#1A2340', borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#C4773B', fontWeight: 800, fontSize: '1rem', marginBottom: 16,
                }}>
                  {i + 1}
                </div>
                <h3 style={{ color: '#1A2340', fontSize: '1rem', fontWeight: 700, margin: '0 0 10px' }}>{p.title}</h3>
                <p style={{ color: '#4A5568', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#C4773B', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, margin: '0 0 16px', lineHeight: 1.2 }}>
            Ready to talk about your next scheme?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', margin: '0 0 36px', lineHeight: 1.6 }}>
            Book a call to discuss how Dwellinger&apos;s intelligence tools and contractor network can support your development pipeline.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#1A2340',
              color: '#ffffff',
              padding: '18px 48px',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
            }}
          >
            Book a Call with Our Development Team
          </Link>
        </div>
      </section>
    </div>
  );
}
