import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Loft Conversion Cost in London — The Honest 2026 Guide | Dwellinger',
  description:
    'How much does a loft conversion cost in London in 2026? Velux, dormer, mansard, L-shaped prices, planning rules and how to choose a verified contractor.',
}

export default function LoftConversionCostLondon() {
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
            Loft Conversion Cost in London
          </h1>
          <p
            style={{
              color: '#EDE8DC',
              fontSize: '18px',
              marginTop: '20px',
              opacity: 0.85,
            }}
          >
            Every type, every price band. Updated October 2026.
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
            How Much Does a Loft Conversion Cost in London?
          </h2>
          <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '16px' }}>
            Loft conversions in London typically cost between <strong>£30,000 and £100,000+</strong>,
            depending on the type of conversion, the size of the space, and your specification.
            A basic Velux conversion on a standard Victorian terrace starts around £30,000; a
            full mansard conversion with en-suite and bespoke joinery can easily exceed £100,000.
            London adds a 20–35% premium over national averages due to labour costs, access
            constraints, and the complexity of working within older building stock.
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '16px' }}>
            The type of conversion is the single biggest cost driver. Understanding the
            differences helps you choose the right approach for your home and budget.
          </p>

          {/* Types & Costs */}
          <h2
            style={{
              color: '#1A2340',
              fontSize: '22px',
              fontFamily: 'Georgia, serif',
              marginTop: '40px',
              marginBottom: '20px',
            }}
          >
            Loft Conversion Types and Costs (London, 2026)
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
                  <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600 }}>Type</th>
                  <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600 }}>
                    Cost Range
                  </th>
                  <th style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 600 }}>
                    Planning
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Velux (rooflight)', cost: '£30,000 – £45,000', planning: 'Usually PD', bg: '#FFFFFF' },
                  { type: 'Dormer', cost: '£45,000 – £65,000', planning: 'Usually PD', bg: '#F5F0E8' },
                  { type: 'Hip-to-gable', cost: '£40,000 – £60,000', planning: 'Usually PD', bg: '#FFFFFF' },
                  { type: 'L-shaped dormer', cost: '£55,000 – £80,000', planning: 'Often needed', bg: '#F5F0E8' },
                  { type: 'Mansard', cost: '£75,000 – £100,000+', planning: 'Always required', bg: '#FFFFFF' },
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
                        color: '#C4773B',
                        fontWeight: 700,
                        borderBottom: '1px solid #EDE8DC',
                      }}
                    >
                      {row.cost}
                    </td>
                    <td
                      style={{
                        padding: '14px 18px',
                        color: '#4A5568',
                        borderBottom: '1px solid #EDE8DC',
                      }}
                    >
                      {row.planning}
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
            Figures exclude VAT. Mid-range specification. PD = Permitted Development.
          </p>

          {/* What affects cost */}
          <h2
            style={{
              color: '#1A2340',
              fontSize: '22px',
              fontFamily: 'Georgia, serif',
              marginTop: '40px',
            }}
          >
            What Affects the Cost of a Loft Conversion?
          </h2>

          {[
            {
              title: 'Type of conversion',
              body: 'As shown above, the structural approach is the dominant cost driver. A Velux conversion leaves the roofline intact; a mansard rebuilds it almost entirely. More structural work means more cost — but also more headroom and usable floor area.',
            },
            {
              title: 'Size and floor area',
              body: 'A standard London Victorian terrace loft yields 15–25m² of usable floor area. Adding a rear dormer can extend this to 35–45m². More area means more materials, more labour, more insulation, and typically a larger staircase footprint below.',
            },
            {
              title: 'En-suite bathroom',
              body: 'Adding an en-suite adds £8,000–£15,000 to the budget, depending on size and specification. It requires a soil stack connection, which is straightforward in most London terraces but can be complicated in period properties with unusual layouts.',
            },
            {
              title: 'Structural changes',
              body: 'Most loft conversions require RSJ beams to support the new floor, strengthening of existing floor joists, and a new staircase opening below. These structural elements typically add £6,000–£14,000 and always require a structural engineer\'s calculations and building control sign-off.',
            },
            {
              title: 'Planning and design fees',
              body: 'Architect or designer fees: 5–10% of build cost. Planning application: £206 for a householder application. Structural engineer: £1,000–£2,500. Party wall surveyor (if applicable): £800–£1,800. Building control: £600–£1,200.',
            },
            {
              title: 'Location within London',
              body: 'Inner London boroughs command a 15–25% labour premium over outer boroughs. Mansard conversions in conservation areas (common in Islington, Hackney and Southwark) may require specialist heritage materials that add further cost.',
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

          {/* Planning */}
          <h2
            style={{
              color: '#1A2340',
              fontSize: '22px',
              fontFamily: 'Georgia, serif',
              marginTop: '40px',
            }}
          >
            Planning Permission for Loft Conversions
          </h2>
          <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '16px' }}>
            <strong>Velux and standard dormer conversions</strong> on most London terraced and
            semi-detached houses fall under Permitted Development, meaning no planning
            application is required. The key conditions: the dormer must not exceed the highest
            part of the existing roof; no materials on the front roof slope that face a highway;
            and the total volume added must not exceed 40m³ (terraced) or 50m³ (detached/semi).
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '16px' }}>
            <strong>L-shaped dormers</strong> combine a rear and side dormer, and whether they
            require planning depends on the specific configuration and local Article 4 Directions.
            Always seek a Certificate of Lawful Development if proceeding without planning — it
            provides legal protection when you come to sell.
          </p>
          <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '16px' }}>
            <strong>Mansard conversions</strong> always require full planning permission because
            they alter the pitch and form of the roof. They are popular in London's Victorian
            terraces and are often granted, but the application process adds 8–12 weeks and
            £206 to the project. In conservation areas, a Design and Access Statement and
            heritage materials may be required.
          </p>

          {/* Structural */}
          <h2
            style={{
              color: '#1A2340',
              fontSize: '22px',
              fontFamily: 'Georgia, serif',
              marginTop: '40px',
            }}
          >
            Structural Considerations
          </h2>
          <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '16px' }}>
            Every loft conversion involves structural work that requires a qualified engineer.
            The three main elements are: <strong>RSJ steel beams</strong> to carry the new
            floor load (typically 2–4 beams spanning the width of the property);{' '}
            <strong>floor joist strengthening</strong> to meet current building regulations for
            a habitable room; and a <strong>new staircase</strong> — which requires a new
            opening in the ceiling below and must comply with Part K (minimum 42° pitch, 220mm
            minimum headroom). Building control sign-off is mandatory for all of these elements.
          </p>
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
                q: 'How much does a loft conversion cost in London in 2026?',
                a: 'Between £30,000 (basic Velux) and £100,000+ (full mansard with en-suite). The most common type — a rear dormer on a Victorian terrace — costs £45,000–£65,000 at mid-range specification.',
              },
              {
                q: 'Do I need planning permission for a loft conversion?',
                a: 'Velux and standard dormer conversions on most houses fall under Permitted Development. Mansard conversions always need planning. L-shaped dormers often do. We recommend getting a Certificate of Lawful Development even when planning isn\'t required — it protects you at sale.',
              },
              {
                q: 'How long does a loft conversion take?',
                a: 'Typically 8–14 weeks on site, from scaffold up to final snagging. Add 2–4 months for design, structural engineering and building control submission before work starts. Mansard conversions requiring planning can add another 3 months.',
              },
              {
                q: 'Which type of loft conversion adds the most value?',
                a: 'A mansard conversion typically adds the most gross value (£40,000–£80,000 uplift in London), though it costs the most. Dormer conversions offer the best value-for-money ratio — £45,000–£65,000 build cost against £30,000–£60,000 of added value in most London boroughs.',
              },
              {
                q: 'Can I add a bathroom to my loft conversion?',
                a: 'Yes, and most homeowners do. An en-suite adds £8,000–£15,000 to the project. You\'ll need a soil stack connection, adequate floor loading, and ventilation. A good structural engineer will factor this into the floor design at the outset.',
              },
              {
                q: 'How do I get an accurate quote for a loft conversion?',
                a: 'Use our free Loft Conversion Calculator to get a baseline estimate, then order a QS-reviewed quote from £95. Our quantity surveyors cross-check contractor pricing line by line, so you know exactly what you\'re committing to before signing anything.',
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
            Get Your Loft Conversion Estimate
          </h2>
          <p style={{ color: '#EDE8DC', fontSize: '17px', marginBottom: '32px', opacity: 0.85 }}>
            Answer 4 quick questions and get a tailored cost estimate for your loft conversion
            — completely free, no sign-up required.
          </p>
          <a
            href="/tools/loft-conversion-calculator"
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
            Try Our Free Loft Conversion Calculator →
          </a>
        </div>
      </section>
    </div>
  )
}
