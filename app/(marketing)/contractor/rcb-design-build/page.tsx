import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RCB Design & Build — Verified Principal Contractor | Dwellinger',
  description:
    'RCB Design & Build: Platinum-rated principal contractor covering London & Greater London. Builder Score™ 924/1000. View reviews, portfolio and get a quote.',
}

const SCORES = [
  { label: 'Reviews', value: 96 },
  { label: 'On-Time', value: 91 },
  { label: 'Compliance', value: 98 },
  { label: 'Response', value: 88 },
]

const REVIEWS = [
  {
    name: 'Dan O.',
    stars: 5,
    text: 'Excellent work on our loft conversion. The team was professional and finished on time and within budget. Would not hesitate to recommend RCB to anyone looking for a reliable contractor in London.',
  },
  {
    name: 'Priya S.',
    stars: 5,
    text: "Fantastic job on our full house refurbishment. We've had multiple compliments from neighbours. RCB managed the whole project from design through to handover — a genuinely stress-free experience.",
  },
]

const BADGES = [
  { label: 'Platinum', bg: '#C4773B', color: '#FFFFFF' },
  { label: 'Checkatrade Verified', bg: '#10B981', color: '#FFFFFF' },
  { label: 'East London', bg: 'transparent', color: '#FFFFFF', border: '2px solid rgba(255,255,255,0.5)' },
]

