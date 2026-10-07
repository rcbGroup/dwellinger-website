'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Shield, CheckCircle, Loader2 } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/auth/magic-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
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
            <h1 className="font-display text-h3 text-white mb-2">Check your inbox</h1>
            <p className="text-text-muted text-sm mb-4">
              We&apos;ve sent a magic sign-in link to
            </p>
            <p className="text-white font-semibold text-sm mb-6 bg-white/5 rounded-lg px-4 py-2 inline-block">
              {email}
            </p>
            <p className="text-text-muted text-xs leading-relaxed mb-6">
              Click the link in your email to sign in. The link expires in 60 minutes.
              Check your spam folder if you don&apos;t see it.
            </p>
            <button
              onClick={() => { setStatus('idle'); setEmail('') }}
              className="text-amber hover:underline text-xs"
            >
              Use a different email
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-sm px-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="font-display font-bold text-white text-xl tracking-tight">Dwellinger</span>
            <span style={{ color: '#C4773B' }} className="font-bold text-xl">.</span>
          </Link>
          <p className="text-text-muted text-sm mt-2">UK&apos;s property intelligence platform</p>
        </div>

        <div className="card p-8">
          <h1 className="font-display text-h3 text-white mb-1">Welcome back</h1>
          <p className="text-text-muted text-sm mb-6">Enter your email to receive a magic sign-in link.</p>

          <div className="bg-amber-subtle border border-amber-border rounded-lg p-4 mb-6">
            <div className="flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-amber text-xs font-bold mb-0.5">Passwordless sign in</p>
                <p className="text-text-muted text-xs leading-relaxed">
                  We&apos;ll send a secure one-time link to your inbox. Click it to sign in instantly.
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
            <div>
              <label className="text-xs font-semibold text-text-secondary block mb-1.5">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="input"
                required
                autoComplete="email"
                autoFocus
                disabled={status === 'loading'}
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full py-3.5 flex items-center justify-center gap-2"
              disabled={status === 'loading' || !email.trim()}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending link…
                </>
              ) : (
                'Send magic link'
              )}
            </button>
          </form>

          <p className="text-center text-text-muted text-xs mt-5">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-amber hover:underline">Sign up free</Link>
          </p>
        </div>

        <p className="text-center text-text-muted text-xs mt-4">
          Having trouble?{' '}
          <a href="tel:+447359872594" className="text-amber hover:underline">Call +44 7359 872594</a>
          {' '}or{' '}
          <Link href="/contact" className="text-amber hover:underline">contact support</Link>
        </p>
      </div>
    </div>
  )
}
