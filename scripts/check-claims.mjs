#!/usr/bin/env node
/**
 * check-claims.mjs — scan source files for banned claims.
 * Run: node scripts/check-claims.mjs
 * Exits non-zero if any banned pattern is found outside the allowlist.
 */

import { readFileSync, readdirSync, statSync } from 'fs'
import { join, relative } from 'path'

const ROOT = new URL('..', import.meta.url).pathname

// Load allowlist
let allowlist = []
try {
  allowlist = JSON.parse(readFileSync(join(ROOT, 'scripts/claims-allowlist.json'), 'utf8'))
} catch {
  // allowlist is optional
}

// Directories and file types to scan
const SCAN_DIRS = ['app', 'components', 'lib', 'content', 'public', 'supabase']
const SCAN_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.mjs', '.md', '.txt', '.json', '.sql'])
const SKIP_DIRS = new Set(['node_modules', '.next', '.git'])

// Banned patterns — case-insensitive unless noted
const BANNED = [
  // Trade marks and legal status
  { pattern: /registered\s+trademark/i, desc: 'False "registered trademark" claim' },
  { pattern: /®/, desc: 'Registered trade mark symbol ® (not registered)' },
  { pattern: /trademarked/i, desc: 'False "Trademarked" claim' },
  { pattern: /legally\s+protected/i, desc: 'False "Legally protected" claim' },

  // Competitor disparagement
  { pattern: /anyone\s+can\s+buy\s+reviews\s+on\s+checkatrade/i, desc: 'Competitor disparagement (CAP 3.42)' },
  { pattern: /trustpilot,?\s+companies\s+house,?\s+and\s+checkatrade\s+combined/i, desc: 'False comparison claim' },
  { pattern: /checkatrade\s+lists/i, desc: 'Competitor disparagement (CAP 3.42)' },

  // False legal/outcome claims
  { pattern: /no\s+enforcement\s+risk/i, desc: 'False legal guarantee' },
  { pattern: /guaranteed\s+outcome/i, desc: 'False outcome guarantee' },
  { pattern: /fixed\s+fee\s+from\s+day\s+one/i, desc: 'Unsubstantiated fixed-fee claim' },

  // Unverified verification claims
  { pattern: /independently\s+verified/i, desc: 'Unverified "independently verified" claim' },
  { pattern: /verified,?\s+audited/i, desc: 'Unverified "verified, audited" claim' },

  // Payment/Stripe
  { pattern: /secure\s+payments?\s+via\s+stripe/i, desc: 'Stripe not implemented' },
  { pattern: /via\s+stripe/i, desc: 'Stripe not implemented' },

  // False counts
  { pattern: /1,972/i, desc: 'False article count (1,972)' },
  { pattern: /200\+\s+features/i, desc: 'False feature count (200+)' },
  { pattern: /4,200\+/i, desc: 'False contractor count' },
  { pattern: /1,800\+/i, desc: 'False contractor count' },
  { pattern: /2,100\+/i, desc: 'False contractor count' },
  { pattern: /900\+\s+contractors/i, desc: 'False contractor count' },
  { pattern: /1,100\+/i, desc: 'False contractor count' },
  { pattern: /750\+\s+contractors/i, desc: 'False contractor count' },
  { pattern: /1,050\+/i, desc: 'False contractor count' },
  { pattern: /950\+\s+contractors/i, desc: 'False contractor count' },

  // RCB identity misuse
  { pattern: /A2Z/i, desc: 'RCB trading name A2Z not to be used on Dwellinger' },
  { pattern: /RCB\s+Design\s+&\s+Build/i, desc: 'RCB "Design & Build" identity not to be used' },

  // Entity details (gated behind PUBLISH_ENTITY)
  { pattern: /280.?282\s+Church\s+Road/i, desc: 'Birmingham address (not registered office — remove)' },
  { pattern: /B26\s+3YH/i, desc: 'Birmingham postcode (not registered office — remove)' },
  { pattern: /16871183/, desc: 'Company number must be behind PUBLISH_ENTITY flag' },

  // RCB phone number
  { pattern: /7359\s*872\s*594/, desc: 'RCB phone number on Dwellinger site' },
  { pattern: /7359872594/, desc: 'RCB phone number on Dwellinger site' },

  // False counters / scores
  { pattern: /(?<![0-9])0-day/, desc: 'Crawlers see "0-day" — counter not server-rendered' },
  { pattern: /five\s+tiers/i, desc: 'Should be "Four packages" (estimating has 4 tiers)' },

  // Trial and pricing claims
  { pattern: /14.?day\s+free\s+trial/i, desc: 'No trial exists' },
  { pattern: /free\s+trial/i, desc: 'No trial exists' },
  { pattern: /no\s+card\s+required/i, desc: 'No trial exists — remove' },
  { pattern: /free\s+forever/i, desc: 'No free tier exists' },

  // QS claims (until §8 #8)
  { pattern: /QS.?reviewed/i, desc: 'No named QS reviewer confirmed (§8 #8)' },
  { pattern: /qualified\s+surveyor\s+checks/i, desc: 'No named QS reviewer confirmed (§8 #8)' },

  // Verification badges
  { pattern: /verified\s+principal\s+contractor/i, desc: 'No such verification exists' },
  { pattern: /BUSINESS\s+VERIFIED/i, desc: 'No verification exists yet' },

  // Named fake people
  { pattern: /James\s+Hargrove/i, desc: 'Fake/unconfirmed author — remove until §8 #9 confirms' },

  // Fake AI agents
  { pattern: /62\s+AI\s+agents/i, desc: 'False AI agent count' },
  { pattern: /Dwell\s+Agents/i, desc: 'Planned feature — do not present as live' },
  { pattern: /Live\s+UK\s+planning\s+data/i, desc: 'Planning data is sample/mock — not live' },

  // False response-time promises
  { pattern: /verified\s+contractors?\s+will\s+be\s+in\s+touch/i, desc: 'False response-time promise' },
  { pattern: /contractors?\s+will\s+be\s+in\s+touch/i, desc: 'False response-time promise' },
  { pattern: /within\s+2\s+hours/i, desc: 'Undeliverable 2-hour promise' },
  { pattern: /will\s+be\s+in\s+touch\s+within\s+24\s+hours/i, desc: 'Unverifiable 24-hour promise' },

  // "Dwellinger Ltd" outside allowed files
  { pattern: /Dwellinger\s+Ltd/i, desc: '"Dwellinger Ltd" must not appear outside entity constants and terms (§8 #1)' },

  // Dwellinger-as-contractor
  { pattern: /we\s+deliver/i, desc: 'Dwellinger is a platform, not a contractor' },
  { pattern: /what\s+we\s+build/i, desc: 'Dwellinger is a platform, not a contractor' },
  { pattern: /we\s+manage\s+every/i, desc: 'Dwellinger is a platform, not a contractor' },
  { pattern: /how\s+we\s+manage\s+your\s+project/i, desc: 'Dwellinger is a platform, not a contractor' },
  { pattern: /our\s+design\s+&\s+build\s+process/i, desc: 'Dwellinger is a platform, not a contractor' },
  { pattern: /every\s+contractor\s+on\s+(the\s+)?dwellinger/i, desc: 'No contractors onboarded yet' },
  { pattern: /when\s+dwellinger\s+is\s+your\s+principal\s+contractor/i, desc: 'Dwellinger is not a principal contractor' },
]

