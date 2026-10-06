import Link from 'next/link'
import Nav from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
import { ArrowRight, Star, CheckCircle, Zap, Shield, TrendingUp, Users } from 'lucide-react'

const reviews = [
  { name: 'Adrian P', date: '17 Sep 2024', rating: 5, text: 'Exceptional Service and Outstanding Design! Working with the team at Dwellinger has been an absolute pleasure. They took our vision for a residential project in London and brought it to life in ways that exceeded our expectations. Their professionalism, creativity, and attention to detail were evident throughout the entire process. Communication was clear and timely, and they provided innovative solutions that added real value to the final design. If you\'re looking for architects who combine functionality with beautiful design, I highly recommend Dwellinger. A truly top-tier experience!' },
  { name: 'Sandy Parmar', date: '23 Sep 2024', rating: 5, text: 'Vasi was very professional from the moment. I saw him very replied quite engageable. You could tell him what you need and he will give you his ideas as well so I\'ll find that was a very professional of him to do that and things was done on time. He done my plan and sent for council to give permission for my work to go ahead. Overall, Vasi was very pleasant and very professional.' },
  { name: 'Sean Savage', date: '22 Sep 2024', rating: 5, text: 'Great company and great people. Really friendly and knowledgeable! Would recommend.' },
  { name: 'Laura Barbulescu', date: '17 Sep 2024', rating: 5, text: 'I recommend their services, high quality and professional team.' },
  { name: 'Giles Gailer', date: '23 Sep 2024', rating: 5, text: 'Rare that I comment on Google, but the Dwellinger team were wonderful. Cheers guys.' },
  { name: 'Rachelle See', date: '24 Sep 2024', rating: 5, text: 'Fantastic finish & amazing design.' },
  { name: 'Tom Frost', date: '27 Sep 2024', rating: 5, text: 'Thanks for helping me with the design of my extension.' },
]

const audienceTracks = [
  { icon: '🏠', audience: 'Homeowners', headline: 'Know the real cost before committing', points: ['Free AI-powered ballpark estimate', 'Verified contractors with Builder Score™', 'Project management from day one'], cta: 'I\'m a homeowner', href: '/homeowners' },
  { icon: '🔨', audience: 'Contractors', headline: 'Win more work, spend less time on admin', points: ['Builder Score™ badge on your profile', 'Dwell Agents handle your admin', 'Professional quotes in minutes'], cta: 'I\'m a contractor', href: '/contractors', highlight: true },
  { icon: '📈', audience: 'Investors', headline: 'Construction intelligence for every deal', points: ['Pre-purchase build cost estimates', 'Planning data and approval rates', 'Residual land value calculator'], cta: 'I\'m an investor', href: '/investors' },
]

const features = [
  { icon: Shield, title: 'Builder Score™', desc: 'Our proprietary 0–1000 trust rating for every contractor. Calculated from verified reviews, compliance records, dispute history, and payment behaviour — not just stars.', href: '/builder-score' },
  { icon: Zap, title: 'Estimating Studio', desc: 'Five tiers from free ballpark to full QS-reviewed cost plan. From £0 to £350 — real project data, not Google guesses.', href: '/estimate' },
  { icon: Users, title: '4 Dwell Agents', desc: 'AI agents trained on UK construction. Dwell Coord, Dwell Create, Dwell Clarity, Dwell Coach — handling admin, documents, analysis, and training.', href: '/agents' },
  { icon: TrendingUp, title: 'Planning Intelligence', desc: 'Live planning application data across the UK. See what gets approved, what gets refused, and when your neighbours just got planning permission.', href: '/planning' },
]

