import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message, subject } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    const { error } = await supabase.from('contact_submissions').insert({
      name: String(name).trim(),
      email: String(email).toLowerCase().trim(),
      phone: phone ? String(phone).trim() : null,
      subject: subject ? String(subject).trim() : 'General enquiry',
      message: String(message).trim(),
      source: 'contact_form',
      created_at: new Date().toISOString(),
    })

    if (error) {
      console.error('Contact insert error:', error)
      // Still return success to user — don't expose DB errors
    }

    return NextResponse.json({ success: true, message: 'Message received. We\'ll be in touch shortly.' })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Server error. Please try again or call us.' }, { status: 500 })
  }
}
