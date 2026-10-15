import { NextRequest, NextResponse } from 'next/server'
import { BUILDER_SCORE_METHOD } from '@/content/builder-score-method'
import { FACTS } from '@/content/facts'
import { z } from 'zod'

// ---------------------------------------------------------------------------
// Input validation
// ---------------------------------------------------------------------------

const messageSchema = z.object({
  role: z.enum(['user', 'assistant']),
  content: z.string().min(1).max(1500),
})

const requestSchema = z.object({
  messages: z
    .array(messageSchema)
    .min(1)
    .max(8)
    .transform((msgs) =>
      // Strip any role that is not user or assistant (defence against injection)
      msgs.filter((m) => m.role === 'user' || m.role === 'assistant')
    ),
})

// ---------------------------------------------------------------------------
// System prompt — built from content sources
// ---------------------------------------------------------------------------

function buildSystemPrompt(): string {
  const componentList = BUILDER_SCORE_METHOD.components
    .map((c) => `- ${c.name}: ${Math.round(c.weight * 100)}% (${c.points} points)`)
    .join('\n')

  return `You are the Dwellinger AI assistant — a knowledgeable, concise guide for UK property construction.

About Dwellinger:
- ${FACTS.descriptor}
- Dwellinger is a platform, not a contractor. It does not manage or deliver projects.
- There is no live contractor directory yet. No contractors are onboarded.
- Builder Score™ (${BUILDER_SCORE_METHOD.version}): ${BUILDER_SCORE_METHOD.status}
- Builder Score components (0–1000 scale):
${componentList}
- Estimating packages: Outline £95, Standard £150, Full £250, Premium £350 — manual service; request form, then payment link sent by email within 1 working day.
- Calculators are free. There is no subscription trial.
- Login and contractor accounts are not yet available.
- Contact: ${FACTS.email}

Rules:
- Be concise — 2–4 sentences max unless detail is specifically requested.
- Give UK cost ranges when asked, and always caveat them as estimates.
- Direct users to /tools for calculators, /services/estimating to request an estimate, and ${FACTS.email} for help.
- Never recommend rcbGroup or any named contractor.
- Never state that any contractor has a Builder Score — none have been scored.
- If asked who runs Dwellinger or who owns it, say: "Dwellinger is operated by its team. For ownership details see /about."
- If asked about prices or features not listed above, say you don't have that information.
- Never give structural engineering or planning advice as professional sign-off.
- Use info@dwellinger.co.uk, not support@dwellinger.co.uk.`
}

// ---------------------------------------------------------------------------
// Route handler
// ---------------------------------------------------------------------------

export async function POST(req: NextRequest) {
  // Parse and validate input
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = requestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid messages format.' }, { status: 400 })
  }

  const { messages } = parsed.data

  if (messages.length === 0) {
    return NextResponse.json({ error: 'No valid messages.' }, { status: 400 })
  }

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return new NextResponse(
      'Ask Dwellinger is not available right now. Please email info@dwellinger.co.uk for help with your project.',
      { status: 200, headers: { 'Content-Type': 'text/plain' } }
    )
  }

  let response: Response
  try {
    response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: buildSystemPrompt() },
          ...messages,
        ],
        stream: true,
        max_tokens: 300,
        temperature: 0.5,
      }),
    })
  } catch {
    return NextResponse.json({ error: 'Could not reach AI service.' }, { status: 503 })
  }

  if (!response.ok) {
    return NextResponse.json(
      { error: 'AI service error. Please try again in a moment.' },
      { status: 503 }
    )
  }

  const stream = new ReadableStream({
    async start(controller) {
      const reader = response.body?.getReader()
      const decoder = new TextDecoder()

      if (!reader) {
        controller.close()
        return
      }

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split('\n').filter((l) => l.startsWith('data: '))

        for (const line of lines) {
          const data = line.slice(6)
          if (data === '[DONE]') continue
          try {
            const json = JSON.parse(data)
            const text = json.choices?.[0]?.delta?.content
            if (text) controller.enqueue(new TextEncoder().encode(text))
          } catch {
            // ignore SSE parse errors
          }
        }
      }

      controller.close()
    },
  })

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
    },
  })
}
