import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are the Dwellinger AI assistant — a knowledgeable, concise guide for UK property construction and the Dwellinger platform.

You help with:
- Understanding project costs (extensions, loft conversions, refurbishments, structural works)
- How Builder Score™ works (0–1000 rating: verified reviews 35%, CDM 20%, payment history 15%, insurance 15%, dispute resolution 10%, response rate 5%)
- Finding and vetting contractors
- Planning permission basics
- What Project Passport is (document hub for projects)
- How the Dwellinger platform works
- UK construction terminology

Rules:
- Be concise — 2–4 sentences max per response unless detail is specifically requested
- Give real UK cost ranges when asked (e.g. rear extension £35k–£120k, loft £30k–£85k)
- Always caveat costs as estimates that depend on spec, location and site
- Direct users to /tools/cost-calculator for detailed estimates
- Direct users to /search to find contractors
- Direct users to /trust for verification methodology
- Never give structural engineering or planning advice as if it were professional sign-off
- Sound helpful and human, not robotic

Dwellinger context:
- Platform: dwellinger.co.uk
- Builder Score™ is a trust rating for UK contractors
- Project Passport stores all project documents
- Serves homeowners, contractors, property investors, and property professionals`

export async function POST(req: NextRequest) {
  const { messages } = await req.json()

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return new NextResponse('Ask Dwellinger is not configured yet. Please contact support@dwellinger.co.uk for help with your project.', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    })
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.slice(-8), // keep last 8 messages for context
      ],
      stream: true,
      max_tokens: 300,
      temperature: 0.6,
    }),
  })

  if (!response.ok) {
    return new NextResponse('I\'m having trouble connecting right now. Please try again in a moment.', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    })
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
        const lines = chunk.split('\n').filter(l => l.startsWith('data: '))

        for (const line of lines) {
          const data = line.slice(6)
          if (data === '[DONE]') continue
          try {
            const json = JSON.parse(data)
            const text = json.choices?.[0]?.delta?.content
            if (text) controller.enqueue(new TextEncoder().encode(text))
          } catch {
            // ignore parse errors
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
