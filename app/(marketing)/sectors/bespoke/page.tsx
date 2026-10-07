import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bespoke Construction & High-Spec Builds London | Dwellinger',
  description:
    'Exceptional design-and-build delivery for high-specification residential and commercial projects. Dwellinger manages every stage — from concept to completion.',
}

const capabilities = [
  {
    title: 'High-Specification Residential',
    desc: 'Full house rebuilds, significant refurbishments, and extensions requiring exceptional craftsmanship, bespoke joinery, and premium material sourcing.',
  },
  {
    title: 'Architect-Led Design & Build',
    desc: 'Where architecture, interiors, and construction are managed as a single coordinated process — reducing friction and protecting design intent throughout delivery.',
  },
  {
    title: 'Listed Building & Heritage Works',
    desc: 'Sensitive construction within listed and protected properties, requiring specialist knowledge of materials, methods, and consent requirements.',
  },
  {
    title: 'Structural Complexity',
    desc: 'Projects involving significant structural alteration — basements, load-bearing removals, steel frames, underpinning — handled with precision and full engineering coordination.',
  },
  {
    title: 'Interior Fit-Out & Specification',
    desc: 'Premium interior delivery including bespoke joinery, stone and tile installation, specialist plaster finishes, high-end kitchen and bathroom installation, and AV integration.',
  },
  {
    title: 'Luxury Commercial',
    desc: 'High-specification fit-outs and construction for boutique retail, private members clubs, hospitality, and professional office environments in Central and Greater London.',
  },
]

const steps = [
  { num: '01', label: 'Discovery', desc: 'We understand your vision, site constraints, and specification aspirations before proposing a delivery approach.' },
  { num: '02', label: 'Design Coordination', desc: 'We work alongside your architect and designer — or introduce our network — to develop a buildable, costed design.' },
  { num: '03', label: 'Pre-Construction', desc: 'Detailed programme, procurement strategy, specialist subcontractor appointments, and compliance planning.' },
  { num: '04', label: 'Managed Delivery', desc: 'Single point of accountability across all trades, with structured site management and client reporting.' },
  { num: '05', label: 'Completion & Handover', desc: 'Snagging, certification, warranties, and a structured handover process so you move in with confidence.' },
]

export default function BespokePage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          backgroundColor: '#1A2340',
          color: '#FFFFFF',
          padding: '96px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <p
            style={{
              color: '#C4773B',
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Bespoke Projects
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: '24px',
            }}
          >
            When Standard Is Not Enough
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#c8d0de',
              maxWidth: '680px',
              margin: '0 auto 36px',
              lineHeight: 1.7,
            }}
          >
            For projects that demand exceptional precision, bespoke specification, and a delivery partner
            who understands that quality and programme are not in opposition.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/book-a-call"
              style={{
                backgroundColor: '#C4773B',
                color: '#FFFFFF',
                padding: '14px 36px',
                borderRadius: '6px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1rem',
              }}
            >
              Discuss Your Project
            </Link>
            <Link
              href="/get-a-quote"
              style={{
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                padding: '14px 36px',
                borderRadius: '6px',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '1rem',
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            >
              Request an Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '24px',
            }}
          >
            Who This Service Is For
          </h2>
          <p style={{ color: '#4A5568', fontSize: '1rem', lineHeight: 1.8, marginBottom: '16px' }}>
            Bespoke project delivery is for clients who require a principal contractor capable of
            operating at the highest level of specification — one who can coordinate architects, interior
            designers, structural engineers, and specialist subcontractors without losing sight of
            programme, cost, or quality.
          </p>
          <p style={{ color: '#4A5568', fontSize: '1rem', lineHeight: 1.8, marginBottom: '16px' }}>
            These are typically larger residential refurbishments, new builds on complex sites, heritage
            projects, high-specification commercial fit-outs, or any project where the client expects a
            step above standard contractor service.
          </p>
          <p style={{ color: '#4A5568', fontSize: '1rem', lineHeight: 1.8 }}>
            If your project has a detailed architect-approved design, a specific specification, and a
            client who has invested significantly in the design stage — you need a builder who can
            protect that investment through delivery. That is what the bespoke service exists to do.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            What We Build
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '28px',
                  borderLeft: '4px solid #C4773B',
                }}
              >
                <h3
                  style={{
                    color: '#1A2340',
                    fontWeight: 700,
                    fontSize: '1rem',
                    marginBottom: '10px',
                  }}
                >
                  {cap.title}
                </h3>
                <p
                  style={{
                    color: '#4A5568',
                    fontSize: '0.93rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '48px',
            }}
          >
            The Delivery Process
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {steps.map((step) => (
              <div key={step.num} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: '#C4773B',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 style={{ color: '#1A2340', fontWeight: 700, fontSize: '1.05rem', marginBottom: '6px' }}>
                    {step.label}
                  </h3>
                  <p style={{ color: '#4A5568', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: '#1A2340', padding: '80px 24px', textAlign: 'center' }}
      >
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            Ready to Discuss Your Project?
          </h2>
          <p
            style={{
              color: '#c8d0de',
              fontSize: '1.05rem',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            Bespoke projects start with a conversation. Tell us what you are trying to achieve
            and we will tell you honestly whether we are the right partner.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/book-a-call"
              style={{
                display: 'inline-block',
                backgroundColor: '#C4773B',
                color: '#FFFFFF',
                padding: '16px 36px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
              }}
            >
              Book a Call
            </Link>
            <Link
              href="/get-a-quote"
              style={{
                display: 'inline-block',
                backgroundColor: 'transparent',
                color: '#FFFFFF',
                padding: '16px 36px',
                borderRadius: '6px',
                fontWeight: 600,
                fontSize: '1rem',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.4)',
              }}
            >
              Request an Estimate
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