export default function RCBDesignBuildPage() {
  return (
    <div
      style={{
        background: '#f0ede6',
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Profile Header */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1A2340 0%, #0F1621 100%)',
          padding: '60px 24px 48px',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            {/* Avatar */}
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#C4773B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '32px',
                flexShrink: 0,
                boxShadow: '0 4px 16px rgba(196,119,59,0.4)',
              }}
            >
              R
            </div>
            <div>
              <h1
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(22px, 4vw, 34px)',
                  fontFamily: 'Georgia, serif',
                  fontWeight: 700,
                  margin: '0 0 6px',
                }}
              >
                RCB Design & Build
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', margin: '0 0 14px' }}>
                Principal Contractor · London & Greater London
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {BADGES.map((b) => (
                  <span
                    key={b.label}
                    style={{
                      background: b.bg,
                      color: b.color,
                      border: b.border ?? 'none',
                      fontSize: '12px',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '20px',
                      letterSpacing: '0.3px',
                    }}
                  >
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-col layout */}
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Builder Score */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '14px',
                padding: '28px',
                border: '1px solid #EDE8DC',
                boxShadow: '0 2px 12px rgba(26,35,64,0.06)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '24px',
                  flexWrap: 'wrap',
                  gap: '16px',
                }}
              >
                <div>
                  <h2
                    style={{
                      color: '#1A2340',
                      fontSize: '18px',
                      fontWeight: 700,
                      margin: '0 0 4px',
                    }}
                  >
                    Builder Score™
                  </h2>
                  <p style={{ color: '#4A5568', fontSize: '14px', margin: 0 }}>
                    Verified trust score across 4 dimensions
                  </p>
                </div>
                <div
                  style={{
                    background: '#1A2340',
                    color: '#FFFFFF',
                    borderRadius: '10px',
                    padding: '10px 20px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '26px', fontWeight: 800, lineHeight: 1 }}>924</div>
                  <div style={{ fontSize: '11px', opacity: 0.65, marginTop: '2px' }}>/ 1000</div>
                </div>
              </div>
              {SCORES.map(({ label, value }) => (
                <div key={label} style={{ marginBottom: '14px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '6px',
                      fontSize: '14px',
                    }}
                  >
                    <span style={{ color: '#4A5568' }}>{label}</span>
                    <span style={{ fontWeight: 700, color: '#1A2340' }}>{value}/100</span>
                  </div>
                  <div
                    style={{
                      height: '8px',
                      background: '#EDE8DC',
                      borderRadius: '4px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${value}%`,
                        background: '#C4773B',
                        borderRadius: '4px',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats strip */}
            <div
              style={{
                background: '#F5F0E8',
                borderRadius: '12px',
                padding: '20px 24px',
                display: 'flex',
                gap: '32px',
                flexWrap: 'wrap',
                border: '1px solid #EDE8DC',
              }}
            >
              {[
                { value: '143', label: 'Reviews' },
                { value: '★ 4.9', label: 'Average Rating' },
                { value: '12yr', label: 'Trading' },
              ].map(({ value, label }) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div style={{ color: '#1A2340', fontWeight: 800, fontSize: '22px' }}>
                    {value}
                  </div>
                  <div style={{ color: '#4A5568', fontSize: '13px', marginTop: '3px' }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Reviews */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '14px',
                padding: '28px',
                border: '1px solid #EDE8DC',
                boxShadow: '0 2px 12px rgba(26,35,64,0.06)',
              }}
            >
              <h2
                style={{
                  color: '#1A2340',
                  fontSize: '18px',
                  fontWeight: 700,
                  margin: '0 0 20px',
                  fontFamily: 'Georgia, serif',
                }}
              >
                Recent Reviews
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {REVIEWS.map((r) => (
                  <div
                    key={r.name}
                    style={{
                      background: '#FAFAF8',
                      borderRadius: '10px',
                      padding: '18px',
                      border: '1px solid #EDE8DC',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '10px',
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: '#1A2340',
                          color: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700,
                          fontSize: '14px',
                          flexShrink: 0,
                        }}
                      >
                        {r.name[0]}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: '#1A2340', fontSize: '14px' }}>
                          {r.name}
                        </div>
                        <div style={{ color: '#C4773B', fontSize: '14px', letterSpacing: '1px' }}>
                          {'★'.repeat(r.stars)}
                        </div>
                      </div>
                    </div>
                    <p
                      style={{
                        color: '#4A5568',
                        fontSize: '14px',
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      &ldquo;{r.text}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio */}
            <div
              style={{
                background: '#F5F0E8',
                borderRadius: '14px',
                padding: '28px',
                border: '1px solid #EDE8DC',
              }}
            >
              <h2
                style={{
                  color: '#1A2340',
                  fontSize: '18px',
                  fontWeight: 700,
                  margin: '0 0 18px',
                  fontFamily: 'Georgia, serif',
                }}
              >
                Portfolio
              </h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                }}
              >
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      background: '#EDE8DC',
                      borderRadius: '10px',
                      aspectRatio: '4/3',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      color: '#4A5568',
                    }}
                  >
                    🏗️
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div style={{ position: 'sticky', top: '20px' }}>
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '14px',
                padding: '28px',
                border: '2px solid #C4773B',
                boxShadow: '0 4px 20px rgba(196,119,59,0.12)',
              }}
            >
              <h3
                style={{
                  color: '#1A2340',
                  fontSize: '17px',
                  fontWeight: 700,
                  margin: '0 0 8px',
                  fontFamily: 'Georgia, serif',
                }}
              >
                Interested in RCB Design & Build?
              </h3>
              <p style={{ color: '#4A5568', fontSize: '14px', lineHeight: 1.6, margin: '0 0 22px' }}>
                Get a no-obligation quote or book a discovery call with their team.
              </p>

              <div
                style={{
                  background: '#F5F0E8',
                  borderRadius: '10px',
                  padding: '14px',
                  marginBottom: '16px',
                  fontSize: '13px',
                  color: '#4A5568',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ color: '#C4773B' }}>⚡</span>
                  <span style={{ fontWeight: 600, color: '#1A2340' }}>Fast responder</span>
                </div>
                <div>Typically replies within 2 hours during business hours</div>
              </div>

              <a
                href="/get-a-quote"
                style={{
                  display: 'block',
                  background: '#C4773B',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '14px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  marginBottom: '10px',
                }}
              >
                Get a Quote
              </a>
              <a
                href="/contact"
                style={{
                  display: 'block',
                  background: '#1A2340',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '14px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                Book a Call
              </a>

              <div
                style={{
                  marginTop: '20px',
                  paddingTop: '20px',
                  borderTop: '1px solid #EDE8DC',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {[
                  '✓ Platinum verified contractor',
                  '✓ Builder Score™ 924/1000',
                  '✓ 143 verified reviews',
                  '✓ CDM compliant',
                ].map((item) => (
                  <div key={item} style={{ fontSize: '13px', color: '#4A5568' }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
