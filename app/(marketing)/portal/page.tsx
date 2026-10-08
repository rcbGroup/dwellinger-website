'use client'

import { useState } from 'react'


const NAV_ITEMS = [
  { icon: '⊞', label: 'Dashboard', active: true },
  { icon: '⚡', label: 'Pipeline', active: false },
  { icon: '👥', label: 'Clients', active: false },
  { icon: '📐', label: 'Estimator', active: false },
  { icon: '📋', label: 'Scope', active: false },
  { icon: '🗺️', label: 'Planning', active: false },
  { icon: '🤖', label: 'AI Agents', active: false },
  { icon: '⚙️', label: 'Settings', active: false },
]

const SCORES = [
  { label: 'Reviews', value: 96 },
  { label: 'On-Time', value: 91 },
  { label: 'Compliance', value: 98 },
  { label: 'Response', value: 88 },
]

const LEADS = [
  {
    name: 'M. Thompson',
    location: 'Enfield, N21',
    project: 'Loft Conversion + Extension',
    budget: '£120k–£150k',
    price: '£45',
  },
  {
    name: 'S. Patel',
    location: 'Greenwich, SE10',
    project: 'Full Refurbishment',
    budget: '£65k–£85k',
    price: '£35',
  },
]

const PLANNING = [
  {
    address: '32 Beech Avenue, N21',
    type: 'Full Plans Application',
    status: 'Approved',
    when: '2 weeks ago',
    color: '#10B981',
  },
  {
    address: '17 Mill Road, SE10',
    type: 'Prior Approval for Loft',
    status: 'Pending Decision',
    when: '',
    color: '#C4773B',
  },
]

