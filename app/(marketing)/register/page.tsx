'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, CheckCircle, Loader2 } from 'lucide-react'

const ROLES = [
  { id: 'homeowner', label: 'Homeowner', icon: '🏠' },
  { id: 'contractor', label: 'Contractor', icon: '🔨' },
  { id: 'investor', label: 'Investor', icon: '📊' },
]

export default function RegisterPage() {
  const [role, setRole] = useState('contractor')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!agreed) { setErrorMsg('Please accept the Terms of Service and Privacy Policy.'); return }

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/auth/magic-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          metadata: {
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            company: company.trim(),
            phone: phone.trim(),
            role,
          },
        }),
      })

      const data = await res.json()

      if (!res.ok || data.error) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('sent')
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center py-16">
        <div className="w-full max-w-sm px-4">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="font-display font-bold text-white text-xl tracking-tight">Dwellinger</span>
              <span style={{ color: '#C4773B' }} className="font-bold text-xl">.</span>
            </Link>
          </div>
          <div className="card p-8 text-center">
            <div className="w-14 h-14 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-7 h-7 text-green-400" />
            </div>
            <h1 className="font-display text-h3 text-white mb-2">Almost there!</h1>
            <p className="text-text-muted text-sm mb-4">
              We&apos;ve sent a magic link to
            </p>
            <p className="text-white font-semibold text-sm mb-6 bg-white/5 rounded-lg px-4 py-2 inline-block">
              {email}
            </p>
            <p className="text-text-muted text-xs leading-relaxed mb-6">
              Click the link in your email to activate your account and access your dashboard.
              The link expires in 60 minutes.
            </p>
            <button
              onClick={() => { setStatus('idle') }}
              className="text-amber hover:underline text-xs"
            >
              Go back and edit
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-md px-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="font-display font-bold text-white text-xl tracking-tight">Dwellinger</span>
            <span style={{ color: '#C4773B' }} className="font-bold text-xl">.</span>
          </Link>
          <p className="text-text-muted text-sm mt-2">UK&apos;s property intelligence platform</p>
        </div>

        <div className="card p-8">
          <h1 className="font-display text-h3 text-white mb-1">Create your account</h1>
          <p className="text-text-muted text-sm mb-6">Free for 14 days. No credit card required.</p>

          {/* Role selector */}
          <div className="mb-6">
            <label className="text-xs font-semibold text-text-secondary block mb-2">I am a…</label>
            <div className="grid grid-cols-3 gap-2">
              {ROLES.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRole(r.id)}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-lg border transition-colors"
                  style={{
                    backgroundColor: role === r.id ? 'rgba(196,119,59,0.1)' : 'rgba(255,255,255,0.03)',
                    borderColor: role === r.id ? '#C4773B' : 'rgba(255,255,255,0.1)',
                  }}
                >
                  <span className="text-lg">{r.icon}</span>
                  <span className="text-xs font-semibold text-text-secondary">{r.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Magic link notice */}
          <div className="bg-amber-subtle border border-amber-border rounded-lg p-4 mb-6">
            <div className="flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-amber text-xs font-bold mb-0.5">Passwordless sign in</p>
                <p className="text-text-muted text-xs leading-relaxed">
                  We use magic links — no password to remember or lose.
                </p>
              </div>
            </div>
          </div>

          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4">
              <p className="text-red-400 text-xs">{errorMsg}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-text-secondary block mb-1.5">First name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Sarah"
                  className="input"
                  required
                  disabled={status === 'loading'}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-text-secondary block mb-1.5">Last name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Johnson"
                  className="input"
                  required
                  disabled={status === 'loading'}
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-text-secondary block mb-1.5">Work email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah@company.com"
                className="input"
                required
                autoComplete="email"
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-text-secondary block mb-1.5">
                Company name <span className="text-text-muted font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Your company"
                className="input"
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-text-secondary block mb-1.5">
                Phone <span className="text-text-muted font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+44 7..."
                className="input"
                disabled={status === 'loading'}
              />
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 flex-shrink-0 accent-amber"
                disabled={status === 'loading'}
              />
              <label htmlFor="terms" className="text-xs text-text-muted leading-relaxed cursor-pointer">
                I agree to Dwellinger&apos;s{' '}
                <Link href="/terms" className="text-amber hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-amber hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-3.5 flex items-center justify-center gap-2"
              disabled={status === 'loading' || !email.trim() || !firstName.trim()}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending link…
                </>
              ) : (
                'Send me a magic link'
              )}
            </button>
          </form>

          <p className="text-center text-text-muted text-xs mt-5">
            Already have an account?{' '}
            <Link href="/login" className="text-amber hover:underline">Sign in</Link>
          </p>
        </div>

        {/* Social proof mini */}
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            { v: '14 days', l: 'Free trial' },
            { v: 'No card', l: 'Required' },
            { v: 'Cancel', l: 'Anytime' },
          ].map((s) => (
            <div key={s.l} className="card-raised px-3 py-2">
              <div className="text-amber font-bold text-sm">{s.v}</div>
              <div className="text-text-muted text-xs">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {[
            'Builder Score™ profile created automatically',
            'Access to Estimating Studio from day one',
            'All 4 Dwell Agents available on Professional trial',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-text-muted text-xs">
              <CheckCircle className="w-3.5 h-3.5 text-amber flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
