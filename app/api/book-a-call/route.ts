import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, preferred_time, project_type, notes } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    const { error } = await supabase.from('call_bookings').insert({
      name: String(name).trim(),
      email: String(email).toLowerCase().trim(),
      phone: phone ? String(phone).trim() : null,
      preferred_time: preferred_time ? String(preferred_time) : null,
      project_type: project_type ? String(project_type) : null,
      notes: notes ? String(notes).trim() : null,
      status: 'pending',
      created_at: new Date().toISOString(),
    })

    if (error) {
      console.error('Book-a-call insert error:', error)
    }

    return NextResponse.json({ success: true, message: 'Call request received. We\'ll confirm your slot shortly.' })
  } catch (err) {
    console.error('Book-a-call route error:', err)
    return NextResponse.json({ error: 'Server error. Please try again or call us directly.' }, { status: 500 })
  }
}
