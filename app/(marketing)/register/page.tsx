import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Register — Get started with Dwellinger',
  description: 'Create your free Dwellinger account. Homeowners, contractors, and investors welcome. Start your 14-day free trial — no credit card required.',
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center py-16">
      <div className="w-full max-w-md px-4">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2"><span className="font-display font-bold text-white text-xl tracking-tight">Dwellinger</span><span className="text-amber font-bold text-xl">.</span></Link>
          <p className="text-text-muted text-sm mt-2">UK&apos;s property intelligence platform</p>
        </div>
        <div className="card p-8">
          <h1 className="font-display text-h3 text-white mb-1">Create your account</h1>
          <p className="text-text-muted text-sm mb-6">Free for 14 days. No credit card required.</p>
          <div className="mb-6">
            <label className="text-xs font-semibold text-text-secondary block mb-2">I am a…</label>
            <div className="grid grid-cols-3 gap-2">
              {[{id:'homeowner',label:'Homeowner',icon:'🏠'},{id:'contractor',label:'Contractor',icon:'🔨'},{id:'investor',label:'Investor',icon:'📊'}].map((role) => (
                <label key={role.id} className="flex flex-col items-center gap-1.5 p-3 card border-border cursor-pointer hover:border-amber transition-colors has-[:checked]:border-amber has-[:checked]:bg-amber-subtle">
                  <input type="radio" name="user_type" value={role.id} className="sr-only" defaultChecked={role.id === 'contractor'} />
                  <span className="text-lg">{role.icon}</span><span className="text-xs font-semibold text-text-secondary">{role.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="bg-amber-subtle border border-amber-border rounded-lg p-4 mb-6">
            <div className="flex items-start gap-2.5"><Shield className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" /><div><p className="text-amber text-xs font-bold mb-0.5">Passwordless sign in</p><p className="text-text-muted text-xs leading-relaxed">We use magic links — enter your email and we&apos;ll send a secure sign-in link. No password to remember or lose.</p></div></div>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-3"><div><label className="text-xs font-semibold text-text-secondary block mb-1.5">First name</label><input type="text" placeholder="Sarah" className="input" required /></div><div><label className="text-xs font-semibold text-text-secondary block mb-1.5">Last name</label><input type="text" placeholder="Johnson" className="input" required /></div></div>
            <div><label className="text-xs font-semibold text-text-secondary block mb-1.5">Work email</label><input type="email" placeholder="sarah@company.com" className="input" required /></div>
            <div><label className="text-xs font-semibold text-text-secondary block mb-1.5">Company name <span className="text-text-muted font-normal">(optional)</span></label><input type="text" placeholder="Your company" className="input" /></div>
            <div><label className="text-xs font-semibold text-text-secondary block mb-1.5">Phone <span className="text-text-muted font-normal">(optional)</span></label><input type="tel" placeholder="+44 7..." className="input" /></div>
            <div className="flex items-start gap-2.5 pt-1"><input type="checkbox" id="terms" className="mt-0.5 flex-shrink-0 accent-amber" required /><label htmlFor="terms" className="text-xs text-text-muted leading-relaxed">I agree to Dwellinger&apos;s{' '}<Link href="/terms" className="text-amber hover:underline">Terms of Service</Link>{' '}and{' '}<Link href="/privacy" className="text-amber hover:underline">Privacy Policy</Link>.</label></div>
            <button type="submit" className="btn-primary w-full py-3.5">Send me a magic link</button>
          </form>
          <p className="text-center text-text-muted text-xs mt-5">Already have an account?{' '}<Link href="/login" className="text-amber hover:underline">Sign in</Link></p>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[{v:'14 days',l:'Free trial'},{v:'No card',l:'Required'},{v:'Cancel',l:'Anytime'}].map((s) => (<div key={s.l} className="card-raised px-3 py-2"><div className="text-amber font-bold text-sm">{s.v}</div><div className="text-text-muted text-xs">{s.l}</div></div>))}
        </div>
        <div className="mt-4 space-y-2">
          {['Builder Score™ profile created automatically','Access to Estimating Studio from day one','All 4 Dwell Agents available on Professional trial'].map((item) => (<div key={item} className="flex items-center gap-2 text-text-muted text-xs"><CheckCircle className="w-3.5 h-3.5 text-amber flex-shrink-0" />{item}</div>))}
        </div>
      </div>
    </div>
  )
}
