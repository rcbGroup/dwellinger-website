import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construction Project Management London | On-Time Delivery',
  description:
    'Professional construction project management for London homeowners and developers. Programme control, subcontractor management, progress reporting and on-site oversight.',
}

export default function ProjectManagementPage() {
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
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <p
            style={{
              color: '#C4773B',
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Our Services
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              marginBottom: '24px',
            }}
          >
            Construction Project Management
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#c8d0de',
              maxWidth: '660px',
              margin: '0 auto 36px',
              lineHeight: 1.65,
            }}
          >
            Your project delivered on programme, on budget, and to specification. We
            manage the entire construction process so you can focus on everything else.
          </p>
          <Link
            href="/contact"
            style={{
              display: 'inline-block',
              backgroundColor: '#C4773B',
              color: '#FFFFFF',
              padding: '14px 36px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
            }}
          >
            Discuss Your Project
          </Link>
        </div>
      </section>

      {/* The Problem */}
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
            Why Most Construction Projects Overrun
          </h2>
          <p
            style={{
              color: '#4A5568',
              lineHeight: 1.75,
              fontSize: '1.02rem',
              marginBottom: '28px',
            }}
          >
            The majority of domestic construction projects in London run over time and
            over budget — not because of incompetent tradespeople, but because of poor
            programme management. Trades are not sequenced correctly. Materials arrive
            late because nobody placed the order. Decisions are delayed because the client
            was not consulted at the right moment. Each delay compounds the next.
          </p>
          <p
            style={{
              color: '#4A5568',
              lineHeight: 1.75,
              fontSize: '1.02rem',
              marginBottom: '28px',
            }}
          >
            Professional project management addresses this at the source. A PM defines
            the programme before work starts, manages dependencies between trades,
            anticipates procurement lead times, and makes decisions proactively rather
            than reactively.
          </p>
          <p
            style={{
              color: '#4A5568',
              lineHeight: 1.75,
              fontSize: '1.02rem',
            }}
          >
            The cost of a project manager is consistently recovered in reduced delays,
            fewer variations, better subcontractor performance, and faster completion.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '40px',
            }}
          >
            What Our Project Management Service Covers
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {[
              {
                title: 'Programme Development',
                desc: 'A detailed Gantt-style programme before works start, showing every trade, their sequence, dependencies and critical path.',
              },
              {
                title: 'Subcontractor Management',
                desc: 'We procure, brief and manage every subcontractor. You have one point of contact. We handle the rest.',
              },
              {
                title: 'Procurement & Material Scheduling',
                desc: 'Long lead items identified early. Orders placed on time. No delays waiting for windows, steels or specialist finishes.',
              },
              {
                title: 'Weekly Progress Reporting',
                desc: 'Clear weekly updates showing what was achieved, what is planned next week, and any emerging risks to programme or budget.',
              },
              {
                title: 'Variation & Change Control',
                desc: 'Every change is priced, agreed in writing, and recorded before it is instructed. No surprise invoices at the end.',
              },
              {
                title: 'Quality & Snagging',
                desc: 'Regular quality inspections throughout the build. A formal snagging process before handover to ensure nothing is left incomplete.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: '#F5F0E8',
                  borderRadius: '8px',
                  padding: '28px',
                  border: '1px solid #EDE8DC',
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
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
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

      {/* Our Process */}
      <section style={{ backgroundColor: '#F5F0E8', padding: '80px 24px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '48px',
              textAlign: 'center',
            }}
          >
            How We Manage Your Project
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                step: '01',
                title: 'Pre-Construction Planning',
                desc: 'We review your drawings, identify all trades required, agree the programme, and confirm procurement lead times for all critical items before a single operative arrives on site.',
              },
              {
                step: '02',
                title: 'Mobilisation',
                desc: 'Site set-up, welfare arrangements, CDM notifications, and a pre-start meeting with all key subcontractors to agree expectations, access arrangements and key dates.',
              },
              {
                step: '03',
                title: 'Construction Phase',
                desc: 'Daily site presence or agreed inspection schedule depending on project scale. Weekly reporting. Proactive management of any programme risks as they emerge.',
              },
              {
                step: '04',
                title: 'Completion & Handover',
                desc: 'Formal snagging inspection, outstanding items schedule, Building Control sign-off coordination, and a structured handover with all warranties, certificates and O&M documentation.',
              },
            ].map((item, i) => (
              <div
                key={item.step}
                style={{
                  display: 'flex',
                  gap: '28px',
                  padding: '32px 0',
                  borderBottom: i < 3 ? '1px solid #EDE8DC' : 'none',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#1A2340',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{ color: '#C4773B', fontWeight: 700, fontSize: '0.9rem' }}
                  >
                    {item.step}
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      color: '#1A2340',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      marginBottom: '8px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: '#4A5568',
                      fontSize: '0.97rem',
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
        <div style={{ maxWidth: '620px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              marginBottom: '16px',
            }}
          >
            Need a Project Manager for Your Build?
          </h2>
          <p
            style={{
              color: '#c8d0de',
              fontSize: '1.05rem',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            Tell us about your project and we will explain exactly how we would manage
            delivery — programme, procurement, reporting and all.
          </p>
          <Link
            href="/contact"
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
            Talk to Our Team
          </Link>
        </div>
      </section>
    </div>
  )
}
