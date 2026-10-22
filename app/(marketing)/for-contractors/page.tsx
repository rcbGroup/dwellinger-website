import { Metadata } from 'next'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'
import { CheckCircle, ArrowRight, Shield, Users, Zap, BarChart3 } from 'lucide-react'

export const metadata: Metadata = pageMetadata({
  path: '/for-contractors',
  title: 'Dwellinger for Contractors — Win Better Work with Builder Score™',
  description: 'Get a Builder Score™ badge, access qualified leads, and let AI handle your admin. Join Dwellinger and win work based on trust, not who paid most to appear first.',
})

const benefits = [
  {
    icon: Shield,
    title: 'Builder Score™ — trust you can prove',
    body: 'Builder Score™ is a 0–1000 trust rating calculated from five verified dimensions: compliance, insurance, payment behaviour, track record, and reviews. When clients search for contractors, your score is your proof of quality — independent, verified, and displayed on your profile.',
  },
  {
    icon: Users,
    title: 'Qualified leads, not spam enquiries',
    body: 'Leads on Dwellinger come from homeowners, developers, and professionals who have already used the estimator and know their budget. They are more ready to proceed than typical directory leads — and matched to your trade, location, and project type.',
  },
  {
    icon: Zap,
    title: 'AI handles your admin',
    body: 'The Planned tools assist with quote generation, CDM documents, client messages, scope of works, and commercial summaries. Less time on paperwork means more time on site — and more consistent documentation across every project.',
  },
  {
    icon: BarChart3,
    title: 'Payment protection that works both ways',
    body: 'Milestone-based payments protect your cash flow. Clients agree to payment terms before work starts. You submit milestone evidence and request release. Disputes are handled through a structured process — not left to chance.',
  },
]

const plans = [
  { name: 'Member', price: '£49/mo', features: ['Builder Score™ profile listing', 'Up to 10 leads/month', 'Basic Builder Score badge', 'AI Estimator (3/mo)', 'Email support'] },
  { name: 'Professional', price: '£99/mo', popular: true, features: ['Everything in Member', 'Up to 30 leads/month', 'Full Builder Score™ (all 5 dimensions)', 'Unlimited AI Estimator', 'Planning alerts', 'Priority support'] },
  { name: 'Premium', price: '£199/mo', features: ['Everything in Professional', 'Unlimited leads', '3 team users', 'WhatsApp automation', 'Full CRM pipeline', 'All 4 Planned tools'] },
]

export default function ForContractorsPage() {
  return (
    <div>
      <section className="pt-16 pb-16 bg-bg">
        <div className="container mx-auto">
          <p className="section-tag mb-3">For contractors</p>
          <h1 className="font-display text-h1 text-white max-w-2xl mb-4">
            Win better work.{' '}
            <span className="text-amber">Prove you are trustworthy.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed mb-8">
            Get a Builder Score™ badge, access qualified leads matched to your trade and location, and let AI handle the admin that eats your time.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/register?type=contractor" className="btn-primary inline-flex items-center gap-2">
              Join as a contractor <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/builder-score" className="btn-secondary">How Builder Score™ works</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-surface border-y border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <div key={i} className="card p-7">
                  <Icon className="w-6 h-6 text-amber mb-4" />
                  <h3 className="font-bold text-white text-lg mb-3">{b.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{b.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg">
        <div className="container mx-auto">
          <h2 className="font-display text-h2 text-white mb-10 text-center">Plans for contractors</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`card p-7 ${plan.popular ? 'border-amber' : ''}`}>
                {plan.popular && <div className="badge-amber mb-3 inline-block">Most popular</div>}
                <div className="font-bold text-white text-xl mb-1">{plan.name}</div>
                <div className="text-amber text-2xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/register?type=contractor" className={plan.popular ? 'btn-primary w-full text-center block' : 'btn-secondary w-full text-center block'}>
                  Join the waitlist
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
