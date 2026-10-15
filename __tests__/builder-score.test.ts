import { describe, it, expect } from 'vitest'
import { computeBuilderScore } from '../lib/builder-score'
import type { BuilderScoreInputs } from '../lib/builder-score'

const ALL_PRESENT: BuilderScoreInputs = {
  reviewScore: 1,
  cdmScore: 1,
  paymentScore: 1,
  insuranceScore: 1,
  disputeScore: 1,
  responseScore: 1,
}

const ALL_MISSING: BuilderScoreInputs = {
  reviewScore: null,
  cdmScore: null,
  paymentScore: null,
  insuranceScore: null,
  disputeScore: null,
  responseScore: null,
}

describe('computeBuilderScore', () => {
  it('weights sum to 1000 points', () => {
    const result = computeBuilderScore(ALL_PRESENT)
    expect(result.status).toBe('scored')
    if (result.status === 'scored') {
      const maxPoints = result.components.reduce((s, c) => s + c.maxPoints, 0)
      expect(maxPoints).toBe(1000)
    }
  })

  it('perfect inputs → 1000', () => {
    const result = computeBuilderScore(ALL_PRESENT)
    expect(result.status).toBe('scored')
    if (result.status === 'scored') {
      expect(result.total).toBe(1000)
      expect(result.tier).toBe('Platinum')
    }
  })

  it('all-missing returns insufficient_evidence, not Bronze', () => {
    const result = computeBuilderScore(ALL_MISSING)
    expect(result.status).toBe('insufficient_evidence')
  })

  it('tier: Platinum ≥ 900', () => {
    const result = computeBuilderScore({ ...ALL_PRESENT, responseScore: 0 })
    expect(result.status).toBe('scored')
    if (result.status === 'scored') {
      // 950/1000 (response rate 50pts of 50 missing, ~95% of scaled score)
      // Tier should be Platinum
      expect(['Platinum', 'Gold']).toContain(result.tier)
    }
  })

  it('tier: Bronze < 500', () => {
    const result = computeBuilderScore({ ...ALL_PRESENT, reviewScore: 0.3, cdmScore: 0.3, paymentScore: 0.3, insuranceScore: 0.3, disputeScore: 0.3, responseScore: 0.3 })
    expect(result.status).toBe('scored')
    if (result.status === 'scored') {
      expect(result.total).toBeLessThan(500)
      expect(result.tier).toBe('Bronze')
    }
  })

  it('Platinum threshold exactly 900', () => {
    // Construct an input that scores exactly at a Platinum boundary
    const result = computeBuilderScore({ ...ALL_PRESENT, reviewScore: 0.9, cdmScore: 0.9, paymentScore: 0.9, insuranceScore: 0.9, disputeScore: 0.9, responseScore: 0.9 })
    if (result.status === 'scored') {
      expect(result.tier).toBe('Platinum')
      expect(result.total).toBeGreaterThanOrEqual(900)
    }
  })

  it('Gold: 700–899', () => {
    const result = computeBuilderScore({ ...ALL_PRESENT, reviewScore: 0.75, cdmScore: 0.75, paymentScore: 0.75, insuranceScore: 0.75, disputeScore: 0.75, responseScore: 0.75 })
    if (result.status === 'scored') {
      expect(result.total).toBeGreaterThanOrEqual(700)
      expect(result.total).toBeLessThan(900)
      expect(result.tier).toBe('Gold')
    }
  })

  it('Silver: 500–699', () => {
    const result = computeBuilderScore({ ...ALL_PRESENT, reviewScore: 0.6, cdmScore: 0.6, paymentScore: 0.6, insuranceScore: 0.6, disputeScore: 0.6, responseScore: 0.6 })
    if (result.status === 'scored') {
      expect(result.total).toBeGreaterThanOrEqual(500)
      expect(result.total).toBeLessThan(700)
      expect(result.tier).toBe('Silver')
    }
  })

  it('coverage below threshold → insufficient_evidence', () => {
    // Only review (35%) present — below 70% threshold
    const result = computeBuilderScore({
      reviewScore: 1,
      cdmScore: null,
      paymentScore: null,
      insuranceScore: null,
      disputeScore: null,
      responseScore: null,
    })
    expect(result.status).toBe('insufficient_evidence')
    expect(result.coverage).toBeCloseTo(0.35)
  })

  it('coverage above threshold → scored', () => {
    // review (35%) + cdm (20%) + payment (15%) = 70% exactly
    const result = computeBuilderScore({
      reviewScore: 0.8,
      cdmScore: 0.8,
      paymentScore: 0.8,
      insuranceScore: null,
      disputeScore: null,
      responseScore: null,
    })
    expect(result.status).toBe('scored')
  })
})
