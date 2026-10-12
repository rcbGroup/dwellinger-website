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
    slug: 'loft-conversion-cost-london-2026',
    category: 'Cost Guides',
    title: 'Loft Conversion Cost in London: 2026 Guide',
    excerpt: 'A loft conversion in London costs £60,000–£130,000 depending on type and specification. This 2026 guide covers costs by conversion type, London borough premiums, what\'s included, and how to get accurate quotes.',
    readTime: '7 min read',
    date: '13 Oct 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b46aba2?w=800&auto=format&q=75',
  },
  {
    slug: 'house-extension-planning-permission-uk',
    category: 'Planning & Compliance',
    title: 'House Extension Planning Permission UK: Complete 2026 Guide',
    excerpt: 'Many house extensions in England do not need planning permission. But the rules are specific and the exceptions matter. Here\'s exactly when you do and don\'t need to apply.',
    readTime: '8 min read',
    date: '12 Oct 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966db3?w=800&auto=format&q=75',
  },
  {
    slug: 'quantity-surveyor-cost-uk',
    category: 'Cost Guides',
    title: 'How Much Does a Quantity Surveyor Cost in the UK? (2026 Guide)',
    excerpt: 'Quantity surveyor fees in the UK range from 1% to 3% of project value, or £800–£6,000+ fixed fee for domestic projects. Here\'s what you get for your money and when a QS is worth it.',
    readTime: '6 min read',
    date: '11 Oct 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&q=75',
  },
  {
    slug: 'average-cost-to-build-a-house-uk-2026',
    category: 'Cost Guides',
    title: 'Average Cost to Build a House in the UK (2026 Guide)',
    excerpt: 'Building a new home in the UK costs £1,750–£3,500/m² depending on spec, location and build method. A full 2026 cost breakdown with real figures by region, specification level, and project type.',
    readTime: '9 min read',
    date: '10 Oct 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&q=75',
  },
  {
    slug: 'building-costs-per-sqm-london-2026',
    category: 'Cost Guides',
    title: 'Building Costs Per m² in London: 2026 Guide',
    excerpt: 'London building costs range from £1,800 to £4,500+ per m² in 2026. This guide breaks down costs by project type — extensions, loft conversions, new builds, and refurbishments — with borough-level context.',
    readTime: '7 min read',
    date: '9 Oct 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&q=75',
  },
  {
    slug: 'garage-conversion-cost-uk-guide',
    category: 'Cost Guides',
    title: 'Garage Conversion Cost UK: 2026 Price Guide',
    excerpt: 'A garage conversion costs £7,500–£22,000 in the UK in 2026. This guide covers what affects price, planning permission rules, Building Regulations requirements, and how to verify your contractor.',
    readTime: '6 min read',
    date: '8 Oct 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&auto=format&q=75',
  },
  {
    slug: 'why-builder-score-beats-star-ratings',
    category: 'Builder Score™',
    title: 'Why Star Ratings Are Not Enough: Introducing Builder Score™',
    excerpt: 'Star ratings can be bought, faked or manipulated. Builder Score™ is a 0–1000 trust rating calculated from verified compliance data — here is how it works and why it matters.',
    readTime: '7 min read',
    date: '5 Oct 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&q=75',
  },
  {
    slug: 'how-to-choose-a-building-contractor',
    category: 'Choosing a Builder',
    title: 'How to Choose a Building Contractor in the UK: 7 Things to Check',
    excerpt: 'Choosing the right contractor is the most important decision in any building project. Here are 7 things to verify before you sign anything.',
    readTime: '6 min read',
    date: '4 Oct 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&auto=format&q=75',
  },
  {
    slug: 'loft-conversion-planning-permission-guide',
    category: 'Planning & Compliance',
    title: 'Loft Conversion Planning Permission: A UK Homeowner\'s Complete Guide',
    excerpt: 'Most loft conversions do not need planning permission — but the rules depend on your property type, location and what changes you make to the roof.',
    readTime: '6 min read',
    date: '3 Oct 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b46aba2?w=800&auto=format&q=75',
  },
  {
    slug: 'cdm-regulations-homeowners-guide',
    category: 'Planning & Compliance',
    title: 'CDM 2015 Regulations: What UK Homeowners Need to Know',
    excerpt: 'The Construction (Design and Management) Regulations 2015 apply to most domestic building projects. Here is what homeowners need to know about their legal duties.',
    readTime: '6 min read',
    date: '2 Oct 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&q=75',
  },
  {
    slug: 'rear-extension-cost-uk-guide',
    category: 'Cost Guides',
    title: 'How Much Does a Rear Extension Cost in the UK? (2026 Guide)',
    excerpt: 'UK rear extension costs range from £1,800–£3,500/m². This guide covers typical costs, what affects price, planning requirements and how to verify your contractor.',
    readTime: '7 min read',
    date: '1 Oct 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966db3?w=800&auto=format&q=75',
  },
  {
    slug: 'how-much-does-a-rear-extension-cost-uk-2025',
    category: 'Cost Guides',
    title: 'How much does a rear extension cost in the UK? (2025 guide)',
    excerpt: 'A realistic breakdown of rear extension costs across London and the South East — including groundworks, structure, M&E, finishes, and professional fees.',
    readTime: '8 min read',
    date: '12 Sept 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&q=75',
  },
  {
    slug: 'builder-score-explained-why-star-ratings-arent-enough',
    category: 'Builder Score™',
    title: 'Why star ratings aren\'t enough — the case for Builder Score™',
    excerpt: 'Anyone can buy reviews on Checkatrade. Anyone can create a Companies House record. But neither tells you whether a contractor pays their subcontractors, holds valid insurance, or knows what a CDM Construction Phase Plan is.',
    readTime: '6 min read',
    date: '5 Sept 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&q=75',
  },
  {
    slug: 'residual-land-value-calculator-explained',
    category: 'For Investors',
    title: 'Residual land value explained — and how to calculate it in 5 minutes',
    excerpt: 'The single most important number in property investment is the maximum you should pay for a site. Here\'s how to calculate it — and why the build cost assumption is the number most developers get wrong.',
    readTime: '7 min read',
    date: '20 Aug 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&auto=format&q=75',
  },
  {
    slug: 'cdm-2015-for-homeowners-what-you-need-to-know',
    category: 'Planning & Compliance',
    title: 'CDM 2015 for homeowners — what you actually need to know',
    excerpt: 'If your project involves more than one trade working at the same time, CDM 2015 applies. Most homeowners have never heard of it. Most contractors ignore it.',
    readTime: '6 min read',
    date: '11 Aug 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&q=75',
  },
  {
    slug: 'dwell-agents-ai-for-construction-businesses',
    category: 'Platform & Tools',
    title: 'Meet the Dwell Agents — AI built for construction businesses',
    excerpt: 'Four AI agents designed for the specific, unglamorous reality of running a construction business: responding to leads, generating scope of works, writing CDM documents, and coaching your commercial decision-making.',
    readTime: '9 min read',
    date: '3 Aug 2026',
    author: 'James Hargrove',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&q=75',
  },
]

