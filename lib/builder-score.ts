/**
 * Builder Score™ computation — pure function, no side effects.
 *
 * Status: implemented but NOT YET USED — no contractor has been scored.
 * A DPIA must be completed and contractor consent obtained before scoring begins.
 *
 * @see content/builder-score-method.ts for the published methodology.
 */

import { BUILDER_SCORE_METHOD } from '@/content/builder-score-method'

/** Raw evidence inputs for each component (0–1 normalised, or null if missing) */
export interface BuilderScoreInputs {
  /** 0–1: fraction of maximum possible review score */
  reviewScore: number | null
  /** 0–1: CDM compliance evidence quality */
  cdmScore: number | null
  /** 0–1: payment behaviour (1 = excellent, 0 = poor) */
  paymentScore: number | null
  /** 0–1: insurance and accreditation evidence quality */
  insuranceScore: number | null
  /** 0–1: dispute resolution record (1 = no disputes or resolved well) */
  disputeScore: number | null
  /** 0–1: response rate and platform activity */
  responseScore: number | null
}

export interface BuilderScoreComponentResult {
  name: string
  weight: number
  maxPoints: number
  evidencePresent: boolean
  /** Points awarded (0 if evidence missing) */
  points: number
}

export type BuilderScoreTier = 'Platinum' | 'Gold' | 'Silver' | 'Bronze'

export type BuilderScoreResult =
  | {
      status: 'scored'
      total: number
      tier: BuilderScoreTier
      components: BuilderScoreComponentResult[]
      coverage: number
      methodVersion: string
    }
  | {
      status: 'insufficient_evidence'
      coverage: number
      components: BuilderScoreComponentResult[]
      methodVersion: string
    }

const WEIGHTS = BUILDER_SCORE_METHOD.components.map((c) => ({
  name: c.name,
  weight: c.weight,
  points: c.points,
}))

const COVERAGE_THRESHOLD = BUILDER_SCORE_METHOD.coverageThreshold

function getTier(total: number): BuilderScoreTier {
  if (total >= 900) return 'Platinum'
  if (total >= 700) return 'Gold'
  if (total >= 500) return 'Silver'
  return 'Bronze'
}

/**
 * Compute a Builder Score from normalised component inputs.
 *
 * Missing evidence (null) is excluded from the score entirely — it does NOT
 * count as zero. If total evidence coverage (by weight) is below the threshold,
 * the result is `insufficient_evidence`, not a Bronze score.
 */
export function computeBuilderScore(inputs: BuilderScoreInputs): BuilderScoreResult {
  const rawInputs: (number | null)[] = [
    inputs.reviewScore,
    inputs.cdmScore,
    inputs.paymentScore,
    inputs.insuranceScore,
    inputs.disputeScore,
    inputs.responseScore,
  ]

  const components: BuilderScoreComponentResult[] = WEIGHTS.map((w, i) => {
    const raw = rawInputs[i]
    const evidencePresent = raw !== null
    return {
      name: w.name,
      weight: w.weight,
      maxPoints: w.points,
      evidencePresent,
      points: evidencePresent ? Math.round(raw! * w.points) : 0,
    }
  })

  // Coverage = fraction of total weight for which evidence is present
  const presentWeight = components.reduce(
    (sum, c) => sum + (c.evidencePresent ? c.weight : 0),
    0
  )
  const coverage = presentWeight // already 0–1 (weights sum to 1.0)

  if (coverage < COVERAGE_THRESHOLD) {
    return {
      status: 'insufficient_evidence',
      coverage,
      components,
      methodVersion: BUILDER_SCORE_METHOD.version,
    }
  }

  // Scale: sum present points, then scale to 1000 proportional to evidence present
  const presentPoints = components.reduce(
    (sum, c) => sum + (c.evidencePresent ? c.points : 0),
    0
  )
  const maxPossible = components.reduce(
    (sum, c) => sum + (c.evidencePresent ? c.maxPoints : 0),
    0
  )
  const total = maxPossible > 0 ? Math.round((presentPoints / maxPossible) * 1000) : 0

  return {
    status: 'scored',
    total,
    tier: getTier(total),
    components,
    coverage,
    methodVersion: BUILDER_SCORE_METHOD.version,
  }
}
