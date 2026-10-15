import { describe, it, expect } from 'vitest'
import { quoteRequestSchema } from '../lib/leads'

describe('quoteRequestSchema honeypot', () => {
  const validBase = {
    name: 'Test User',
    email: 'test@example.com',
    project_type: 'extension',
  }

  it('accepts empty honeypot', () => {
    const result = quoteRequestSchema.safeParse({ ...validBase, _hp: '' })
    expect(result.success).toBe(true)
  })

  it('rejects non-empty honeypot (bot detected)', () => {
    const result = quoteRequestSchema.safeParse({ ...validBase, _hp: 'bot-filled' })
    expect(result.success).toBe(false)
  })

  it('rejects missing required fields', () => {
    const result = quoteRequestSchema.safeParse({ email: 'x@y.com' })
    expect(result.success).toBe(false)
  })

  it('rejects names over 120 chars', () => {
    const result = quoteRequestSchema.safeParse({ ...validBase, name: 'a'.repeat(121) })
    expect(result.success).toBe(false)
  })

  it('rejects emails over 254 chars', () => {
    const result = quoteRequestSchema.safeParse({ ...validBase, email: 'a'.repeat(250) + '@b.com' })
    expect(result.success).toBe(false)
  })
})
