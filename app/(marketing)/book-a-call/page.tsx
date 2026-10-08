'use client'

import { useState } from 'react'
import Link from 'next/link'

const callTypes = [
  {
    id: 'discovery',
    icon: '🔍',
    name: 'Discovery Call',
    dur: '20 minutes · Free',
    desc: 'You have an idea — an extension, loft conversion, or refurbishment — and want to understand whether it is realistic and what it might cost.',
  },
  {
    id: 'technical',
    icon: '📐',
    name: 'Technical Review',
    dur: '45 minutes · Free',
    desc: 'You have drawings or a planning approval and want a senior review of scope, programme, compliance issues, and estimate basis before tendering.',
  },
  {
    id: 'investor',
    icon: '💼',
    name: 'Investor Briefing',
    dur: '30 minutes · Free',
    desc: 'You are acquiring or hold a property and need build cost clarity, HMO or development feasibility, or a planning intelligence briefing.',
  },
  {
    id: 'contractor',
    icon: '🤝',
    name: 'Contractor Onboarding',
    dur: '30 minutes · Free',
    desc: 'You are a contractor or developer and want to see what the Dwellinger platform offers — Builder Score, lead generation, estimating tools, and CRM.',
  },
]

const timeSlots = [
  { time: '09:00', full: true },
  { time: '09:30', full: true },
  { time: '10:00', full: false },
  { time: '10:30', full: false },
  { time: '11:00', full: false },
  { time: '11:30', full: true },
  { time: '14:00', full: false },
  { time: '14:30', full: false },
  { time: '15:00', full: false },
]

export default function BookACallPage() {
  const [selectedType, setSelectedType] = useState('discovery')
  const [selectedSlot, setSelectedSlot] = useState('10:00')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [project, setProject] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const selectedCall = callTypes.find((c) => c.id === selectedType)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Book a Call — ${selectedCall?.name} at ${selectedSlot}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCall type: ${selectedCall?.name}\nPreferred time: ${selectedSlot}\n\nProject:\n${project}`
    )
    window.location.href = `mailto:info@dwellinger.co.uk?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div style={{ backgroundColor: '#f0ede6', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#1A2340 0%,#243058 100%)', padding: '64px 24px', textAlign: 'center' }}>
        <p style={{ color: '#C4773B', fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '14px' }}>
          Book a Call
        </p>
        <h1 style={{ color: '#fff', fontSize: 'clamp(1.5rem,4vw,2.2rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '12px' }}>
          Let&apos;s Talk About<br />Your Project
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.6, maxWidth: '460px', margin: '0 auto' }}>
          Choose the right type of call for where you are in your project. All calls are free with a senior member of the Dwellinger team.
        </p>
      </section>

      {/* Call type selector */}
      <section style={{ padding: '0 16px', backgroundColor: '#F5F0E8' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', paddingTop: '28px' }}>
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#1A2340', marginBottom: '14px', textAlign: 'center' }}>
            1. Choose Your Call Type
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
            {callTypes.map((ct) => (
              <button
                key={ct.id}
                onClick={() => setSelectedType(ct.id)}
                style={{
                  background: selectedType === ct.id ? '#FDF8F3' : '#fff',
                  border: `2px solid ${selectedType === ct.id ? '#C4773B' : '#EDE8DC'}`,
                  borderRadius: '10px',
                  padding: '16px',
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{ct.icon}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#1A2340', marginBottom: '3px' }}>{ct.name}</div>
                <div style={{ fontSize: '11px', color: '#C4773B', fontWeight: 600 }}>{ct.dur}</div>
              </button>
            ))}
          </div>

          {selectedCall && (
            <div style={{ background: '#fff', border: '1px solid #EDE8DC', borderRadius: '8px', padding: '14px', marginBottom: '24px' }}>
              <p style={{ fontSize: '12px', color: '#4A5568', lineHeight: 1.6, margin: 0 }}>{selectedCall.desc}</p>
            </div>
          )}
        </div>
      </section>

      {/* Time slots + form */}
      <section style={{ backgroundColor: '#fff', padding: '0 16px 40px', borderTop: '1px solid #EDE8DC' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', paddingTop: '28px' }}>

          <p style={{ fontSize: '13px', fontWeight: 700, color: '#1A2340', marginBottom: '12px' }}>
            2. Pick a Time
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '8px', marginBottom: '28px' }}>
            {timeSlots.map((slot) => (
              <button
                key={slot.time}
                disabled={slot.full}
                onClick={() => !slot.full && setSelectedSlot(slot.time)}
                style={{
                  padding: '10px',
                  textAlign: 'center',
                  borderRadius: '8px',
                  border: `1px solid ${selectedSlot === slot.time ? '#C4773B' : '#EDE8DC'}`,
                  background: selectedSlot === slot.time ? '#C4773B' : slot.full ? '#F5F0E8' : '#fff',
                  color: selectedSlot === slot.time ? '#fff' : slot.full ? '#aaa' : '#1A2340',
                  fontSize: '13px',
                  fontWeight: selectedSlot === slot.time ? 700 : 400,
                  cursor: slot.full ? 'default' : 'pointer',
                  opacity: slot.full ? 0.5 : 1,
                }}
              >
                {slot.time}
                {slot.full && <div style={{ fontSize: '9px', marginTop: '2px' }}>Taken</div>}
              </button>
            ))}
          </div>

          <p style={{ fontSize: '13px', fontWeight: 700, color: '#1A2340', marginBottom: '14px' }}>
            3. Your Details
          </p>

          {submitted ? (
            <div style={{ background: '#1A2340', borderRadius: '10px', padding: '28px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>✅</div>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '16px', marginBottom: '6px' }}>Your email is ready to send</p>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '13px', lineHeight: 1.5 }}>
                Your email client should have opened with your booking request pre-filled. We&apos;ll confirm your slot within 2 hours.
              </p>
              <Link href="/" style={{ display: 'inline-block', marginTop: '20px', color: '#C4773B', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>
                ← Back to home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#1A2340', marginBottom: '6px' }}>
                  Your Name
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. James Carter"
                  style={{ width: '100%', padding: '11px 14px', border: '2px solid #EDE8DC', borderRadius: '8px', fontSize: '14px', color: '#1A2340', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#1A2340', marginBottom: '6px' }}>
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="james@example.com"
                  style={{ width: '100%', padding: '11px 14px', border: '2px solid #EDE8DC', borderRadius: '8px', fontSize: '14px', color: '#1A2340', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#1A2340', marginBottom: '6px' }}>
                  Briefly describe your project
                </label>
                <textarea
                  rows={3}
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  placeholder="e.g. 3-bed loft conversion in Hackney, planning approved, need QS estimate before tendering..."
                  style={{ width: '100%', padding: '11px 14px', border: '2px solid #EDE8DC', borderRadius: '8px', fontSize: '14px', color: '#1A2340', resize: 'vertical', boxSizing: 'border-box' }}
                />
              </div>
              <div style={{ background: '#F5F0E8', borderRadius: '8px', padding: '12px 14px', fontSize: '12px', color: '#4A5568' }}>
                Booking: <strong style={{ color: '#1A2340' }}>{selectedCall?.name}</strong> at <strong style={{ color: '#C4773B' }}>{selectedSlot}</strong>
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: '#C4773B',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '14px',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Confirm Booking
              </button>
              <p style={{ fontSize: '11px', color: '#6B7280', textAlign: 'center' }}>
                Or call us directly: <a href="tel:+447359872594" style={{ color: '#C4773B', fontWeight: 700 }}>+44 7359 872594</a>
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
