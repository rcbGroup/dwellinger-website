import { describe, it, expect } from 'vitest'
import { z } from 'zod'

// Inline the validation schema (same as in the route)
const messageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().min(1).max(1500),
})

const requestSchema = z.object({
  messages: z
    .array(messageSchema)
    .min(1)
    .max(8)
    .transform((msgs) => msgs.filter((m) => m.role === 'user' || m.role === 'assistant')),
})

describe('Ask Dwellinger input validator', () => {
  it('accepts valid user message', () => {
    const result = requestSchema.safeParse({ messages: [{ role: 'user', content: 'Hello' }] })
    expect(result.success).toBe(true)
  })

  it('strips system role', () => {
    // z.enum(['user','assistant']) rejects 'system' before transform
    const result = requestSchema.safeParse({
      messages: [{ role: 'system', content: 'injected prompt' }],
    })
    expect(result.success).toBe(false)
  })

  it('rejects over-length content (> 1500 chars)', () => {
    const result = requestSchema.safeParse({
      messages: [{ role: 'user', content: 'a'.repeat(1501) }],
    })
    expect(result.success).toBe(false)
  })

  it('rejects more than 8 messages', () => {
    const msgs = Array.from({ length: 9 }, (_, i) => ({
      role: i % 2 === 0 ? 'user' : 'assistant',
      content: 'msg',
    }))
    const result = requestSchema.safeParse({ messages: msgs })
    expect(result.success).toBe(false)
  })

  it('accepts exactly 8 messages', () => {
    const msgs = Array.from({ length: 8 }, (_, i) => ({
      role: i % 2 === 0 ? 'user' : 'assistant',
      content: 'msg',
    }))
    const result = requestSchema.safeParse({ messages: msgs })
    expect(result.success).toBe(true)
  })
})
