'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_KEY = 'dwell-cookie-consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COOKIE_KEY)
      if (!saved) setVisible(true)
    } catch {
      // localStorage unavailable — don't show banner
    }
  }, [])

  function accept() {
    try { localStorage.setItem(COOKIE_KEY, 'accepted') } catch {}
    setVisible(false)
  }

  function reject() {
    try { localStorage.setItem(COOKIE_KEY, 'rejected') } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        bottom: 24,
        left: 24,
        right: 24,
        maxWidth: 520,
        zIndex: 2000,
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 12,
        padding: '20px 24px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
        Cookie notice
      </p>
      <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: '0 0 16px' }}>
        We use cookies to improve your experience and analyse how Dwellinger is used.{' '}
        <Link href="/cookies" style={{ color: 'var(--amber)', textDecoration: 'underline' }}>
          Cookie policy
        </Link>
      </p>
      <div style={{ display: 'flex', gap: 10 }}>
        <button
          onClick={accept}
          style={{
            flex: 1,
            padding: '9px 16px',
            backgroundColor: 'var(--amber)',
            color: '#fff',
            border: 'none',
            borderRadius: 7,
            fontSize: '0.875rem',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          Accept all
        </button>
        <button
          onClick={reject}
          style={{
            flex: 1,
            padding: '9px 16px',
            backgroundColor: 'var(--color-bg-raised)',
            color: 'var(--color-text-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: 7,
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Essential only
        </button>
      </div>
    </div>
  )
}
