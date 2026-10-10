import type { Metadata } from 'next'

interface PageSeo {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  image?: string
  noindex?: boolean
  publishedTime?: string
  modifiedTime?: string
}

export function pageMetadata(p: PageSeo): Metadata {
  const isArticle = p.type === 'article'
  const images = p.image ? [{ url: p.image, width: 1200, height: 630 }] : undefined
  // Strip trailing " | Dwellinger" suffix if callers included it —
  // the root layout's metadata template already appends it, so leaving it
  // in the page title would produce "Title | Dwellinger | Dwellinger".
  const cleanTitle = p.title.replace(/ \| Dwellinger$/, '')
  return {
    title: cleanTitle,
    description: p.description,
    alternates: { canonical: p.path },
    ...(p.noindex && { robots: { index: false, follow: false } }),
    openGraph: {
      type: isArticle ? 'article' : 'website',
      url: p.path,
      title: cleanTitle,
      description: p.description,
      siteName: 'Dwellinger',
      locale: 'en_GB',
      ...(images && { images }),
      ...(isArticle && {
        publishedTime: p.publishedTime,
        modifiedTime: p.modifiedTime ?? p.publishedTime,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: cleanTitle,
      description: p.description,
      ...(images && { images: images.map(i => i.url) }),
    },
  }
}
