'use client'

import { useEffect, useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'
import { User, Save, CheckCircle } from 'lucide-react'
import type { User as SupabaseUser } from '@supabase/supabase-js'

const ROLE_OPTIONS = [
  { value: 'homeowner', label: 'Homeowner', desc: 'Planning or managing a home project' },
  { value: 'contractor', label: 'Contractor', desc: 'Builder, tradesperson or construction professional' },
  { value: 'investor', label: 'Property Investor', desc: 'Buying, developing or managing property for investment' },
  { value: 'professional', label: 'Property Professional', desc: 'Architect, designer, surveyor or consultant' },
]

export default function SettingsPage() {
  const router = useRouter()
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState('homeowner')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.replace('/login'); return }
      const u = session.user
      setUser(u)
      setFirstName(u.user_metadata?.first_name ?? '')
      setLastName(u.user_metadata?.last_name ?? '')
      setRole(u.user_metadata?.role ?? 'homeowner')
    }
    load()
  }, [router])

  async function handleSave(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSaving(true)
    setError('')
    setSaved(false)
    const { error } = await supabase.auth.updateUser({
      data: { first_name: firstName, last_name: lastName, role },
    })
    if (error) {
      setError(error.message)
    } else {
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }
    setSaving(false)
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center py-24">
        <div
          className="w-10 h-10 border-2 rounded-full animate-spin"
          style={{ borderColor: '#C4773B', borderTopColor: 'transparent' }}
        />
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-10 max-w-2xl">
      <div className="mb-8">
        <h1 className="font-display text-3xl text-white mb-1">Profile settings</h1>
        <p className="text-text-muted text-sm">Update your name, role, and account details.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="card p-6">
          <h2 className="font-display text-base text-white mb-4 flex items-center gap-2">
            <User className="w-4 h-4 text-amber" />
            Your name
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-text-muted text-xs mb-1.5" htmlFor="firstName">First name</label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded-lg px-3 py-2.5 text-white text-sm outline-none"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              />
            </div>
            <div>
              <label className="block text-text-muted text-xs mb-1.5" htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full rounded-lg px-3 py-2.5 text-white text-sm outline-none"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h2 className="font-display text-base text-white mb-1">Email address</h2>
          <p className="text-text-muted text-sm mt-1">{user.email}</p>
          <p className="text-text-muted text-xs mt-2">To change your email address, contact support.</p>
        </div>

        <div className="card p-6">
          <h2 className="font-display text-base text-white mb-4">Your role</h2>
          <div className="space-y-2">
            {ROLE_OPTIONS.map((opt) => (
              <label
                key={opt.value}
                className="flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors"
                style={
                  role === opt.value
                    ? { background: 'rgba(196,119,59,0.1)', border: '1px solid rgba(196,119,59,0.3)' }
                    : { background: 'rgba(255,255,255,0.04)', border: '1px solid transparent' }
                }
              >
                <input
                  type="radio"
                  name="role"
                  value={opt.value}
                  checked={role === opt.value}
                  onChange={() => setRole(opt.value)}
                  className="mt-0.5"
                  style={{ accentColor: '#C4773B' }}
                />
                <div>
                  <p className="text-white text-sm font-medium">{opt.label}</p>
                  <p className="text-text-muted text-xs">{opt.desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {error && (
          <div
            className="p-4 rounded-lg"
            style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)' }}
          >
            <p className="text-sm" style={{ color: '#f87171' }}>{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={saving}
          className="w-full py-3 rounded-lg font-semibold text-white text-sm flex items-center justify-center gap-2 transition-opacity"
          style={{ background: '#C4773B', opacity: saving ? 0.7 : 1 }}
        >
          {saved ? (
            <><CheckCircle className="w-4 h-4" /> Saved</>
          ) : saving ? (
            'Saving…'
          ) : (
            <><Save className="w-4 h-4" /> Save changes</>
          )}
        </button>
      </form>
    </main>
  )
}
