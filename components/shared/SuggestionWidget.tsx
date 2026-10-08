'use client'

import { useState } from 'react'
import { MessageSquarePlus, X, Send, CheckCircle } from 'lucide-react'
import { useLang } from '@/components/providers/LanguageProvider'

export default function SuggestionWidget() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [category, setCategory] = useState('feature')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!text.trim()) return
    const subject = encodeURIComponent(`[Dwellinger Suggestion — ${category}] User Feedback`)
    const body = encodeURIComponent(
      `Category: ${category}\n\nSuggestion:\n${text}${email ? `\n\nContact email: ${email}` : ''}`
    )
    window.location.href = `mailto:suggestions@dwellinger.co.uk?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setText('')
      setEmail('')
      setOpen(false)
    }, 3000)
  }

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(!open)}
        title={t('suggest.title')}
        aria-label={t('suggest.title')}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 52,
          height: 52,
          borderRadius: '50%',
          backgroundColor: 'var(--amber)',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          zIndex: 1000,
          transition: 'transform 0.2s, background-color 0.2s',
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.1)' }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
      >
        {open ? <X className="w-5 h-5" /> : <MessageSquarePlus className="w-5 h-5" />}
      </button>

      {/* Panel */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 86,
            right: 24,
            width: 320,
            backgroundColor: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 12,
            boxShadow: 'var(--card-shadow-hover)',
            zIndex: 999,
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: 'var(--color-bg-raised)',
              padding: '14px 16px',
              borderBottom: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <MessageSquarePlus className="w-4 h-4" style={{ color: 'var(--amber)', flexShrink: 0 }} />
            <div>
              <p style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>
                {t('suggest.title')}
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.72rem', margin: 0, marginTop: 2 }}>
                Help us build what matters to you
              </p>
            </div>
          </div>

          {submitted ? (
            <div style={{ padding: '32px 16px', textAlign: 'center' }}>
              <CheckCircle className="w-10 h-10" style={{ color: 'var(--amber)', margin: '0 auto 12px' }} />
              <p style={{ color: 'var(--color-text)', fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>
                Thanks for your suggestion!
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', marginTop: 6 }}>
                Your email app will open so you can send it. We read every submission.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ padding: '16px' }}>
              {/* Category */}
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{
                    width: '100%', padding: '8px 10px',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 6,
                    color: 'var(--color-text)',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                  }}
                >
                  <option value="feature">New Feature Request</option>
                  <option value="improvement">Improvement / Enhancement</option>
                  <option value="tool">New Tool / Calculator</option>
                  <option value="data">Data / Coverage Gap</option>
                  <option value="bug">Bug Report</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Suggestion text */}
              <div style={{ marginBottom: 12 }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Your suggestion
                </label>
                <textarea
                  required
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder={t('suggest.placeholder')}
                  rows={4}
                  style={{
                    width: '100%', padding: '10px 12px',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 6,
                    color: 'var(--color-text)',
                    fontSize: '0.85rem',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Optional email */}
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Your email <span style={{ color: 'var(--color-text-muted)', fontWeight: 400, textTransform: 'none' }}>(optional — if you want a reply)</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  style={{
                    width: '100%', padding: '8px 10px',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 6,
                    color: 'var(--color-text)',
                    fontSize: '0.85rem',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: 'var(--amber)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 6,
                  padding: '10px',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                }}
              >
                <Send className="w-4 h-4" />
                {t('suggest.send')}
              </button>
              <p style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)', textAlign: 'center', marginTop: 8, margin: '8px 0 0' }}>
                We read every suggestion. No account needed.
              </p>
            </form>
          )}
        </div>
      )}
    </>
  )
}
