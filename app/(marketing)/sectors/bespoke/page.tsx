import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Bespoke Construction Contractors London | High-Spec Builds',
  description:
    'Find verified bespoke contractors for high-spec builds in London. Builder Score™ rated. Single point of accountability from concept to completion.',
}

const capabilities = [
  {
    title: 'Bespoke Extensions',
    desc: 'Architecturally designed rear, side and wrap-around extensions built to the highest specification. No catalogue solutions — every detail designed for your property.',
  },
  {
    title: 'High-Spec Refurbishments',
    desc: 'Full gut-and-rebuild refurbishments with premium finishes, bespoke joinery, specialist trades and meticulous attention to detail throughout.',
  },
  {
    title: 'Custom Loft Conversions',
    desc: 'Mansard, dormer and hip-to-gable conversions treated as architectural projects — roof lights, bespoke staircases, bespoke bathrooms and full structural remodelling.',
  },
  {
    title: 'Basement and Lower Ground Works',
    desc: 'Basement extensions and underpinning projects managed from structural engineering through waterproofing, fit-out and landscaping reinstatement.',
  },
  {
    title: 'Structural Remodelling',
    desc: 'Complex structural alterations including multi-storey steel frames, large open-plan reconfigurations and changes to the fundamental layout of a property.',
  },
  {
    title: 'Interior Design Coordination',
    desc: 'Verified contractors coordinate with your interior designer or manage the full interiors brief — FF&E procurement, bespoke cabinetry, specialist finishes and material selection.',
  },
]

const process = [
  {
    step: '01',
    title: 'Brief Development',
    desc: 'Your contractor spends time understanding your vision before any design work starts. Architecture, lifestyle, budget ceiling and programme expectations are all captured in a detailed brief.',
  },
  {
    step: '02',
    title: 'Design & Pre-Construction',
    desc: 'Working with your architect or the contractor\'s design partners, the scheme is developed through planning, technical design and pre-construction — advising on buildability, value engineering and procurement at every stage.',
  },
  {
    step: '03',
    title: 'Procurement & Tendering',
    desc: 'For bespoke projects, specialist procurement matters. Your contractor runs a controlled tender process for all major packages and uses their supply chain relationships to achieve the best outcome.',
  },
  {
    step: '04',
    title: 'Construction',
    desc: 'Site managed by a dedicated project manager. Weekly reporting. Tight quality control. No shortcuts — every junction, every finish, every threshold treated as visible.',
  },
  {
    step: '05',
    title: 'Completion & Handover',
    desc: 'A thorough snagging and commissioning process before handover. All warranties, certificates, O&M documentation and structural guarantees provided at completion.',
  },
]

export default function BespokePage() {
  return (
    <div>
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
            Built to a Standard Most Contractors Cannot Match
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
            For clients who want something exceptional. A single point of responsibility
            from the first design conversation through to the final finish — no compromises,
            no finger-pointing, no surprises.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/get-a-quote"
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
              href="/services/design-and-build"
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
              Our Design & Build Process
            </Link>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '24px',
            }}
          >
            Who This Is For
          </h2>
          <p style={{ color: '#4A5568', lineHeight: 1.75, fontSize: '1.02rem', marginBottom: '20px' }}>
            Dwellinger&apos;s verified bespoke contractors serve homeowners and developers who have a clear
            vision of what they want to achieve and need a delivery partner capable of executing
            it to the highest standard — not just a builder who will do what they are told.
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.75, fontSize: '1.02rem', marginBottom: '20px' }}>
            These projects typically have a higher specification, more complex design intent,
            greater structural scope, or require a level of coordination between design,
            engineering, interiors and construction that a standard contractor cannot manage.
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.75, fontSize: '1.02rem' }}>
            If you have been let down before by contractors who promised quality and delivered
            mediocrity, a verified Dwellinger bespoke contractor is the upgrade you need.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
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
            What Bespoke Contractors Deliver
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {capabilities.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: '#F5F0E8',
                  borderRadius: '8px',
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
                  {item.title}
                </h3>
                <p
                  style={{
                    color: '#4A5568',
                    fontSize: '0.93rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '48px',
            }}
          >
            The Bespoke Build Process
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {process.map((item, i) => (
              <div
                key={item.step}
                style={{
                  display: 'flex',
                  gap: '28px',
                  padding: '28px 0',
                  borderBottom: i < process.length - 1 ? '1px solid #EDE8DC' : 'none',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    backgroundColor: '#1A2340',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ color: '#C4773B', fontWeight: 700, fontSize: '0.85rem' }}>
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      color: '#1A2340',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: '#4A5568',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.desc}
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
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            Ready to Talk About Your Project?
          </h2>
          <p
            style={{
              color: '#c8d0de',
              fontSize: '1.05rem',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            Tell us about your project. We&apos;ll match you with a verified bespoke contractor who has the expertise, supply chain and track record your project demands.
          </p>
          <Link
            href="/get-a-quote"
            style={{
              display: 'inline-block',
              backgroundColor: '#C4773B',
              color: '#FFFFFF',
              padding: '16px 44px',
              borderRadius: '6px',
              fontWeight: 700,
              fontSize: '1.05rem',
              textDecoration: 'none',
            }}
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