const stats = [
  { number: '1,972', label: 'Knowledge articles' },
  { number: '435+', label: 'Platform features built' },
  { number: '0–1000', label: 'Builder Score™ range' },
  { number: '£0', label: 'Free to get started' },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <Nav />
      <main>
        <section className="relative overflow-hidden pt-20 pb-24 bg-bg">
          <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
          <div className="container mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-subtle border border-amber-border text-amber text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
              Now live — UK&apos;s first construction intelligence platform
            </div>
            <h1 className="font-display text-hero text-white max-w-4xl mx-auto mb-6">
              The UK&apos;s smartest platform for{' '}
              <span className="text-amber">homeowners, contractors</span>{' '}
              and property investors
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Find verified contractors with Builder Score™. Get AI-powered estimates grounded in real project data. Manage your build from first idea to final handover — one platform.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Link href="/register" className="btn-primary-lg">Get started free <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/estimate" className="btn-secondary text-base px-8 py-4">Get a free estimate</Link>
            </div>
            <div className="inline-flex items-center gap-4 bg-bg-raised border border-border rounded-lg px-6 py-4 text-left">
              <div className="relative w-16 h-16 flex-shrink-0">
                <svg viewBox="0 0 64 64" className="-rotate-90 w-full h-full">
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#2A2A2A" strokeWidth="4" />
                  <circle cx="32" cy="32" r="28" fill="none" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" strokeDasharray="175.9" strokeDashoffset="15.8" style={{ transition: 'stroke-dashoffset 1.2s ease' }} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">924</span>
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Builder Score™ 924/1000</div>
                <div className="text-text-muted text-xs mt-0.5">Platinum tier · 47 verified reviews</div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (<Star key={i} className="w-3 h-3 text-amber fill-amber" />))}
                  <span className="text-xs text-text-secondary ml-1">4.9/5</span>
                </div>
              </div>
              <div className="pl-4 border-l border-border">
                <div className="badge-amber text-xs">Verified</div>
                <div className="text-text-muted text-xs mt-1">Checkatrade <CheckCircle className="w-3 h-3 text-amber inline" /></div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-bg-surface border-y border-border py-8">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (<div key={s.label}><div className="text-h3 font-display text-amber font-bold">{s.number}</div><div className="text-text-muted text-sm mt-1">{s.label}</div></div>))}
          </div>
        </section>
        <section className="py-20 bg-bg">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <p className="section-tag mb-3">Who Dwellinger is for</p>
              <h2 className="section-title">One platform, three audiences</h2>
              <p className="text-text-secondary mt-4 max-w-xl mx-auto">Whether you&apos;re planning a build, running a contracting business, or evaluating a property deal — Dwellinger has a purpose-built toolset for you.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {audienceTracks.map((track) => (
                <div key={track.audience} className={`relative card p-7 flex flex-col ${track.highlight ? 'border-amber bg-bg-raised shadow-glow' : ''}`}>
                  {track.highlight && (<div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="badge-amber px-4 py-1 text-xs">Most popular</span></div>)}
                  <div className="text-3xl mb-4">{track.icon}</div>
                  <div className="text-xs font-bold text-amber uppercase tracking-widest mb-2">{track.audience}</div>
                  <h3 className="font-display text-h3 text-white mb-4">{track.headline}</h3>
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {track.points.map((p) => (<li key={p} className="flex items-start gap-2.5 text-text-secondary text-sm"><CheckCircle className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />{p}</li>))}
                  </ul>
                  <Link href={track.href} className={track.highlight ? 'btn-primary text-center' : 'btn-secondary text-center'}>{track.cta} <ArrowRight className="w-4 h-4" /></Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-bg-surface border-y border-border">
          <div className="container mx-auto">
            <div className="text-center mb-12"><p className="section-tag mb-3">Platform features</p><h2 className="section-title">Built for the complexity of UK construction</h2></div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f) => (
                <Link key={f.title} href={f.href} className="card-raised p-6 block hover:border-amber-border transition-colors group">
                  <div className="mb-4"><f.icon className="w-6 h-6 text-amber" /></div>
                  <h3 className="font-bold text-white text-base mb-2 group-hover:text-amber transition-colors">{f.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{f.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-bg">
          <div className="container mx-auto">
            <div className="text-center mb-14"><p className="section-tag mb-3">How it works</p><h2 className="section-title">From first idea to final handover</h2></div>
            <div className="max-w-3xl mx-auto">
              {[{n:'01',t:'Tell us about your project',d:'Describe your project type, location, and rough scope. Our AI gives you an instant ballpark within seconds — no email required.'},{n:'02',t:'Find your verified contractor',d:'Browse contractors ranked by Builder Score™ — a 0–1000 trust rating calculated from verified reviews, compliance records, and project history.'},{n:'03',t:'Manage your build on the platform',d:'From contract signing to final sign-off — documents, payments, milestones, and communication all in one place.'}].map((step, i) => (
                <div key={step.n} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amber-subtle border border-amber-border flex items-center justify-center"><span className="text-amber font-display font-bold text-sm">{step.n}</span></div>
                    {i < 2 && <div className="w-px h-8 bg-border mx-auto mt-2" />}
                  </div>
                  <div className="pb-8 last:pb-0"><h3 className="font-bold text-white text-base mb-2">{step.t}</h3><p className="text-text-secondary text-sm leading-relaxed">{step.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-bg-surface border-y border-border">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="section-tag mb-3">Proprietary trust system</p>
                <h2 className="section-title mb-4">Builder Score™ — a real trust rating</h2>
                <p className="text-text-secondary mb-6 leading-relaxed">Not just star ratings that anyone can fake. Builder Score™ calculates a 0–1000 score for every contractor on Dwellinger — combining verified reviews, compliance records, dispute history, payment behaviour, and CDM record.</p>
                <p className="text-text-secondary mb-8 leading-relaxed">It&apos;s Trustpilot, Companies House, and Checkatrade combined — but specific to construction performance. Trademarked. Proprietary. No competitor can replicate it quickly.</p>
                <Link href="/builder-score" className="btn-primary">Learn how Builder Score™ works <ArrowRight className="w-4 h-4" /></Link>
              </div>
              <div className="space-y-3">
                {[{label:'Verified reviews (weighted)',value:95,note:'Photos, dates, job type confirmed'},{label:'CDM compliance record',value:88,note:'Health & safety documentation'},{label:'Payment behaviour',value:92,note:'Supplier and subcontractor payments'},{label:'Dispute outcomes',value:100,note:'Zero unresolved disputes'},{label:'Insurance & compliance',value:90,note:'Current PI + PL insurance confirmed'}].map((item) => (
                  <div key={item.label} className="card-raised p-4">
                    <div className="flex justify-between items-center mb-1.5"><span className="text-sm font-medium text-white">{item.label}</span><span className="text-xs text-amber font-bold">{item.value}/100</span></div>
                    <div className="w-full bg-bg-overlay rounded-full h-1.5"><div className="bg-amber h-1.5 rounded-full" style={{ width: `${item.value}%` }} /></div>
                    <div className="text-xs text-text-muted mt-1">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-bg">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <p className="section-tag mb-3">Verified reviews</p>
              <h2 className="section-title">What our clients say</h2>
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="flex">{[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 text-amber fill-amber" />))}</div>
                <span className="text-white font-bold">EXCELLENT</span>
                <span className="text-text-muted text-sm">7 reviews on</span>
                <span className="text-white text-sm font-medium">Google</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {reviews.map((r) => (
                <div key={r.name} className="card p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-amber-subtle border border-amber-border flex items-center justify-center flex-shrink-0"><span className="text-amber font-bold text-sm">{r.name.charAt(0)}</span></div>
                      <div><div className="text-white font-semibold text-sm">{r.name}</div><div className="text-text-muted text-xs">{r.date}</div></div>
                    </div>
                    <div className="flex">{[...Array(r.rating)].map((_, i) => (<Star key={i} className="w-3 h-3 text-amber fill-amber" />))}</div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed line-clamp-4">{r.text}</p>
                  <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-border">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                    <span className="text-text-muted text-xs">Verified Google review</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 bg-amber relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          <div className="container mx-auto text-center relative z-10">
            <h2 className="font-display text-h1 text-text-inverse font-bold mb-4">Ready to take control of your project?</h2>
            <p className="text-text-inverse/70 text-lg mb-8 max-w-xl mx-auto">Join thousands of homeowners, contractors, and investors who use Dwellinger to plan, price, and deliver better construction projects.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/register" className="bg-text-inverse text-amber font-bold px-8 py-4 rounded-sm hover:bg-text-inverse/90 transition-colors inline-flex items-center gap-2">Get started free <ArrowRight className="w-4 h-4" /></Link>
              <Link href="/contact" className="border-2 border-text-inverse/30 text-text-inverse font-bold px-8 py-4 rounded-sm hover:bg-text-inverse/10 transition-colors">Talk to the team</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
