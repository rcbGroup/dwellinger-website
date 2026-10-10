'use client'

import { useEffect, useState } from 'react'
import { CheckCircle, Shield, Star } from 'lucide-react'

const rows = [
  { name: 'Meridian Build Ltd',   score: 912, tier: 'Platinum', reviews: 34 },
  { name: 'Apex Contractors UK',  score: 847, tier: 'Gold',     reviews: 21 },
  { name: 'UrbanCraft Builders',  score: 783, tier: 'Gold',     reviews: 18 },
  { name: 'SkyLine Renovations',  score: 654, tier: 'Silver',   reviews: 9  },
]

const tierColour = (t: string) =>
  t === 'Platinum' ? '#C4773B' : t === 'Gold' ? '#D4AC0D' : '#A8A8A8'

export function HeroProductWindow() {
  const [activeRow, setActiveRow] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActiveRow(r => (r + 1) % rows.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="product-window w-full max-w-[420px] mx-auto lg:mx-0">
      {/* Window bar */}
      <div className="product-window-bar">
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
        <div style={{
          marginLeft: 12,
          flex: 1,
          background: 'rgba(255,255,255,0.04)',
          borderRadius: 6,
          padding: '3px 10px',
          fontSize: 11,
          color: 'var(--color-text-muted, #666)',
          fontFamily: 'var(--font-mono)',
        }}>
          dwellinger.co.uk/search
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: '14px 16px 8px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontSize: 10, color: 'var(--color-text-muted, #666)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
          Builder Score™ Results
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, marginTop: 4, color: 'var(--color-text, #fff)' }}>
          London · All trades · 4 verified
        </div>
      </div>

      {/* Contractor rows */}
      <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        {rows.map((row, i) => (
          <div
            key={row.name}
            style={{
              borderRadius: 10,
              padding: '10px 12px',
              transition: 'all 0.5s',
              background: i === activeRow ? 'rgba(196,119,59,0.08)' : 'rgba(255,255,255,0.02)',
              border: `1px solid ${i === activeRow ? 'rgba(196,119,59,0.3)' : 'rgba(255,255,255,0.05)'}`,
              opacity: i === activeRow ? 1 : 0.55,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                {/* Avatar */}
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: `${tierColour(row.tier)}20`,
                  border: `1px solid ${tierColour(row.tier)}40`,
                  color: tierColour(row.tier),
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 700, flexShrink: 0,
                }}>
                  {row.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text, #fff)' }}>
                    {row.name}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 2 }}>
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} style={{ width: 9, height: 9, fill: 'var(--amber, #C4773B)', color: 'var(--amber, #C4773B)' }} />
                    ))}
                    <span style={{ fontSize: 10, color: 'var(--color-text-muted, #666)', marginLeft: 3 }}>
                      {row.reviews} verified
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: tierColour(row.tier) }}>
                  {row.score}
                </div>
                <div style={{ fontSize: 10, color: 'var(--color-text-muted, #666)' }}>{row.tier}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '10px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        background: 'rgba(255,255,255,0.01)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--color-text-muted, #666)' }}>
          <Shield style={{ width: 12, height: 12, color: 'var(--amber, #C4773B)' }} />
          All scores verified
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--color-text-muted, #666)' }}>
          <CheckCircle style={{ width: 12, height: 12, color: 'var(--amber, #C4773B)' }} />
          CDM aware
        </div>
      </div>
    </div>
  )
}
