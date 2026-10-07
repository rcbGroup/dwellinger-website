import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Quantity Surveying & Cost Management London | Dwellinger',
  description:
    'Independent quantity surveying for London homeowners, developers and commercial clients. QS-reviewed estimates, tender analysis, variation control and cost reporting.',
}

export default function QuantitySurveyingPage() {
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
            Quantity Surveying & Cost Management
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
            Independent cost advice for projects of all sizes. We review contractor
            quotes, control variations, and give you a clear picture of what your
            project will actually cost — before you commit.
          </p>
          <Link
            href="/estimate"
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
            Get a QS Estimate
          </Link>
        </div>
      </section>

      {/* What We Do */}
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
            What a Quantity Surveyor Does
          </h2>
          <p
            style={{
              color: '#4A5568',
              lineHeight: 1.75,
              fontSize: '1.02rem',
              marginBottom: '28px',
            }}
          >
            A quantity surveyor is the financial control function on a construction
            project. Where an architect manages design and a structural engineer manages
            structure, the QS manages cost. They measure quantities, produce Bills of
            Quantities, check and compare contractor tenders, monitor expenditure against
            budget, and value variations as they arise on site.
          </p>
          <p
            style={{
              color: '#4A5568',
              lineHeight: 1.75,
              fontSize: '1.02rem',
              marginBottom: '28px',
            }}
          >
            On larger commercial and residential development projects, a QS is standard
            practice. On domestic projects — extensions, loft conversions, refurbishments
            — most homeowners skip this step, often to their cost. A single unchecked
            variation on a £80,000 extension can add £8,000 to £15,000 with no formal
            justification.
          </p>
          <p
            style={{
              color: '#4A5568',
              lineHeight: 1.75,
              fontSize: '1.02rem',
              marginBottom: '40px',
            }}
          >
            Dwellinger offers QS-level cost advice on residential and light commercial
            projects across London, from pre-tender estimates through to final account
            settlement.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
            }}
          >
            {[
              {
                title: 'Pre-Tender Estimates',
                desc: 'Accurate elemental cost plans before you go to tender, so you know if your project is affordable before committing to design fees.',
              },
              {
                title: 'Tender Review & Analysis',
                desc: 'We review contractor quotes line by line, identify gaps, anomalies and exclusions, and produce a comparative report so you can make an informed decision.',
              },
              {
                title: 'Variation Valuation',
                desc: 'We assess and agree the cost of variations and change orders as they arise, preventing scope creep from turning into uncontrolled expenditure.',
              },
              {
                title: 'Final Account Settlement',
                desc: 'We negotiate and agree the final account with your contractor, ensuring you only pay what is properly due under the contract.',
              },
              {
                title: 'Procurement Advice',
                desc: 'Guidance on procurement route — fixed-price contract, cost-plus, schedule of rates — and which approach best suits your project risk profile.',
              },
              {
                title: 'Cost Reporting',
                desc: 'Regular cost reports throughout the project, showing actual expenditure against budget, forecast final cost, and any emerging risks.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: '#FFFFFF',
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

      {/* Why QS */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '80px 24px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
              fontWeight: 700,
              marginBottom: '40px',
            }}
          >
            Why Independent QS Advice Protects You
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                title: 'Contractor quotes are not always comparable',
                desc: 'Two quotes for the same project can differ by 30–50% depending on what is included and excluded. Without a QS review, you may be comparing a fully-inclusive price against one that excludes prelims, VAT, or key trade packages.',
              },
              {
                title: 'Variations are where projects go over budget',
                desc: 'Most domestic projects run over budget not because of the original quote, but because of uncontrolled variations. A QS sets a formal process for agreeing changes before they are instructed.',
              },
              {
                title: 'Retentions and payment schedules need scrutiny',
                desc: 'Payment terms, retention percentages and milestone definitions in construction contracts can significantly affect your cash flow and your ability to withhold payment if work is defective.',
              },
              {
                title: 'Final accounts are negotiable',
                desc: 'Contractors routinely submit final accounts that include items not properly authorised or valued. A QS knows what to challenge and what to concede, and can recover their fee many times over in final account negotiations.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '24px',
                  borderRadius: '8px',
                  border: '1px solid #EDE8DC',
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#C4773B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1rem' }}>
                    ✓
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      color: '#1A2340',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      marginBottom: '6px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: '#4A5568',
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
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

      {/* Who */}
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
            Who Uses Our QS Service?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                title: 'Homeowners',
                desc: 'Getting a rear extension, loft conversion or refurbishment and want independent assurance that your contractor quote is fair and complete.',
                icon: '🏠',
              },
              {
                title: 'Property Developers',
                desc: 'Managing a residential conversion or development and need accurate cost plans, tender analysis and ongoing cost control throughout the project.',
                icon: '🏗️',
              },
              {
                title: 'Investors & Landlords',
                desc: 'Refurbishing a buy-to-let or HMO and want to protect your investment with independent cost advice and formal variation control.',
                icon: '📊',
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '36px',
                  border: '1px solid #EDE8DC',
                }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{card.icon}</div>
                <h3
                  style={{
                    color: '#1A2340',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    marginBottom: '12px',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: '#4A5568',
                    lineHeight: 1.65,
                    fontSize: '0.95rem',
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
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
            Get a QS-Reviewed Estimate for Your Project
          </h2>
          <p
            style={{
              color: '#c8d0de',
              fontSize: '1.05rem',
              marginBottom: '32px',
              lineHeight: 1.6,
            }}
          >
            Start with our free calculator, then order a full QS review from £95 — a
            qualified surveyor checks every line before you commit to anything.
          </p>
          <Link
            href="/estimate"
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
            Start Your Estimate
          </Link>
        </div>
      </section>
    </main>
  )
}
