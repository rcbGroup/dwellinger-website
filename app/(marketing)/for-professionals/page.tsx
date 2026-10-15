import { Metadata } from 'next'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'
import { CheckCircle, ArrowRight, Users, BarChart3, FileText, Shield } from 'lucide-react'

export const metadata: Metadata = pageMetadata({
  path: '/for-professionals',
  title: 'Dwellinger for Architects & Professionals — Contractor Procurement & Cost Intelligence',
  description: 'Verified contractor procurement, planning data, cost intelligence, and client-ready dashboards for architects, project managers, and construction consultants.',
})

const benefits = [
  {
    icon: Shield,
    title: 'Verified contractor procurement',
    body: 'Find, shortlist, and recommend contractors with documented Builder Score™ ratings. Give your clients confidence that every contractor on your shortlist has been evidence-based — not just self-declared.',
  },
  {
    icon: BarChart3,
    title: 'Cost benchmarking for client advice',
    body: 'Access professionally estimated cost data by project type and location. Use verified cost ranges to advise clients on budgets, feasibility, and value engineering options — backed by real project data, not opinion.',
  },
  {
    icon: FileText,
    title: 'Client-ready dashboards and documents',
    body: 'Generate project cost summaries, contractor shortlists, and planning data reports in client-ready format. Reduce the time spent on procurement and cost advice, and increase the quality of the output.',
  },
  {
    icon: Users,
    title: 'Planning data and approval analytics',
    body: 'Access planning approval rates, local authority benchmarks, and typical decision timescales. Help clients understand planning risk before they commit — and make better informed scheme-level decisions.',
  },
]

export default function ForProfessionalsPage() {
  return (
    <div>
      <section className="pt-16 pb-16 bg-bg">
        <div className="container mx-auto">
          <p className="section-tag mb-3">For architects & professionals</p>
          <h1 className="font-display text-h1 text-white max-w-2xl mb-4">
            Contractor procurement and{' '}
            <span className="text-amber">cost intelligence</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed mb-8">
            Verified contractor sourcing, professionally estimated cost data, and planning intelligence — tools built for architects, project managers, and construction consultants.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/search" className="btn-primary inline-flex items-center gap-2">
              Search verified contractors <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services/estimating" className="btn-secondary">Get a cost plan</Link>
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
        <div className="container mx-auto text-center">
          <h2 className="font-display text-h2 text-white mb-4">Register as a professional</h2>
          <p className="text-text-secondary mb-8 max-w-md mx-auto">Free access to contractor search, Builder Score™ data, and planning analytics.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/register?type=professional" className="btn-primary inline-flex items-center gap-2">
              Create a free account <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/search" className="btn-secondary">Search contractors</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
