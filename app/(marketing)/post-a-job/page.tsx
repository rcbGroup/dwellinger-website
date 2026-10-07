'use client'

import { useState } from 'react'


const STEPS = [
  { number: 1, label: 'Property Details', done: true },
  { number: 2, label: 'Project Info', done: false, active: true },
  { number: 3, label: 'Review & Post', done: false },
]

const PROJECT_TYPES = [
  'Rear Extension',
  'Loft Conversion',
  'Full Refurbishment',
  'Kitchen Extension',
  'Basement Conversion',
  'New Build',
  'Other',
]

const BUDGET_RANGES = [
  'Under £30,000',
  '£30,000 – £60,000',
  '£60,000 – £100,000',
  '£100,000 – £150,000',
  '£150,000 – £250,000',
  'Over £250,000',
]

export default function PostAJobPage() {
  const [currentStep] = useState(2)
  const [projectType, setProjectType] = useState('Rear Extension')
  const [budget, setBudget] = useState('£60,000 – £100,000')
  const [hasDrawings, setHasDrawings] = useState<boolean | null>(null)
  const [address, setAddress] = useState('')

  return (
    <div
      style={{
        background: '#f0ede6',
        minHeight: '100vh',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: '#1A2340',
          padding: '20px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{ fontSize: '22px', fontFamily: 'Georgia, serif', fontWeight: 700, color: '#FFFFFF' }}
        >
          Dwell
        </span>
        <span
          style={{ fontSize: '22px', fontFamily: 'Georgia, serif', fontWeight: 700, color: '#C4773B' }}
        >
          inger
        </span>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '48px 24px' }}>
        {/* Progress */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
            marginBottom: '48px',
          }}
        >
          {STEPS.map((step, i) => (
            <div key={step.number} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '14px',
                    background: step.done
                      ? '#C4773B'
                      : step.active
                      ? '#C4773B'
                      : '#EDE8DC',
                    color: step.done || step.active ? '#FFFFFF' : '#4A5568',
                    border: step.active ? '3px solid #C4773B' : '3px solid transparent',
                    boxSizing: 'border-box',
                  }}
                >
                  {step.done ? '✓' : step.number}
                </div>
                <span
                  style={{
                    fontSize: '12px',
                    color: step.active ? '#1A2340' : '#4A5568',
                    fontWeight: step.active ? 700 : 400,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {step.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    width: '80px',
                    height: '2px',
                    background: i === 0 ? '#C4773B' : '#EDE8DC',
                    margin: '-20px 8px 0',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 4px 24px rgba(26,35,64,0.08)',
            border: '1px solid #EDE8DC',
          }}
        >
          <h2
            style={{
              color: '#1A2340',
              fontSize: '24px',
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
              margin: '0 0 28px',
            }}
          >
            Tell us about your project
          </h2>

          {/* Address */}
          <div style={{ marginBottom: '22px' }}>
            <label
              style={{
                display: 'block',
                color: '#1A2340',
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              Property address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="e.g. 42 Victoria Road, London, N21 3PQ"
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1.5px solid #EDE8DC',
                borderRadius: '8px',
                fontSize: '15px',
                color: '#1A2340',
                outline: 'none',
                boxSizing: 'border-box',
                background: '#FAFAF8',
              }}
            />
          </div>

          {/* Project type */}
          <div style={{ marginBottom: '22px' }}>
            <label
              style={{
                display: 'block',
                color: '#1A2340',
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              Project type
            </label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1.5px solid #EDE8DC',
                borderRadius: '8px',
                fontSize: '15px',
                color: '#1A2340',
                background: '#FAFAF8',
                outline: 'none',
                cursor: 'pointer',
                boxSizing: 'border-box',
              }}
            >
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div style={{ marginBottom: '22px' }}>
            <label
              style={{
                display: 'block',
                color: '#1A2340',
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              Budget range
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 14px',
                border: '1.5px solid #EDE8DC',
                borderRadius: '8px',
                fontSize: '15px',
                color: '#1A2340',
                background: '#FAFAF8',
                outline: 'none',
                cursor: 'pointer',
                boxSizing: 'border-box',
              }}
            >
              {BUDGET_RANGES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Drawings toggle */}
          <div style={{ marginBottom: '28px' }}>
            <label
              style={{
                display: 'block',
                color: '#1A2340',
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '8px',
              }}
            >
              Do you have drawings or plans?
            </label>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[true, false].map((val) => (
                <button
                  key={String(val)}
                  onClick={() => setHasDrawings(val)}
                  style={{
                    flex: 1,
                    padding: '11px',
                    border: `2px solid ${hasDrawings === val ? '#C4773B' : '#EDE8DC'}`,
                    borderRadius: '8px',
                    background: hasDrawings === val ? '#FDF6EF' : '#FAFAF8',
                    color: hasDrawings === val ? '#C4773B' : '#4A5568',
                    fontWeight: hasDrawings === val ? 700 : 500,
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {val ? 'Yes' : 'No'}
                </button>
              ))}
            </div>
          </div>

          {/* AI Estimate box */}
          <div
            style={{
              background: '#FDF6EF',
              border: '2px solid #C4773B',
              borderRadius: '10px',
              padding: '18px 22px',
              marginBottom: '28px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{ fontSize: '18px' }}>🤖</span>
              <span
                style={{
                  color: '#1A2340',
                  fontWeight: 800,
                  fontSize: '18px',
                }}
              >
                AI Estimate: £85,000 – £120,000
              </span>
            </div>
            <p
              style={{
                color: '#4A5568',
                fontSize: '13px',
                margin: 0,
              }}
            >
              Based on your property type and location. Get a QS-reviewed breakdown from £95.
            </p>
          </div>

          {/* CTA */}
          <button
            style={{
              width: '100%',
              background: '#C4773B',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '10px',
              padding: '16px',
              fontWeight: 700,
              fontSize: '16px',
              cursor: 'pointer',
              letterSpacing: '0.3px',
            }}
          >
            Continue to Step 3 →
          </button>
        </div>

        <p
          style={{
            textAlign: 'center',
            color: '#4A5568',
            fontSize: '13px',
            marginTop: '20px',
          }}
        >
          Free to post. No obligation. Matched with verified contractors only.
        </p>
      </div>
    </div>
  )
}
