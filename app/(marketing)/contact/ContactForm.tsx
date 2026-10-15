'use client'

import { useState } from 'react'
import type { FormEvent } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      name: `${data.get('first_name') ?? ''} ${data.get('last_name') ?? ''}`.trim(),
      email: data.get('email') as string,
      phone: data.get('phone') as string | null,
      subject: (data.get('user_type') as string) || 'General enquiry',
      message: data.get('message') as string,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok || json.error) {
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }
      setStatus('sent')
    } catch {
      setErrorMsg('Network error. Please call us on info@dwellinger.co.uk.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="card p-8 text-center">
        <div className="w-14 h-14 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
          <span style={{ fontSize: 28 }}>✓</span>
        </div>
        <h2 className="font-display text-h3 text-white mb-2">Message received</h2>
        <p className="text-text-muted text-sm leading-relaxed">
          Thank you for getting in touch. We&apos;ll reply within 1 working day.<br />
          Or call us now on{' '}
          <a href="mailto:info@dwellinger.co.uk" className="text-amber hover:underline">info@dwellinger.co.uk</a>.
        </p>
      </div>
    )
  }

  return (
    <div className="card p-8">
      <h2 className="font-display text-h3 text-white mb-2">Send us a message</h2>
      <p className="text-text-muted text-sm mb-6">We&apos;ll get back to you within 1 working day.</p>

      {status === 'error' && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4">
          <p className="text-red-400 text-xs">{errorMsg}</p>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-semibold text-text-secondary block mb-1.5">First name</label>
            <input type="text" name="first_name" placeholder="Sarah" className="input" required />
          </div>
          <div>
            <label className="text-xs font-semibold text-text-secondary block mb-1.5">Last name</label>
            <input type="text" name="last_name" placeholder="Johnson" className="input" required />
          </div>
        </div>
        <div>
          <label className="text-xs font-semibold text-text-secondary block mb-1.5">Email address</label>
          <input type="email" name="email" placeholder="sarah@example.com" className="input" required />
        </div>
        <div>
          <label className="text-xs font-semibold text-text-secondary block mb-1.5">Phone (optional)</label>
          <input type="tel" name="phone" placeholder="+44 7..." className="input" />
        </div>
        <div>
          <label className="text-xs font-semibold text-text-secondary block mb-1.5">I am a&hellip;</label>
          <select className="input" name="user_type">
            <option value="">Select...</option>
            <option value="homeowner">Homeowner planning a project</option>
            <option value="contractor">Contractor interested in joining</option>
            <option value="investor">Property investor / developer</option>
            <option value="other">Something else</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-text-secondary block mb-1.5">Message</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Tell us about your project or question..."
            className="input resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="btn-primary w-full py-3.5"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending…' : 'Send message'}
        </button>
        <p className="text-text-muted text-xs text-center">
          Or call us directly on{' '}
          <a href="mailto:info@dwellinger.co.uk" className="text-amber hover:underline">
            info@dwellinger.co.uk
          </a>
        </p>
      </form>
    </div>
  )
}
