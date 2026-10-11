import Link from 'next/link'
import { getDictionary, LOCALES, LOCALE_NAMES, LOCALE_FLAGS, type Locale } from '@/lib/i18n/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { notFound } from 'next/navigation'
import { ArrowRight, Shield, Zap, Users, TrendingUp, CheckCircle, Star } from 'lucide-react'

const SUPPORTED_LANGS: Locale[] = ['ro', 'pl', 'es', 'fr', 'de', 'it', 'pt', 'uk', 'ru']

interface Props {
  params: { lang: string }
}

export async function generateStaticParams() {
  return SUPPORTED_LANGS.map(lang => ({ lang }))
}

export async function generateMetadata({ params }: Props) {
  if (!SUPPORTED_LANGS.includes(params.lang as Locale)) return {}
  const dict = getDictionary(params.lang as Locale)
  return pageMetadata({
    path: `/${params.lang}`,
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
  })
}

export default function LocalisedHomePage({ params }: Props) {
  const lang = params.lang as Locale
  if (!SUPPORTED_LANGS.includes(lang)) notFound()
  const d = getDictionary(lang)

  const features = [
    { icon: <Shield className="w-6 h-6" style={{ color: 'var(--amber)' }} />, title: 'Builder Score™', desc: d.common.builderScore, href: '/builder-score' },
    { icon: <Zap className="w-6 h-6" style={{ color: 'var(--amber)' }} />, title: 'AI Estimates', desc: 'QS-reviewed cost plans from £95. Real London project data.', href: '/services/estimating' },
    { icon: <Users className="w-6 h-6" style={{ color: 'var(--amber)' }} />, title: 'Dwell Agents', desc: 'AI agents for admin, documents, analysis and contractor coordination.', href: '/platform/for-contractors' },
    { icon: <TrendingUp className="w-6 h-6" style={{ color: 'var(--amber)' }} />, title: 'Planning Intelligence', desc: 'Live UK planning data — approvals, refusals, neighbour applications.', href: '/tools/planning' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-bg">

      {/* Language selector strip */}
      <div style={{ background: 'var(--color-bg-surface)', borderBottom: '1px solid var(--color-border)', padding: '8px 16px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <a href="/" style={{ color: 'var(--color-text-muted)', fontWeight: 500, fontSize: '0.75rem', textDecoration: 'none' }}>🇬🇧 EN</a>
          {SUPPORTED_LANGS.map(l => (
            <a
              key={l}
              href={`/${l}`}
              style={{
                color: l === lang ? 'var(--amber)' : 'var(--color-text-muted)',
                fontWeight: l === lang ? 700 : 400,
                fontSize: '0.75rem',
                textDecoration: 'none',
              }}
            >
              {LOCALE_FLAGS[l]} {LOCALE_NAMES[l]}
            </a>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section style={{ padding: '80px 0 60px', background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--hero-gradient)' }} />
        <div className="container mx-auto px-4 text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 999,
            background: 'rgba(196,119,59,0.1)', border: '1px solid rgba(196,119,59,0.25)',
            color: 'var(--amber)', fontSize: '0.75rem', fontWeight: 700, marginBottom: 24,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--amber)', display: 'inline-block' }} />
            UK Construction Intelligence
          </div>
          <h1 className="font-display" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 800,
            color: 'var(--color-text)', marginBottom: 24, lineHeight: 1.15,
          }}>
            {d.home.heroTitle}
          </h1>
          <p style={{
            fontSize: '1.125rem', color: 'var(--color-text-secondary)',
            maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.7,
          }}>
            {d.home.heroSubtitle}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/register" className="btn-primary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
              {d.home.heroCta} <ArrowRight className="w-4 h-4" style={{ display: 'inline', marginLeft: 6 }} />
            </Link>
            <Link href="/builder-score" className="btn-secondary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
              {d.home.heroCtaSecondary}
            </Link>
          </div>
          {/* Trust badge */}
          <p style={{ marginTop: 24, fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            {d.common.freeToStart} &middot; {d.common.trialBadge}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{
        padding: '48px 0',
        background: 'linear-gradient(135deg, rgba(196,119,59,0.14) 0%, rgba(196,119,59,0.04) 100%)',
        borderTop: '1px solid rgba(196,119,59,0.2)',
        borderBottom: '1px solid rgba(196,119,59,0.2)',
      }}>
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '1,972', label: 'Knowledge articles' },
            { num: '1,000', label: 'Builder Score™ max' },
            { num: '£0', label: 'Free to get started' },
            { num: '14-day', label: 'Free trial, no card' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--amber)', fontFamily: 'Playfair Display, Georgia, serif' }}>{s.num}</div>
              <div style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '72px 0', background: 'var(--color-bg-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <p className="section-tag" style={{ marginBottom: 12 }}>How it works</p>
            <h2 className="section-title">{d.home.howItWorksTitle}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { n: '01', t: d.home.step1Title, d: d.home.step1Desc },
              { n: '02', t: d.home.step2Title, d: d.home.step2Desc },
              { n: '03', t: d.home.step3Title, d: d.home.step3Desc },
            ].map(step => (
              <div key={step.n} className="text-center">
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'rgba(196,119,59,0.12)', border: '2px solid rgba(196,119,59,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 16px', fontSize: '0.875rem', fontWeight: 800,
                  color: 'var(--amber)', fontFamily: 'Playfair Display, Georgia, serif',
                }}>
                  {step.n}
                </div>
                <h3 style={{ fontWeight: 700, color: 'var(--color-text)', marginBottom: 8, fontSize: '1rem' }}>{step.t}</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Builder Score */}
      <section style={{ padding: '72px 0', background: 'var(--color-bg)' }}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="section-tag" style={{ marginBottom: 12 }}>{d.common.builderScore}</p>
          <h2 className="section-title" style={{ marginBottom: 16 }}>{d.home.builderScoreTitle}</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7, marginBottom: 28 }}>
            {d.home.builderScoreDesc}
          </p>
          <Link href="/builder-score" className="btn-primary">
            {d.common.learnMore} <ArrowRight className="w-4 h-4" style={{ display: 'inline', marginLeft: 6 }} />
          </Link>
        </div>
      </section>

      {/* Platform features */}
      <section style={{ padding: '72px 0', background: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center" style={{ marginBottom: 48 }}>
            <p className="section-tag" style={{ marginBottom: 12 }}>Platform</p>
            <h2 className="section-title">Built for UK construction</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map(f => (
              <Link key={f.title} href={f.href} className="card-raised p-6 block group" style={{ textDecoration: 'none' }}>
                <div style={{ marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, color: 'var(--color-text)', fontSize: '0.9375rem', marginBottom: 8 }} className="group-hover:text-amber">{f.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', lineHeight: 1.6 }}>{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--amber)', position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.1), transparent)' }} />
        <div className="container mx-auto px-4 text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--color-text-inverse)', marginBottom: 16 }}>
            {d.home.ctaTitle}
          </h2>
          <p style={{ color: 'rgba(0,0,0,0.6)', fontSize: '1.0625rem', marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
            {d.home.ctaDesc}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/register" style={{
              background: 'var(--color-text-inverse)', color: 'var(--amber)',
              fontWeight: 700, padding: '14px 28px', borderRadius: 4,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
              fontSize: '1rem',
            }}>
              {d.home.ctaButton} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" style={{
              border: '2px solid rgba(0,0,0,0.2)', color: 'var(--color-text-inverse)',
              fontWeight: 700, padding: '14px 28px', borderRadius: 4,
              textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
              fontSize: '1rem',
            }}>
              {d.nav.contact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
