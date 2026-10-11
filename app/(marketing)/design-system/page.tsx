import type { ReactNode } from 'react'
import Link from 'next/link'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: '/design-system',
  title: 'Dwellinger Design System',
  description: 'Internal reference for Dwellinger design tokens, components, and patterns.',
})

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-12 border-b border-border">
      <h2 className="font-display text-h3 text-white mb-8">{title}</h2>
      {children}
    </section>
  )
}

function Token({ name, value, swatch }: { name: string; value: string; swatch?: string }) {
  return (
    <div className="flex items-center gap-3">
      {swatch && <div className="w-8 h-8 rounded-md border border-border flex-shrink-0" style={{ background: swatch }} />}
      <div className="min-w-0">
        <p className="text-white text-xs font-mono">{name}</p>
        <p className="text-text-muted text-xs font-mono">{value}</p>
      </div>
    </div>
  )
}

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-bg">
      <div className="border-b border-border bg-bg-surface">
        <div className="container mx-auto py-10 max-w-5xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-amber bg-amber-subtle border border-amber-border rounded-full px-2.5 py-0.5">INTERNAL</span>
            <span className="text-text-muted text-xs">Not indexed — internal reference only</span>
          </div>
          <h1 className="font-display text-h1 text-white mb-2">Dwellinger Design System</h1>
          <p className="text-text-secondary text-base max-w-xl">The canonical reference for design tokens, components, and patterns. Every new page must use these — no ad hoc styles.</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-4 max-w-5xl">
        <Section title="Colour palette">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-text-secondary text-xs font-semibold mb-4 uppercase tracking-widest">Brand / Amber</p>
              <div className="space-y-3">
                <Token name="--amber" value="#C4773B" swatch="#C4773B" />
                <Token name="--amber-dark" value="#A85F2A" swatch="#A85F2A" />
                <Token name="--amber-light" value="#D4956A" swatch="#D4956A" />
                <Token name="--amber-subtle" value="rgba(26,14,5,1) dark" swatch="rgba(26,14,5,1)" />
                <Token name="--amber-border" value="rgba(61,32,16,1) dark" swatch="rgba(61,32,16,1)" />
              </div>
            </div>
            <div>
              <p className="text-text-secondary text-xs font-semibold mb-4 uppercase tracking-widest">Backgrounds (dark)</p>
              <div className="space-y-3">
                <Token name="--color-bg" value="#0A0A0A" swatch="#0A0A0A" />
                <Token name="--color-bg-surface" value="#111111" swatch="#111111" />
                <Token name="--color-bg-raised" value="#1A1A1A" swatch="#1A1A1A" />
                <Token name="--color-bg-overlay" value="#222222" swatch="#222222" />
              </div>
            </div>
            <div>
              <p className="text-text-secondary text-xs font-semibold mb-4 uppercase tracking-widest">Text</p>
              <div className="space-y-3">
                <Token name="text" value="#FFFFFF" swatch="#FFFFFF" />
                <Token name="text-secondary" value="#A1A1AA" swatch="#A1A1AA" />
                <Token name="text-muted" value="#71717A" swatch="#71717A" />
              </div>
            </div>
            <div>
              <p className="text-text-secondary text-xs font-semibold mb-4 uppercase tracking-widest">Semantic</p>
              <div className="space-y-3">
                <Token name="success" value="#10B981" swatch="#10B981" />
                <Token name="error" value="#EF4444" swatch="#EF4444" />
                <Token name="warning" value="#F59E0B" swatch="#F59E0B" />
              </div>
            </div>
          </div>
        </Section>
        <Section title="Typography">
          <div className="space-y-8">
            <div>
              <p className="text-text-muted text-xs mb-3 font-mono">font-display (Playfair Display) — headings</p>
              <div className="space-y-4">
                <p className="font-display text-hero text-white">Hero — clamp(2.5rem→4.5rem)</p>
                <p className="font-display text-h1 text-white">H1 — clamp(2rem→3.5rem)</p>
                <p className="font-display text-h2 text-white">H2 — clamp(1.75rem→2.75rem)</p>
                <p className="font-display text-h3 text-white">H3 — clamp(1.25rem→1.75rem)</p>
              </div>
            </div>
            <div>
              <p className="text-text-muted text-xs mb-3 font-mono">font-body (Inter) — body copy</p>
              <div className="space-y-2">
                <p className="text-white text-base">Base — 16px / 1.5 line height</p>
                <p className="text-text-secondary text-sm">Small — 14px, text-secondary</p>
                <p className="text-text-muted text-xs">XS — 12px, text-muted</p>
                <p className="text-text-muted text-xs font-mono">Mono — code / labels</p>
              </div>
            </div>
          </div>
        </Section>
        <Section title="Buttons">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3 items-center">
              <button className="btn-primary px-5 py-2.5">btn-primary</button>
              <button className="btn-secondary px-5 py-2.5">btn-secondary</button>
              <button className="btn-ghost px-5 py-2.5">btn-ghost</button>
              <button className="btn-primary px-5 py-2.5" disabled>disabled</button>
            </div>
            <div><button className="btn-primary-lg px-6 py-3">btn-primary-lg</button></div>
          </div>
        </Section>
        <Section title="Cards">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-5"><p className="text-amber text-xs font-mono mb-2">.card</p><p className="text-white font-semibold mb-1">Base card</p><p className="text-text-muted text-sm">bg-surface, border-border, card-shadow.</p></div>
            <div className="card-raised p-5"><p className="text-amber text-xs font-mono mb-2">.card-raised</p><p className="text-white font-semibold mb-1">Raised card</p><p className="text-text-muted text-sm">bg-raised, slightly more elevation.</p></div>
            <div className="rounded-xl p-5 border" style={{ borderColor: 'rgba(196,119,59,0.3)', background: 'rgba(196,119,59,0.06)' }}><p className="text-amber text-xs font-mono mb-2">amber accent</p><p className="text-white font-semibold mb-1">Highlight card</p><p className="text-text-muted text-sm">For CTAs and upgrade nudges.</p></div>
          </div>
        </Section>
        <Section title="Badges">
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-xs text-amber bg-amber-subtle border border-amber-border rounded-full px-2.5 py-0.5">Amber badge</span>
            <span className="text-xs text-green-400 bg-green-500/10 border border-green-500/30 rounded-full px-2.5 py-0.5">Success</span>
            <span className="text-xs text-red-400 bg-red-500/10 border border-red-500/30 rounded-full px-2.5 py-0.5">Error</span>
            <span className="text-xs text-text-secondary bg-white/5 border border-border rounded-full px-2.5 py-0.5">Neutral</span>
            <span className="text-xs font-semibold text-amber bg-amber-subtle border border-amber-border rounded-full px-2.5 py-0.5 uppercase tracking-widest">Section tag</span>
          </div>
        </Section>
        <Section title="Form elements">
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            <div><label className="text-xs font-semibold text-text-secondary block mb-1.5">Text input (.input)</label><input type="text" className="input" placeholder="Placeholder text" /></div>
            <div><label className="text-xs font-semibold text-text-secondary block mb-1.5">Disabled</label><input type="text" className="input" placeholder="Disabled" disabled /></div>
            <div><label className="text-xs font-semibold text-text-secondary block mb-1.5">Select</label><select className="input"><option>Option A</option><option>Option B</option></select></div>
            <div><label className="text-xs font-semibold text-text-secondary block mb-1.5">Textarea</label><textarea className="input resize-none" rows={3} placeholder="Describe your project…" /></div>
            <div className="flex items-center gap-2.5"><input type="checkbox" id="ds-check" className="accent-amber" defaultChecked /><label htmlFor="ds-check" className="text-xs text-text-muted cursor-pointer">Checkbox (accent-amber)</label></div>
          </div>
        </Section>
        <Section title="Spacing scale">
          <div className="space-y-2">
            {[['py-2 / gap-2','8px','Tight: inline/badge spacing'],['py-4 / gap-4','16px','Base: card padding, form gaps'],['py-6 / gap-6','24px','Card sections, form groups'],['py-10 / py-12','40–48px','Dashboard section gaps'],['py-16','64px','Page section (compact)'],['py-20','80px','Page section (standard)'],['py-24 / py-32','96–128px','Hero / feature sections']].map(([cls,val,desc]) => (
              <div key={cls} className="flex items-center gap-4 text-xs">
                <code className="text-amber font-mono w-36 flex-shrink-0">{cls}</code>
                <span className="text-text-secondary w-16 flex-shrink-0">{val}</span>
                <span className="text-text-muted">{desc}</span>
              </div>
            ))}
          </div>
        </Section>
        <Section title="Layout patterns">
          <div className="space-y-3 text-sm text-text-secondary leading-relaxed max-w-2xl">
            <p><strong className="text-white">Page wrapper:</strong> <code className="text-amber font-mono text-xs">container mx-auto px-4 max-w-5xl</code></p>
            <p><strong className="text-white">Section tag + heading:</strong> Always pair <code className="text-amber font-mono text-xs">.section-tag</code> above <code className="text-amber font-mono text-xs">.section-title</code>. Never bare h2.</p>
            <p><strong className="text-white">Grids:</strong> 2-col = <code className="text-amber font-mono text-xs">grid md:grid-cols-2 gap-6</code>, 3-col = <code className="text-amber font-mono text-xs">grid md:grid-cols-3 gap-5</code>, 4-col = <code className="text-amber font-mono text-xs">grid grid-cols-2 md:grid-cols-4 gap-3</code></p>
            <p><strong className="text-white">Themes:</strong> Three themes via <code className="text-amber font-mono text-xs">data-theme</code>: dark (default), mid, light. Never hardcode hex except amber #C4773B.</p>
          </div>
        </Section>
        <div className="py-8 text-center"><Link href="/" className="text-amber text-xs hover:underline">&larr; Back to Dwellinger</Link></div>
      </div>
    </div>
  )
}