const categories = ['All', 'Cost Guides', 'Builder Score™', 'Planning & Compliance', 'For Investors', 'Platform & Tools', 'Choosing a Builder']

export default function BlogPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

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

      {/* Featured post */}
      <section className="py-10 bg-bg">
        <div className="container mx-auto">
          <Link href={`/blog/${featured.slug}`} className="group block overflow-hidden rounded-xl border border-border hover:border-amber transition-colors">
            <div className="md:grid md:grid-cols-5">
              {/* Image */}
              <div className="md:col-span-2 relative h-56 md:h-auto min-h-[220px] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-bg/60 to-transparent md:bg-gradient-to-l" />
              </div>
              {/* Content */}
              <div className="md:col-span-3 p-8 bg-bg-surface flex flex-col justify-center">
                <div className="badge-amber mb-3 inline-block w-fit">{featured.category}</div>
                <h2 className="font-display text-h3 text-white mb-3 group-hover:text-amber transition-colors">
                  {featured.title}
                </h2>
                <p className="text-text-secondary leading-relaxed mb-5 line-clamp-3">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-text-muted text-xs mb-5">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featured.readTime}
                  </span>
                  <span>·</span>
                  <span>{featured.author}</span>
                </div>
                <span className="btn-primary inline-flex items-center gap-2 w-fit">
                  Read article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Post grid */}
      <section className="pb-16 bg-bg">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card overflow-hidden hover:border-amber transition-colors group flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface/80 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="badge-amber text-xs">{post.category}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-white text-sm mb-2 group-hover:text-amber transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-text-muted text-xs">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming soon */}
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
