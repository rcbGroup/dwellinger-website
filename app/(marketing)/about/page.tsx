import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Dwellinger — Built by Builders, for the Industry',
  description: 'Dwellinger is the UK\'s national property intelligence platform, founded by Vasi J. and powered by the same systems used daily by RCB Design & Build.',
}

const milestones = [
  { year: '2021', event: 'Dwellinger.co.uk domain registered. RCB Design & Build begins proving the model.' },
  { year: '2023', event: 'Rankitt internal platform reaches 200+ features. The foundation of what becomes Dwellinger\'s Pro Tools.' },
  { year: '2024', event: 'Dwellinger brand repositioned as a three-sided platform marketplace. Builder Score™ concept and algorithm designed.' },
  { year: '2025', event: '1,972 knowledge articles written and structured. Platform architecture finalised. Estimating Studio tiers defined.' },
  { year: '2026', event: 'Dwellinger public platform launches. RCB Design & Build becomes the founding flagship contractor.' },
]

const values = [
  { title: 'Transparency first', desc: 'Homeowners deserve to know the real cost before committing. Contractors deserve to win work on merit, not luck. We built the tools that make both possible.' },
  { title: 'Trust through verification', desc: 'Builder Score™ exists because trust in construction is broken. We verify everything — reviews, documents, insurance, payment behaviour — before a score is issued.' },
  { title: 'Technology that actually helps', desc: 'Not AI for AI\'s sake. Every feature on Dwellinger came from a real problem that real builders and homeowners face — and it was tested on real projects before it shipped.' },
  { title: 'Built by people who build', desc: 'The team behind Dwellinger runs live construction projects. We don\'t theorise about the industry — we operate in it daily.' },
]

export default function AboutPage() {
  return (
    <div>
      <section className="pt-16 pb-20 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="container mx-auto relative z-10 max-w-3xl">
          <p className="section-tag mb-3">About Dwellinger</p>
          <h1 className="font-display text-h1 text-white mb-6">Built by builders,{' '}<span className="text-amber">for the industry</span></h1>
          <p className="text-text-secondary text-lg leading-relaxed mb-4">Dwellinger is the UK&apos;s national design, build, and property intelligence platform. We exist because the UK construction industry is fragmented, opaque, and trust-broken — and no single platform was doing anything serious about it.</p>
          <p className="text-text-secondary text-lg leading-relaxed">We are not a technology company that decided to enter construction. We are a construction business that built the technology it needed — and decided to share it with the industry.</p>
        </div>
      </section>
      <section className="py-16 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="text-center mb-10"><p className="section-tag mb-3">The ecosystem</p><h2 className="section-title">Three connected platforms</h2></div>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[{name:'RCB Design & Build',url:'rcbgroup.co.uk',href:'https://rcbgroup.co.uk',desc:'The founding flagship contractor. Every Dwellinger tool was first tested and refined through RCB\'s real client projects in Greater London.',tag:'Principal contractor'},{name:'Rankitt',url:'rankitt.rcbgroup.co.uk',href:'https://rankitt.rcbgroup.co.uk',desc:'The internal SaaS platform powering RCB\'s operations — 435+ features built and live. These become Dwellinger Pro Tools for contractors.',tag:'Contractor SaaS'},{name:'Dwellinger',url:'dwellinger.co.uk',href:'/',desc:'The public marketplace platform. Where homeowners, contractors, and property investors all meet — with Builder Score™, AI agents, and planning intelligence.',tag:'Public marketplace',highlight:true}].map((p) => (
              <div key={p.name} className={`card p-6 ${p.highlight ? 'border-amber' : ''}`}>
                <div className="badge-amber mb-4">{p.tag}</div>
                <h3 className="text-white font-bold text-base mb-1">{p.name}</h3>
                <a href={p.href} className="text-amber text-xs mb-3 block hover:underline">{p.url} ↗</a>
                <p className="text-text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-bg">
        <div className="container mx-auto max-w-3xl">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <div className="w-24 h-24 rounded-full bg-amber-subtle border-2 border-amber flex items-center justify-center mb-4"><span className="text-amber font-display font-bold text-3xl">V</span></div>
              <div className="text-white font-bold text-lg">Vasi J.</div>
              <div className="text-amber text-sm">Founder, Dwellinger</div>
              <div className="text-text-muted text-xs mt-1">Principal, RCB Design &amp; Build</div>
            </div>
            <div className="md:col-span-2">
              <p className="section-tag mb-3">Founder</p>
              <h2 className="font-display text-h3 text-white mb-4">The problem was personal before it became a platform</h2>
              <p className="text-text-secondary leading-relaxed mb-4">Vasi J. has spent years running construction projects across Greater London — extensions, loft conversions, full refurbishments, and structural works. He watched homeowners get burned by rogue traders, decent contractors lose business to cheaper operators who cut corners, and investors buy deals based on wildly wrong build cost guesses.</p>
              <p className="text-text-secondary leading-relaxed mb-4">Rather than complain about the industry, he built the tools that would have helped — first internally through RCB Design &amp; Build, then scaled into a platform that any contractor, homeowner, or investor in the UK could access.</p>
              <p className="text-text-secondary leading-relaxed">Dwellinger is the result. A platform built by someone who has been on every side of the transaction — and knows exactly where it breaks down.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="text-center mb-12"><p className="section-tag mb-3">What we believe</p><h2 className="section-title">Four things we won&apos;t compromise on</h2></div>
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {values.map((v) => (<div key={v.title} className="card p-6"><div className="flex items-center gap-2 mb-3"><CheckCircle className="w-5 h-5 text-amber flex-shrink-0" /><h3 className="text-white font-bold text-base">{v.title}</h3></div><p className="text-text-muted text-sm leading-relaxed">{v.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-bg">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12"><p className="section-tag mb-3">The journey</p><h2 className="section-title">How we got here</h2></div>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-amber-subtle border border-amber-border flex items-center justify-center flex-shrink-0"><span className="text-amber font-bold text-xs">{m.year}</span></div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-border my-2" />}
                </div>
                <div className="pb-8 last:pb-0"><p className="text-text-secondary text-sm leading-relaxed">{m.event}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-bg-surface border-t border-border">
        <div className="container mx-auto text-center">
          <h2 className="section-title mb-4">Be part of what comes next</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">Dwellinger is live and growing. We&apos;re looking for contractors who want to build their Builder Score™ reputation and homeowners who want a smarter way to plan their build.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/register" className="btn-primary-lg">Get started free <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/contact" className="btn-secondary text-base px-8 py-4">Talk to Vasi</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
