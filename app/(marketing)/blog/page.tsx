import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/blog',
  title: 'Blog — Construction & Property Intelligence',
  description: 'Expert guides on home extensions, loft conversions, builder costs, planning applications, and property investment — written by the Dwellinger editorial team.',
})

const posts = [
  {
    slug: 'why-builder-score-beats-star-ratings',
    category: 'Builder Score™',
    title: 'Why Star Ratings Are Not Enough: Introducing Builder Score™',
    excerpt: 'Star ratings can be bought, faked or manipulated. Builder Score™ is a 0–1000 trust rating calculated from verified compliance data — here is how it works and why it matters.',
    readTime: '7 min read',
    date: '5 Oct 2026',
    author: 'James Hargrove',
  },
  {
    slug: 'how-to-choose-a-building-contractor',
    category: 'Choosing a Builder',
    title: 'How to Choose a Building Contractor in the UK: 7 Things to Check',
    excerpt: 'Choosing the right contractor is the most important decision in any building project. Here are 7 things to verify before you sign anything.',
    readTime: '6 min read',
    date: '4 Oct 2026',
    author: 'James Hargrove',
  },
  {
    slug: 'loft-conversion-planning-permission-guide',
    category: 'Planning & Compliance',
    title: 'Loft Conversion Planning Permission: A UK Homeowner\'s Complete Guide',
    excerpt: 'Most loft conversions do not need planning permission — but the rules depend on your property type, location and what changes you make to the roof.',
    readTime: '6 min read',
    date: '3 Oct 2026',
    author: 'James Hargrove',
  },
  {
    slug: 'cdm-regulations-homeowners-guide',
    category: 'Planning & Compliance',
    title: 'CDM 2015 Regulations: What UK Homeowners Need to Know',
    excerpt: 'The Construction (Design and Management) Regulations 2015 apply to most domestic building projects. Here is what homeowners need to know about their legal duties.',
    readTime: '6 min read',
    date: '2 Oct 2026',
    author: 'James Hargrove',
  },
  {
    slug: 'rear-extension-cost-uk-guide',
    category: 'Cost Guides',
    title: 'How Much Does a Rear Extension Cost in the UK? (2026 Guide)',
    excerpt: 'UK rear extension costs range from £1,800–£3,500/m². This guide covers typical costs, what affects price, planning requirements and how to verify your contractor.',
    readTime: '7 min read',
    date: '1 Oct 2026',
    author: 'James Hargrove',
  },
  {
    slug: 'how-much-does-a-rear-extension-cost-uk-2025',
    category: 'Cost Guides',
    title: 'How much does a rear extension cost in the UK? (2025 guide)',
    excerpt: 'A realistic breakdown of rear extension costs across London and the South East — including groundworks, structure, M&E, finishes, and professional fees. With real project examples and verified cost data.',
    readTime: '8 min read',
    date: '12 Sept 2026',
    author: 'James Hargrove',
  },
  {
    slug: 'builder-score-explained-why-star-ratings-arent-enough',
    category: 'Builder Score™',
    title: 'Why star ratings aren\'t enough — the case for Builder Score™',
    excerpt: 'Anyone can buy reviews on Checkatrade. Anyone can create a Companies House record. But neither tells you whether a contractor pays their subcontractors, holds valid insurance, or knows what a CDM Construction Phase Plan is. We built Builder Score™ to answer the harder questions.',
    readTime: '6 min read',
    date: '5 Sept 2026',
    author: 'James Hargrove',
  },
  {
    slug: 'residual-land-value-calculator-explained',
    category: 'For Investors',
    title: 'Residual land value explained — and how to calculate it in 5 minutes',
    excerpt: 'The single most important number in property investment is the maximum you should pay for a site. Here\'s how to calculate it — and why the build cost assumption is the number most developers get wrong.',
    readTime: '7 min read',
    date: '20 Aug 2026',
    author: 'James Hargrove',
  },
  {
    slug: 'cdm-2015-for-homeowners-what-you-need-to-know',
    category: 'Planning & Compliance',
    title: 'CDM 2015 for homeowners — what you actually need to know',
    excerpt: 'If your project involves more than one trade working at the same time, CDM 2015 applies. Most homeowners have never heard of it. Most contractors ignore it. Here\'s what it means, who is responsible, and what the practical obligations are.',
    readTime: '6 min read',
    date: '11 Aug 2026',
    author: 'James Hargrove',
  },
  {
    slug: 'dwell-agents-ai-for-construction-businesses',
    category: 'Platform & Tools',
    title: 'Meet the Dwell Agents — AI built for construction businesses',
    excerpt: 'Four AI agents designed for the specific, unglamorous reality of running a construction business: responding to leads, generating scope of works, writing CDM documents, and coaching your commercial decision-making. Here\'s how they work.',
    readTime: '9 min read',
    date: '3 Aug 2026',
    author: 'James Hargrove',
  },
]

const categories = ['All', 'Cost Guides', 'Builder Score™', 'Planning & Compliance', 'For Investors', 'Platform & Tools']

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-16 pb-12 bg-bg">
        <div className="container mx-auto">
          <p className="section-tag mb-3">Knowledge base</p>
          <h1 className="font-display text-h1 text-white max-w-2xl mb-4">
            Construction intelligence,{' '}
            <span className="text-amber">plain English</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-xl leading-relaxed">
            Expert guides on project costs, planning, compliance, and property investment —
            written by the Dwellinger editorial team.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-bg-surface border-y border-border">
        <div className="container mx-auto py-4">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors border ${
                  cat === 'All'
                    ? 'bg-amber text-text-inverse border-amber'
                    : 'bg-transparent text-text-secondary border-border hover:border-amber hover:text-amber'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 bg-bg">
        <div className="container mx-auto">
          {/* Featured post */}
          <div className="card p-8 mb-8 md:grid md:grid-cols-5 md:gap-8 items-start">
            <div className="md:col-span-3">
              <div className="badge-amber mb-3">{posts[0].category}</div>
              <h2 className="font-display text-h3 text-white mb-3">
                {posts[0].title}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-text-muted text-xs mb-5">
                <span>{posts[0].date}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {posts[0].readTime}
                </span>
                <span>·</span>
                <span>{posts[0].author}</span>
              </div>
              <Link href={`/blog/${posts[0].slug}`} className="btn-primary inline-flex items-center gap-2">
                Read article <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="hidden md:flex md:col-span-2 h-full min-h-[180px] rounded-lg bg-bg-surface border border-border items-center justify-center">
              <span className="text-text-muted text-xs">Featured article</span>
            </div>
          </div>

          {/* Post list */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card p-6 hover:border-amber transition-colors group"
              >
                <div className="badge-amber mb-3 inline-block">{post.category}</div>
                <h3 className="font-bold text-white text-base mb-2 group-hover:text-amber transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-text-muted text-xs mt-auto">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming soon note */}
          <div className="mt-12 card p-6 text-center">
            <p className="text-text-muted text-sm">
              1,972 knowledge articles are being published progressively.{' '}
              <Link href="/register" className="text-amber hover:underline">
                Register for updates
              </Link>{' '}
              as new guides go live.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
