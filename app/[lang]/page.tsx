import { getDictionary, LOCALES, LOCALE_NAMES, type Locale } from '@/lib/i18n/dictionaries'
import { pageMetadata } from '@/lib/seo'
import { notFound } from 'next/navigation'

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

  return (
    <main className="min-h-screen bg-white">
      {/* Language switcher bar */}
      <div className="bg-gray-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-end gap-3 flex-wrap">
          <a href="/" className="text-gray-400 hover:text-white transition-colors">EN</a>
          {SUPPORTED_LANGS.map(l => (
            <a
              key={l}
              href={`/${l}`}
              className={`hover:text-white transition-colors ${l === lang ? 'text-white font-semibold' : 'text-gray-400'}`}
            >
              {LOCALE_NAMES[l]}
            </a>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            {d.common.trialBadge}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {d.home.heroTitle}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {d.home.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/search"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              {d.home.heroCta} →
            </a>
            <a
              href="/builder-score"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
            >
              {d.home.heroCtaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">{d.home.howItWorksTitle}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: '1', title: d.home.step1Title, desc: d.home.step1Desc },
              { num: '2', title: d.home.step2Title, desc: d.home.step2Desc },
              { num: '3', title: d.home.step3Title, desc: d.home.step3Desc },
            ].map(step => (
              <div key={step.num} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Builder Score explainer */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{d.home.builderScoreTitle}</h2>
          <p className="text-lg text-gray-600 mb-6">{d.home.builderScoreDesc}</p>
          <a href="/builder-score" className="text-blue-600 hover:underline font-medium">
            {d.common.learnMore} →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{d.home.ctaTitle}</h2>
          <p className="text-gray-400 mb-8">{d.home.ctaDesc}</p>
          <a
            href="/search"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            {d.home.ctaButton} →
          </a>
        </div>
      </section>

      {/* Footer legal */}
      <footer className="bg-gray-950 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-500 text-sm">{d.footer.copyright}</p>
          <p className="text-gray-600 text-xs mt-1">{d.footer.legalLine}</p>
        </div>
      </footer>
    </main>
  )
}
