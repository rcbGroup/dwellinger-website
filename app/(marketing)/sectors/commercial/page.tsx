import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Commercial Construction & Fit-Out London',
  description: 'Find verified contractors for office fit-out, retail transformation, mixed-use development and HMO conversions in London. CDM 2015 ready. Builder Score™ rated.',
};

const services = [
  {
    title: 'Office Fit-Out',
    desc: 'Cat A and Cat B office fit-outs across London. From open-plan refurbishments to bespoke design-and-build interiors. Minimal disruption, on schedule.',
  },
  {
    title: 'Retail Transformation',
    desc: 'Retail and hospitality fit-outs that make an impression. Shop fronts, interior fit-out, M&E, compliance — delivered to a tight programme.',
  },
  {
    title: 'Mixed-Use Development',
    desc: 'Ground-floor commercial with residential above. Full build managed under a principal contractor, coordinating design, structural and M&E.',
  },
  {
    title: 'HMO Conversion',
    desc: 'Convert residential stock to licensed HMO. Fire compartmentalisation, en-suite fit-outs, kitchen upgrades, compliance sign-off — all managed under one contract.',
  },
];

const trustPoints = [
  {
    title: 'CDM Principal Contractor',
    desc: 'Every contractor on the Dwellinger platform holds full CDM 2015 Principal Contractor readiness — health and safety plan, site management and regulatory compliance.',
  },
  {
    title: 'Full design and build',
    desc: 'Architectural design, planning, structural and M&E — all coordinated under one contract so you have a single point of accountability.',
  },
  {
    title: 'Transparent pricing',
    desc: 'Our AI cost intelligence platform produces detailed cost plans before work starts. No surprises at practical completion.',
  },
  {
    title: 'London-based team',
    desc: 'Verified contractors on the platform operate across Greater London and the Home Counties — with track records and Builder Score™ ratings you can check before appointing.',
  },
];

const steps = [
  { num: '01', title: 'Briefing & Appraisal', desc: 'We understand your requirements, constraints and programme — then produce a feasibility appraisal with indicative costs.' },
  { num: '02', title: 'Design & Approvals', desc: 'Architectural design, planning applications, building control submissions and pre-construction surveys — all managed by your appointed contractor.' },
  { num: '03', title: 'Build & Handover', desc: 'Full site delivery under CDM, with weekly progress reporting, QS cost control and a structured handover pack at completion.' },
];

export default function CommercialPage() {
  return (
    <div style={{ background: '#f0ede6' }}>
      {/* Hero */}
      <section style={{ background: '#1A2340', padding: '96px 24px 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#C4773B', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 16px' }}>
            Commercial Construction
          </p>
          <h1 style={{ color: '#ffffff', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.15 }}>
            Commercial Fit-Out &amp; Build — London
          </h1>
          <p style={{ color: '#c8d0e0', fontSize: '1.15rem', margin: '0 0 40px', lineHeight: 1.7, maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
            Find verified principal contractors for office fit-out, retail, mixed-use and HMO conversions — all Builder Score™ rated.
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
            Book a Discovery Call
          </Link>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, textAlign: 'center', margin: '0 0 12px' }}>
            Commercial Services
          </h2>
          <p style={{ color: '#4A5568', textAlign: 'center', margin: '0 0 48px' }}>
            Verified principal contractors across commercial and mixed-use sectors — all on the Dwellinger platform.
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

      {/* Why us */}
      <section style={{ background: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ color: '#1A2340', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, textAlign: 'center', margin: '0 0 48px' }}>
            Why Work With Us
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            {trustPoints.map((p, i) => (
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

      {/* Process */}
      <section style={{ background: '#1A2340', padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, margin: '0 0 12px' }}>
            Our Process
          </h2>
          <p style={{ color: '#c8d0e0', margin: '0 0 56px' }}>From brief to building, managed end to end.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {steps.map((s) => (
              <div key={s.num}>
                <div style={{ color: '#C4773B', fontSize: '2rem', fontWeight: 800, marginBottom: 12 }}>{s.num}</div>
                <h3 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 700, margin: '0 0 10px' }}>{s.title}</h3>
                <p style={{ color: '#c8d0e0', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#C4773B', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, margin: '0 0 16px' }}>
            Have a commercial project in mind?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', margin: '0 0 36px', lineHeight: 1.6 }}>
            Book a no-obligation discovery call with our commercial team.
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
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