export default function PortalPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: '#F5F0E8',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: sidebarOpen ? '240px' : '0',
          minWidth: sidebarOpen ? '240px' : '0',
          background: '#1A2340',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          transition: 'width 0.3s, min-width 0.3s',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div style={{ padding: '28px 20px 16px', whiteSpace: 'nowrap' }}>
          {/* Logo */}
          <div style={{ marginBottom: '32px' }}>
            <span
              style={{
                fontSize: '22px',
                fontFamily: 'Georgia, serif',
                fontWeight: 700,
                color: '#FFFFFF',
              }}
            >
              Dwell
            </span>
            <span
              style={{
                fontSize: '22px',
                fontFamily: 'Georgia, serif',
                fontWeight: 700,
                color: '#C4773B',
              }}
            >
              inger
            </span>
          </div>

          {/* Nav */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  background: item.active ? 'rgba(196,119,59,0.18)' : 'transparent',
                  borderLeft: item.active ? '3px solid #C4773B' : '3px solid transparent',
                  cursor: 'pointer',
                  color: item.active ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                  fontSize: '14px',
                  fontWeight: item.active ? 600 : 400,
                  transition: 'background 0.15s',
                }}
              >
                <span style={{ fontSize: '16px' }}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom user */}
        <div
          style={{
            marginTop: 'auto',
            padding: '16px 20px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            whiteSpace: 'nowrap',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: '#C4773B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '14px',
              flexShrink: 0,
            }}
          >
            R
          </div>
          <div>
            <div style={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 600 }}>
              RCB Design & Build
            </div>
            <div
              style={{
                display: 'inline-block',
                background: '#C4773B',
                color: '#FFFFFF',
                fontSize: '10px',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '20px',
                marginTop: '3px',
                letterSpacing: '0.5px',
              }}
            >
              Platinum
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        {/* Top bar */}
        <div
          style={{
            background: '#FFFFFF',
            borderBottom: '1px solid #EDE8DC',
            padding: '14px 28px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            position: 'sticky',
            top: 0,
            zIndex: 5,
          }}
        >
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            style={{
              background: 'none',
              border: '1px solid #EDE8DC',
              borderRadius: '6px',
              padding: '6px 10px',
              cursor: 'pointer',
              fontSize: '16px',
              color: '#4A5568',
            }}
          >
            ☰
          </button>
          <span style={{ color: '#4A5568', fontSize: '14px' }}>Contractor Portal</span>
        </div>

        <div style={{ padding: '32px 28px', maxWidth: '1100px', width: '100%', margin: '0 auto' }}>
          {/* Header */}
          <h1
            style={{
              color: '#1A2340',
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontFamily: 'Georgia, serif',
              margin: '0 0 28px',
              fontWeight: 700,
            }}
          >
            Good morning — here&apos;s your dashboard
          </h1>

          {/* Top row: Score + KPIs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 360px) 1fr',
              gap: '20px',
              marginBottom: '24px',
              alignItems: 'start',
            }}
          >
            {/* Builder Score Card */}
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '28px',
                boxShadow: '0 2px 12px rgba(26,35,64,0.07)',
                border: '1px solid #EDE8DC',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px',
                }}
              >
                <div>
                  <div style={{ color: '#4A5568', fontSize: '13px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                    Builder Score™
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      background: '#C4773B',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '2px 10px',
                      borderRadius: '20px',
                      marginTop: '6px',
                      letterSpacing: '0.5px',
                    }}
                  >
                    Platinum
                  </div>
                </div>
                {/* Ring */}
                <div style={{ position: 'relative', width: '80px', height: '80px' }}>
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="34" fill="none" stroke="#EDE8DC" strokeWidth="8" />
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      fill="none"
                      stroke="#C4773B"
                      strokeWidth="8"
                      strokeDasharray={`${(912 / 1000) * 213.6} 213.6`}
                      strokeLinecap="round"
                      transform="rotate(-90 40 40)"
                    />
                  </svg>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span style={{ fontSize: '17px', fontWeight: 800, color: '#1A2340', lineHeight: 1 }}>
                      912
                    </span>
                    <span style={{ fontSize: '10px', color: '#4A5568' }}>/1000</span>
                  </div>
                </div>
              </div>

              {/* Progress bars */}
              {SCORES.map(({ label, value }) => (
                <div key={label} style={{ marginBottom: '12px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '5px',
                      fontSize: '13px',
                      color: '#4A5568',
                    }}
                  >
                    <span>{label}</span>
                    <span style={{ fontWeight: 700, color: '#1A2340' }}>{value}</span>
                  </div>
                  <div
                    style={{
                      height: '6px',
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

            {/* KPI strip */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: '7 New Leads', sub: 'Available in your area', color: '#C4773B', bg: '#FDF6EF' },
                { label: '£312k Pipeline', sub: 'Total project value tracked', color: '#1A2340', bg: '#EDF0F7' },
                { label: '3 Active Jobs', sub: 'Currently on site', color: '#10B981', bg: '#ECFDF5' },
              ].map(({ label, sub, color, bg }) => (
                <div
                  key={label}
                  style={{
                    background: bg,
                    border: `1px solid ${color}22`,
                    borderRadius: '10px',
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                  }}
                >
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: color,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ color, fontWeight: 800, fontSize: '18px' }}>{label}</div>
                    <div style={{ color: '#4A5568', fontSize: '13px', marginTop: '2px' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Leads */}
          <div style={{ marginBottom: '24px' }}>
            <h2
              style={{
                color: '#1A2340',
                fontSize: '18px',
                fontWeight: 700,
                marginBottom: '14px',
                fontFamily: 'Georgia, serif',
              }}
            >
              New Leads Available
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
              {LEADS.map((lead) => (
                <div
                  key={lead.name}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '22px',
                    border: '1px solid #EDE8DC',
                    boxShadow: '0 2px 8px rgba(26,35,64,0.05)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div>
                      <div style={{ color: '#1A2340', fontWeight: 700, fontSize: '16px' }}>
                        {lead.name}
                      </div>
                      <div style={{ color: '#4A5568', fontSize: '13px', marginTop: '2px' }}>
                        📍 {lead.location}
                      </div>
                    </div>
                    <span
                      style={{
                        background: '#EDF0F7',
                        color: '#1A2340',
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '4px 10px',
                        borderRadius: '20px',
                      }}
                    >
                      NEW
                    </span>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ color: '#4A5568', fontSize: '14px', marginBottom: '6px' }}>
                      <strong style={{ color: '#1A2340' }}>Project:</strong> {lead.project}
                    </div>
                    <div style={{ color: '#4A5568', fontSize: '14px' }}>
                      <strong style={{ color: '#1A2340' }}>Budget:</strong> {lead.budget}
                    </div>
                  </div>
                  <button
                    style={{
                      width: '100%',
                      background: '#C4773B',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '11px',
                      fontWeight: 700,
                      fontSize: '14px',
                      cursor: 'pointer',
                    }}
                  >
                    Buy Lead — {lead.price}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Planning Alerts */}
          <div>
            <h2
              style={{
                color: '#1A2340',
                fontSize: '18px',
                fontWeight: 700,
                marginBottom: '14px',
                fontFamily: 'Georgia, serif',
              }}
            >
              Planning Alerts
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {PLANNING.map((item) => (
                <div
                  key={item.address}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '10px',
                    padding: '18px 22px',
                    border: '1px solid #EDE8DC',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: item.color,
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#1A2340', fontWeight: 600, fontSize: '15px' }}>
                      {item.address}
                    </div>
                    <div style={{ color: '#4A5568', fontSize: '13px', marginTop: '3px' }}>
                      {item.type}
                    </div>
                  </div>
                  <span
                    style={{
                      background: item.color + '18',
                      color: item.color,
                      fontSize: '12px',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '20px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.status} {item.when ? `· ${item.when}` : ''}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
