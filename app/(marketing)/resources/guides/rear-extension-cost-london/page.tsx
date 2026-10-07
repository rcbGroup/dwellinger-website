import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Much Does a Rear Extension Cost in London? [2026 Guide] | Dwellinger',
  description:
    'Complete guide to rear extension costs in London 2026. Average costs, planning rules, party wall, and how to find a verified contractor. Updated Q4 2026.',
}

export default function RearExtensionCostLondon() {
  return (
    <div style={{ background: '#f0ede6', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: '#1A2340', padding: '80px 24px 64px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              color: '#C4773B',
              fontWeight: 600,
              fontSize: '14px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}
          >
            The Honest 2026 Guide
          </p>
          <h1
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(28px, 5vw, 48px)',
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            How Much Does a Rear Extension Cost in London?
          </h1>
          <p
            style={{
              color: '#EDE8DC',
              fontSize: '18px',
              marginTop: '20px',
              opacity: 0.85,
            }}
          >
            Real figures. No filler. Updated October 2026.
          </p>
        </div>
      </section>

      {/* Article */}
      <section style={{ padding: '64px 24px' }}>
        <article
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '48px',
            boxShadow: '0 2px 20px rgba(26,35,64,0.07)',
          }}
        >
          {/* Intro */}
          <h2
            style={{
              color: '#1A2340',
              fontSize: '22px',
              fontFamily: 'Georgia, serif',
              marginTop: 0,
            }}
          >
            What Does a Rear Extension Actually Cost?
          </h2>
          <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '16px' }}>
            A rear extension in London typically costs between{' '}
            <strong>£45,000 and £160,000+</strong> depending on size, specification,
            storey count and your specific location within the capital. Single-storey
            extensions at the budget end of the market start around £44,000 for a modest
            20m² footprint; larger, double-storey extensions with high-end finishes can
            exceed £150,000. London-specific factors — labour costs, material delivery
            surcharges and premium land values — mean prices here run roughly 20–35%
            above the national average.
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '16px' }}>
            This guide breaks down what drives the cost, gives you a reliable cost
            table, explains the planning rules, and tells you how to find a contractor
            you can actually trust.
          </p>

          {/* 6 Factors */}
          <h2
            style={{
              color: '#1A2340',
              fontSize: '22px',
              fontFamily: 'Georgia, serif',
              marginTop: '40px',
            }}
          >
            6 Factors That Affect Your Rear Extension Cost
          </h2>

          {[
            {
              title: '1. Size and footprint',
              body: 'Cost scales with floor area. A 20m² single-storey room is significantly cheaper than a 40m² wrap-around. Most London homes opt for 20–30m² to keep costs manageable without exceeding Permitted Development limits.',
            },
            {
              title: '2. Single vs double storey',
              body: 'A double-storey rear extension adds bedroom or bathroom space on the upper floor. It typically costs 40–60% more than a single-storey equivalent but offers far greater value per m² because the footings, roof and steelwork are shared.',
            },
            {
              title: '3. Specification and finish',
              body: 'Bi-fold doors (£3,000–£8,000), underfloor heating (£80–£120/m²), bespoke joinery and premium tiling all add up. A "developer spec" extension might use standard uPVC and laminate; a design-led build with Crittall-style steel frames and marble worktops can be three times the cost.',
            },
            {
              title: '4. Structural complexity',
              body: 'Removing a load-bearing wall to open up the space requires RSJ or flitch beams, temporary propping and a structural engineer's sign-off. Budget an additional £3,000–£8,000 for this element if required.',
            },
            {
              title: '5. Planning and design fees',
              body: 'Architect fees typically run 5–12% of build cost. A planning application costs £206 in England. Structural engineers charge £800–£2,500. Building control applications add £600–£1,500. Factor these in from the outset.',
            },
            {
              title: '6. Location within London',
              body: 'Inner London boroughs (Kensington, Islington, Westminster) command labour premiums of 15–25% over outer boroughs. Congestion zone surcharges, parking restrictions and site access also affect cost — narrow terraced streets make deliveries harder and more expensive.',
            },
          ].map(({ title, body }) => (
            <div key={title} style={{ marginBottom: '28px' }}>
              <h3
                style={{
                  color: '#1A2340',
                  fontSize: '17px',
                  marginBottom: '8px',
                  fontWeight: 700,
                }}
              >
                {title}
              </h3>
              <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '16px', margin: 0 }}>
                {body}
              </p>
            </div>
          ))}

          {/* Cost Table */}
          <h2
            style={{
              color: '#1A2340',
              fontSize: '22px',
              fontFamily: 'Georgia, serif',
              marginTop: '40px',
              marginBottom: '20px',
            }}
          >
            Average Cost Breakdown (London, 2026)
          </h2>
          <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #EDE8DC' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '15px',
                minWidth: '400px',
              }}
            >
              <thead>
                <tr style={{ background: '#1A2340', color: '#FFFFFF' }}>
                  <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600 }}>
                    Type
                  </th>
                  <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600 }}>
                    Size
                  </th>
                  <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600 }}>
                    Cost Range
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Single Storey', size: '20m²', cost: '£44,000 – £65,000', bg: '#FFFFFF' },
                  { type: 'Single Storey', size: '40m²', cost: '£80,000 – £120,000', bg: '#F5F0E8' },
                  { type: 'Double Storey', size: '20m²', cost: '£65,000 – £90,000', bg: '#FFFFFF' },
                  { type: 'Double Storey', size: '40m²', cost: '£110,000 – £150,000', bg: '#F5F0E8' },
                ].map((row, i) => (
                  <tr key={i} style={{ background: row.bg }}>
                    <td
                      style={{
                        padding: '14px 18px',
                        color: '#1A2340',
                        fontWeight: 600,
                        borderBottom: '1px solid #EDE8DC',
                      }}
                    >
                      {row.type}
                    </td>
                    <td
                      style={{
                        padding: '14px 18px',
                        color: '#4A5568',
                        borderBottom: '1px solid #EDE8DC',
                      }}
                    >
                      {row.size}
                    </td>
                    <td
                      style={{
                        padding: '14px 18px',
                        color: '#C4773B',
                        fontWeight: 700,
                        borderBottom: '1px solid #EDE8DC',
                      }}
                    >
                      {row.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p
            style={{
              color: '#4A5568',
              fontSize: '13px',
              marginTop: '10px',
              fontStyle: 'italic',
            }}
          >
            Figures exclude VAT. Assumes mid-range specification. London labour rates applied.
          </p>

          {/* Planning */}
          <h2
            style={{
              color: '#1A2340',
              fontSize: '22px',
              fontFamily: 'Georgia, serif',
              marginTop: '40px',
            }}
          >
            Planning Permission
          </h2>
          <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '16px' }}>
            Most single-storey rear extensions fall under{' '}
            <strong>Permitted Development (PD)</strong> — meaning you don't need to submit a
            full planning application. The key PD rules for a rear extension are: it must not
            extend more than 3m (semi or terraced) or 4m (detached) beyond the original rear
            wall; it must be no taller than 4m (or the ridge of the original roof, whichever
            is lower); and the total area of all extensions must not exceed 50% of the
            original house's land. Some London boroughs have removed PD rights via Article 4
            Directions — check with your local planning authority before starting.
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '16px' }}>
            Double-storey rear extensions almost always require a full planning application.
            Applications take 8–12 weeks to determine and cost £206 to submit. A pre-application
            enquiry (£50–£300 depending on borough) is usually worth having before committing
            to drawings.
          </p>

          {/* Party Wall */}
          <h2
            style={{
              color: '#1A2340',
              fontSize: '22px',
              fontFamily: 'Georgia, serif',
              marginTop: '40px',
            }}
          >
            Party Wall Act
          </h2>
          <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '16px' }}>
            If your extension will be built within 3 metres of a neighbour's foundation — which
            is almost always the case with a rear extension on a terraced or semi-detached
            London home — you are required to serve a <strong>Party Wall Notice</strong>{' '}
            before work begins. Your neighbour has 14 days to consent or dissent. If they
            dissent, both parties must appoint a party wall surveyor. Budget £800–£1,800 for a
            Party Wall Agreement if required. Failing to comply can result in injunctions and
            significant delays, so serve notice early — typically 2 months before you intend to start.
          </p>

          {/* Contractor */}
          <h2
            style={{
              color: '#1A2340',
              fontSize: '22px',
              fontFamily: 'Georgia, serif',
              marginTop: '40px',
            }}
          >
            Finding the Right Contractor
          </h2>
          <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '16px' }}>
            For a project of this scale, choosing the right contractor matters as much as the
            design. Here's how to protect yourself:
          </p>
          <ul style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '16px', paddingLeft: '24px' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Check Builder Score™</strong> — Dwellinger's verified trust score
              combines reviews, on-time delivery, compliance history and response rate into a
              single 1,000-point score. Only use contractors scoring 800+.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Get at least three quotes</strong> — A significant price spread is normal.
              If one quote is 30%+ below the others, ask why. Low quotes often hide
              preliminaries, VAT or profit margin that gets reclaimed through variations later.
            </li>
            <li>
              <strong>Check CDM compliance</strong> — For any domestic project over 30 working
              days or 500 person-days, Construction (Design and Management) Regulations 2015
              apply. Your principal contractor should be able to evidence their compliance.
            </li>
          </ul>
        </article>
      </section>

      {/* FAQ */}
      <section style={{ padding: '64px 24px', background: '#F5F0E8' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#1A2340',
              fontSize: '28px',
              fontFamily: 'Georgia, serif',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                q: 'How much does a rear extension cost in London in 2026?',
                a: 'Typically £45,000–£160,000 for a standard single or double-storey rear extension, depending on size, specification and location within London. A modest 20m² single-storey extension starts around £44,000; a large double-storey with high-end finishes can exceed £150,000.',
              },
              {
                q: 'Do I need planning permission for a rear extension?',
                a: 'A single-storey extension within 3m (semi/terraced) or 4m (detached) of the original rear wall usually falls under Permitted Development and does not require planning permission. Double-storey extensions almost always need a full planning application. Always check for Article 4 Directions in your borough.',
              },
              {
                q: 'How long does a rear extension take to build?',
                a: 'From groundworks to handover, a single-storey rear extension typically takes 12–16 weeks. A double-storey extension takes 16–20 weeks. Add 8–12 weeks for planning permission if required, and 2–4 months for design and preparation before work starts on site.',
              },
              {
                q: 'What is the cheapest type of rear extension?',
                a: 'A single-storey flat-roof extension is typically the most cost-effective option. It avoids the structural complexity of a pitched or lantern roof, is usually within Permitted Development limits, and can be delivered efficiently by most London contractors.',
              },
              {
                q: 'Can I live in my house during the build?',
                a: 'Usually yes. Most rear extension projects allow the homeowner to remain in residence throughout. There may be a 2–4 week period during the kitchen connection or structural opening phase where access is disrupted. Discuss this timeline with your contractor before signing contracts.',
              },
              {
                q: 'How do I get an accurate quote for my extension?',
                a: 'Start with our free Extension Cost Calculator to get a ballpark figure based on your size, location and spec. For a bankable number, order a QS-reviewed estimate from £95 — a qualified quantity surveyor cross-checks contractor quotes and highlights any gaps before you commit.',
              },
            ].map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '24px',
                  border: '1px solid #EDE8DC',
                }}
              >
                <h3
                  style={{
                    color: '#1A2340',
                    fontSize: '16px',
                    fontWeight: 700,
                    margin: '0 0 10px',
                  }}
                >
                  {q}
                </h3>
                <p style={{ color: '#4A5568', lineHeight: 1.7, fontSize: '15px', margin: 0 }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: '#1A2340',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2
            style={{
              color: '#FFFFFF',
              fontSize: '30px',
              fontFamily: 'Georgia, serif',
              marginBottom: '16px',
            }}
          >
            Know Your Numbers Before You Commit
          </h2>
          <p style={{ color: '#EDE8DC', fontSize: '17px', marginBottom: '32px', opacity: 0.85 }}>
            Our free calculator gives you a cost estimate in under 60 seconds — tailored to
            your size, location and specification.
          </p>
          <a
            href="/tools/extension-cost-calculator"
            style={{
              display: 'inline-block',
              background: '#C4773B',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '17px',
              padding: '16px 36px',
              borderRadius: '8px',
              textDecoration: 'none',
              letterSpacing: '0.3px',
            }}
          >
            Try Our Free Extension Cost Calculator →
          </a>
        </div>
      </section>
    </div>
  )
}