// Collect files
function collectFiles(dir) {
  const results = []
  try {
    for (const entry of readdirSync(dir)) {
      if (SKIP_DIRS.has(entry)) continue
      const fullPath = join(dir, entry)
      const stat = statSync(fullPath)
      if (stat.isDirectory()) {
        results.push(...collectFiles(fullPath))
      } else {
        const ext = entry.slice(entry.lastIndexOf('.'))
        if (SCAN_EXTENSIONS.has(ext)) results.push(fullPath)
      }
    }
  } catch {
    // skip unreadable dirs
  }
  return results
}

const files = SCAN_DIRS.flatMap((d) => collectFiles(join(ROOT, d)))

let failures = 0

for (const file of files) {
  const rel = relative(ROOT, file).replace(/\\/g, '/')
  let content
  try {
    content = readFileSync(file, 'utf8')
  } catch {
    continue
  }

  for (const ban of BANNED) {
    if (!ban.pattern.test(content)) continue

    // Check allowlist
    const allowed = allowlist.some(
      (a) =>
        (rel.endsWith(a.file) || rel === a.file) &&
        content.includes(a.pattern)
    )
    if (allowed) continue

    // Find line number
    const lines = content.split('\n')
    for (let i = 0; i < lines.length; i++) {
      if (ban.pattern.test(lines[i])) {
        console.error(`FAIL  ${rel}:${i + 1}  — ${ban.desc}`)
        console.error(`      > ${lines[i].trim().slice(0, 120)}`)
        failures++
        break
      }
    }
  }
}

if (failures > 0) {
  console.error(`\n${failures} claim violation(s) found. Fix them or add to scripts/claims-allowlist.json.\n`)
  process.exit(1)
} else {
  console.log('check-claims: all clear.')
  process.exit(0)
}
