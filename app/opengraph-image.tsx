import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = "Dwellinger — UK's Property Intelligence Platform"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, serif',
          position: 'relative',
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse at top left, rgba(196,119,59,0.15) 0%, transparent 60%)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: '#ffffff',
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}
        >
          Dwell
          <span style={{ color: '#C4773B' }}>inger</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: '#c8c0b0',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
            marginBottom: 48,
            fontFamily: 'system-ui, sans-serif',
            fontWeight: 400,
          }}
        >
          The UK&apos;s smartest platform for homeowners,
          contractors and property investors
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', gap: 16 }}>
          {['Builder Score™', 'AI Estimates', 'Verified Contractors', 'Planning Intelligence'].map((tag) => (
            <div
              key={tag}
              style={{
                background: 'rgba(196,119,59,0.15)',
                border: '1px solid rgba(196,119,59,0.4)',
                borderRadius: 6,
                padding: '8px 16px',
                color: '#C4773B',
                fontSize: 14,
                fontWeight: 600,
                fontFamily: 'system-ui, sans-serif',
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            color: '#666',
            fontSize: 16,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          dwellinger.co.uk
        </div>
      </div>
    ),
    { ...size }
  )
}
