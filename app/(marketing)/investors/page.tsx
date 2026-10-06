import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle, TrendingUp, Map, Calculator, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Investors — Construction Intelligence for Property Professionals',
  description: 'Pre-purchase build cost estimates, planning intelligence, residual land value calculator, and deal feasibility tools for property investors and developers.',
}

const tools = [
  { icon: Calculator, title: 'Pre-purchase cost estimate', desc: 'Get a QS-reviewed build cost estimate before you commit to a deal. Know your true all-in numbers before you exchange — not after.' },
  { icon: Map, title: 'Planning intelligence', desc: 'What gets approved in this borough? What\'s the average processing time? What conditions are typically imposed? Live data from planning portals across the UK.' },
  { icon: Calculator, title: 'Residual land value calculator', desc: 'Input GDV, build cost, fees, finance, and profit margin — get the maximum you should pay for the land. No spreadsheet required.' },
  { icon: Search, title: 'Contractor vetting for your portfolio', desc: 'Search Builder Score™ for contractors with your project type, deal size, and location. Verified, compliant, and performance-rated.' },
  { icon: TrendingUp, title: 'Deal feasibility analysis', desc: 'Multi-unit development appraisal, phased cost planning, and sensitivity analysis. Understand your margin before you start.' },
  { icon: Map, title: 'Multi-project management dashboard', desc: 'Track multiple live development projects from one dashboard. Milestones, spend, drawdowns, contractor performance — all visible at once.' },
]

export default function InvestorsPage() {
  return (
    <div>
      <section className="pt-16 pb-20 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <p className="section-tag mb-3">For Property Investors & Developers</p>
          <h1 className="font-display text-h1 text-white max-w-3xl mb-6">Construction intelligence for{' '}<span className="text-amber">every deal you evaluate</span></h1>
          <p className="text-text-secondary text-lg max-w-2xl mb-8 leading-relaxed">Stop buying deals without accurate build cost data. Get pre-purchase estimates, planning intelligence, and residual land value calculations — before you commit, not after.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/register?type=investor" className="btn-primary-lg">Start for free <ArrowRight className="w-4 h-4" /></Link>
            <Link href="/estimate" className="btn-secondary text-base px-8 py-4">Try the cost estimator</Link>
          </div>
        </div>
      </section>
      <section className="bg-bg-surface border-y border-border py-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{v:'£0',l:'Free to start'},{v:'1,972',l:'Knowledge articles'},{v:'5 mins',l:'Average deal appraisal'},{v:'Live',l:'UK planning data'}].map((s) => (<div key={s.l}><div className="text-amber font-display font-bold text-2xl">{s.v}</div><div className="text-text-muted text-sm mt-1">{s.l}</div></div>))}
        </div>
      </section>
      <section className="py-20 bg-bg">
        <div className="container mx-auto">
          <div className="text-center mb-12"><p className="section-tag mb-3">Tools for investors</p><h2 className="section-title">Everything you need to evaluate, acquire, and deliver</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tools.map((t) => (<div key={t.title} className="card p-6"><div className="mb-4"><t.icon className="w-6 h-6 text-amber" /></div><h3 className="font-bold text-white text-base mb-2">{t.title}</h3><p className="text-text-muted text-sm leading-relaxed">{t.desc}</p></div>))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-tag mb-3">Residual Land Value Calculator</p>
              <h2 className="section-title mb-4">Know what to pay for land before you bid</h2>
              <p className="text-text-secondary mb-6 leading-relaxed">The most common mistake in property investment is buying the land at the wrong price because the build cost estimate was wrong. Dwellinger gives you a QS-grounded build cost before you even view the site.</p>
              <ul className="space-y-3">{['Input: GDV, build cost, finance rate, fees, target margin','Output: Maximum land value you can afford to pay','Sensitivity tables: what happens if costs overrun by 10%, 20%?','Exportable as PDF or Excel'].map((item) => (<li key={item} className="flex items-start gap-2.5 text-text-secondary text-sm"><CheckCircle className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />{item}</li>))}</ul>
              <Link href="/register?type=investor" className="btn-primary mt-8 inline-flex">Access the calculator <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="card-raised p-6">
              <div className="text-amber text-xs font-bold uppercase tracking-widest mb-4">RLV Calculator — Example</div>
              <div className="space-y-3">
                {[{label:'GDV (5 houses × £380k)',value:'£1,900,000'},{label:'Build cost (Dwellinger estimate)',value:'£820,000'},{label:'Fees & contingency (12%)',value:'£98,400'},{label:'Finance (8% on build, 18mo)',value:'£112,000'},{label:'Target developer profit (20%)',value:'£380,000'}].map((row) => (<div key={row.label} className="flex justify-between items-center py-2 border-b border-border last:border-0"><span className="text-text-muted text-xs">{row.label}</span><span className="text-white text-xs font-bold">{row.value}</span></div>))}
                <div className="bg-amber-subtle border border-amber-border rounded p-3 mt-2"><div className="flex justify-between items-center"><span className="text-amber text-sm font-bold">Maximum land value</span><span className="text-amber font-display font-bold text-xl">£489,600</span></div><p className="text-text-muted text-xs mt-1">Based on these inputs. Adjust to see sensitivity.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-bg">
        <div className="container mx-auto text-center">
          <h2 className="section-title mb-4">Start evaluating deals with real construction data</h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">Free to start. No contract. Access the RLV calculator, planning intelligence, and build cost estimator today.</p>
          <Link href="/register?type=investor" className="btn-primary-lg">Get started free <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </section>
    </div>
  )
}
