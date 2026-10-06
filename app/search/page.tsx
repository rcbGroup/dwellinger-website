import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
import { Search, SlidersHorizontal, MapPin, Star, Shield, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Find Contractors — Search by Builder Score™',
  description: 'Search verified UK contractors by Builder Score™, trade type, location, and project size. Every contractor is vetted, scored, and insured.',
}

const tradeTypes = ['All trades','Extensions','Loft conversions','Full refurbishments','Structural works','Kitchens','Bathrooms','Roofing','Electrics','Plumbing']

const mockContractors = [
  { name: 'RCB Design & Build', trade: 'Principal Contractor', location: 'Greater London', score: 924, tier: 'Platinum', projectTypes: ['Extensions','Loft conversions','Refurbishments','Structural works'], reviewCount: 47, verified: true, slug: 'rcb-design-build' },
  { name: 'Apex Build Solutions', trade: 'Main Contractor', location: 'South East London', score: 881, tier: 'Gold', projectTypes: ['Extensions','Refurbishments'], reviewCount: 29, verified: true, slug: 'apex-build-solutions' },
  { name: 'Thornton Structural', trade: 'Structural Specialist', location: 'North London', score: 856, tier: 'Gold', projectTypes: ['Structural works','Loft conversions'], reviewCount: 22, verified: true, slug: 'thornton-structural' },
  { name: 'Heritage Roofing Ltd', trade: 'Roofing Contractor', location: 'East London', score: 793, tier: 'Gold', projectTypes: ['Roofing','Extensions'], reviewCount: 18, verified: true, slug: 'heritage-roofing' },
  { name: 'GreenSpace Landscapes', trade: 'Landscaping & External', location: 'Surrey', score: 712, tier: 'Gold', projectTypes: ['Extensions','Landscaping'], reviewCount: 15, verified: false, slug: 'greenspace-landscapes' },
  { name: 'Franklin Electrics', trade: 'Electrical Contractor', location: 'West London', score: 641, tier: 'Silver', projectTypes: ['Electrics','Refurbishments'], reviewCount: 11, verified: true, slug: 'franklin-electrics' },
]

function scoreTierColour(tier: string) {
  if (tier === 'Platinum') return 'text-amber'
  if (tier === 'Gold') return 'text-yellow-400'
  if (tier === 'Silver') return 'text-zinc-300'
  return 'text-amber-700'
}

export default function SearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Nav />
      <main className="flex-1 pt-16">
        <section className="bg-bg-surface border-b border-border py-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-3 mb-4">
              <div className="flex-1 relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" /><input type="text" placeholder="Search by trade, name, or location…" className="input pl-9 w-full" /></div>
              <div className="relative md:w-52"><MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" /><input type="text" placeholder="Postcode or area" className="input pl-9 w-full" /></div>
              <button className="btn-primary px-6 flex items-center gap-2"><Search className="w-4 h-4" /> Search</button>
            </div>
            <div className="flex gap-2 flex-wrap">
              {tradeTypes.map((t) => (<button key={t} className={`px-3 py-1 rounded-full text-xs font-semibold border transition-colors ${t === 'All trades' ? 'bg-amber text-text-inverse border-amber' : 'bg-transparent text-text-secondary border-border hover:border-amber hover:text-amber'}`}>{t}</button>))}
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="container mx-auto flex gap-8">
            <aside className="hidden lg:block w-60 flex-shrink-0">
              <div className="card p-5 sticky top-20">
                <div className="flex items-center gap-2 mb-4"><SlidersHorizontal className="w-4 h-4 text-amber" /><span className="text-white font-semibold text-sm">Filters</span></div>
                <div className="space-y-5">
                  <div><label className="text-xs font-semibold text-text-secondary block mb-2">Minimum Builder Score™</label><select className="input text-sm"><option>Any score</option><option>700+ (Gold)</option><option>900+ (Platinum)</option><option>500+ (Silver)</option></select></div>
                  <div><label className="text-xs font-semibold text-text-secondary block mb-2">Project type</label><div className="space-y-1.5">{['Extensions','Loft conversions','Refurbishments','Structural works'].map((t) => (<label key={t} className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-amber" /><span className="text-text-secondary text-xs">{t}</span></label>))}</div></div>
                  <div><label className="text-xs font-semibold text-text-secondary block mb-2">Verified only</label><label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-amber" defaultChecked /><span className="text-text-secondary text-xs">Show verified contractors</span></label></div>
                  <div><label className="text-xs font-semibold text-text-secondary block mb-2">Sort by</label><select className="input text-sm"><option>Builder Score™ (highest)</option><option>Most reviews</option><option>Newest</option></select></div>
                </div>
              </div>
            </aside>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-5"><p className="text-text-muted text-sm">Showing <span className="text-white font-semibold">{mockContractors.length}</span> contractors</p><Link href="/register?type=contractor" className="text-amber text-xs hover:underline font-semibold">+ List your business</Link></div>
              <div className="space-y-4">
                {mockContractors.map((c) => (<div key={c.slug} className="card p-5 hover:border-amber transition-colors"><div className="flex items-start gap-4"><div className="w-14 h-14 rounded-full bg-bg-raised border-2 border-amber-border flex flex-col items-center justify-center flex-shrink-0"><span className={`font-display font-bold text-base leading-none ${scoreTierColour(c.tier)}`}>{c.score}</span><span className="text-text-muted text-[9px] leading-none mt-0.5">Score</span></div><div className="flex-1 min-w-0"><div className="flex items-start justify-between gap-3 flex-wrap"><div><div className="flex items-center gap-2 mb-0.5"><h3 className="text-white font-bold text-base">{c.name}</h3>{c.verified && <Shield className="w-4 h-4 text-amber flex-shrink-0" />}</div><div className="flex items-center gap-3 text-text-muted text-xs mb-2"><span>{c.trade}</span><span>·</span><span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{c.location}</span><span>·</span><span className="flex items-center gap-1"><Star className="w-3 h-3 fill-amber text-amber" />{c.reviewCount} reviews</span></div><div className="flex flex-wrap gap-1.5">{c.projectTypes.map((pt) => (<span key={pt} className="badge-amber text-[10px] px-2 py-0.5">{pt}</span>))}</div></div><div className="flex flex-col items-end gap-2 flex-shrink-0"><span className={`font-bold text-sm ${scoreTierColour(c.tier)}`}>{c.tier}</span><Link href={`/contractors/${c.slug}`} className="btn-secondary text-xs px-4 py-2">View profile</Link></div></div></div></div></div>))}
              </div>
              <div className="mt-8 card p-6 border-amber text-center"><p className="section-tag mb-2">Are you a contractor?</p><h3 className="text-white font-bold text-lg mb-2">Get your Builder Score™ listed</h3><p className="text-text-muted text-sm mb-4">Join Dwellinger, verify your credentials, and appear in search results with your score live within 24 hours.</p><Link href="/register?type=contractor" className="btn-primary inline-flex items-center gap-2">List your business free <CheckCircle className="w-4 h-4" /></Link></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
