import { NextResponse } from 'next/server'

const SYSTEM = `You are AskDwellinger, an AI assistant for Dwellinger — the UK property and construction intelligence platform. You help homeowners and developers understand construction costs, find verified contractors, and navigate their building projects. You are knowledgeable about UK construction, London pricing, planning permission, loft conversions, extensions, refurbishments, and Builder Score ratings. Be concise, helpful, and honest. When discussing costs, use UK market ranges. If you don't know something specific, say so and suggest the user use the estimating service or browse the contractor directory. Never make up contractor names or scores.`

export async function POST(req: Request) {
  const { message, history = [] } = await req.json()

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({
      reply: 'The AI assistant is being configured and will be live shortly. In the meantime, try our instant ballpark calculator at /services/estimating or browse the contractor directory.',
    })
  }

  try {
    const messages = [
      { role: 'system', content: SYSTEM },
      ...history.slice(-8),
      { role: 'user', content: message },
    ]

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages,
        max_tokens: 420,
        temperature: 0.65,
      }),
    })

    const data = await res.json()
    if (!res.ok) throw new Error(data.error?.message || 'OpenAI error')
    return NextResponse.json({ reply: data.choices[0].message.content })
  } catch (err) {
    console.error('AskDwellinger API error:', err)
    return NextResponse.json({ reply: 'Something went wrong. Please try again or contact us directly.' })
  }
}
