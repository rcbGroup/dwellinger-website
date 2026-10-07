import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, project_type, budget_range, description, postcode, timeline } = body

    if (!name || !email || !project_type) {
      return NextResponse.json({ error: 'Name, email and project type are required.' }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    const { error } = await supabase.from('quote_requests').insert({
      name: String(name).trim(),
      email: String(email).toLowerCase().trim(),
      phone: phone ? String(phone).trim() : null,
      project_type: String(project_type).trim(),
      budget_range: budget_range ? String(budget_range) : null,
      description: description ? String(description).trim() : null,
      postcode: postcode ? String(postcode).toUpperCase().trim() : null,
      timeline: timeline ? String(timeline) : null,
      status: 'new',
      source: 'website',
      created_at: new Date().toISOString(),
    })

    if (error) {
      console.error('Quote insert error:', error)
    }

    return NextResponse.json({ success: true, message: 'Quote request received. We\'ll be in touch within 24 hours.' })
  } catch (err) {
    console.error('Quote route error:', err)
    return NextResponse.json({ error: 'Server error. Please try again or call us.' }, { status: 500 })
  }
}
