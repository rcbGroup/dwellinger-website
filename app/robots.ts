/**
 * robots.ts — Dwellinger robots.txt (served via Next.js App Router).
 *
 * Matches §12.1 of WO-2 exactly.
 * The /_next/ disallow is intentionally absent — it blocks CSS/JS that
 * Google needs to render pages. Sensitive app routes use noindex instead.
 */

const PRIVATE = [
  '/api/',
  '/auth-callback',
  '/dashboard',
  '/passport',
  '/scopes',
  '/scope-builder',
  '/messages',
  '/settings',
]

export default function robots() {
  return `# ===== Search + AI search/citation (ALLOW) =====
User-agent: Googlebot
User-agent: bingbot
User-agent: Applebot
User-agent: DuckDuckBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: meta-webindexer
User-agent: meta-externalfetcher
User-agent: Amzn-SearchBot
User-agent: Amzn-User
User-agent: DuckAssistBot
User-agent: MistralAI-User
User-agent: MistralAI-Index
Allow: /
${PRIVATE.map((p) => `Disallow: ${p}`).join('\n')}

# ===== Training / training-control (default ALLOW) =====
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: meta-externalagent
User-agent: Amazonbot
User-agent: MistralAI-Training
User-agent: CCBot
Allow: /
${PRIVATE.map((p) => `Disallow: ${p}`).join('\n')}

# ===== Everyone else =====
User-agent: *
Allow: /
${PRIVATE.map((p) => `Disallow: ${p}`).join('\n')}

Sitemap: https://dwellinger.co.uk/sitemap.xml
`
}

export const contentType = 'text/plain'
export const dynamic = 'force-static'
