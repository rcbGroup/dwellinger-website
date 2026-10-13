import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, message, subject } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required.' }, { status: 400 })
    }

    // Try to persist to Supabase — non-blocking, never returns error to user
    try {
      const { createServerSupabaseClient } = await import('@/lib/supabase/server')
      const supabase = createServerSupabaseClient()
      await supabase.from('contact_submissions').insert({
        name: String(name).trim(),
        email: String(email).toLowerCase().trim(),
        phone: phone ? String(phone).trim() : null,
        subject: subject ? String(subject).trim() : 'General enquiry',
        message: String(message).trim(),
        source: 'contact_form',
        created_at: new Date().toISOString(),
      })
    } catch (dbErr) {
      console.error('Contact DB save (non-critical):', dbErr)
    }

    // Fire-and-forget push notification to the submitter (if subscribed)
    try {
      const { sendPushNotification, pushNotifications } = await import('@/lib/push')
      await sendPushNotification(pushNotifications.contactReceived(String(name).trim()))
    } catch {}

    return NextResponse.json({ success: true, message: "Message received. We'll be in touch shortly." })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Server error. Please try again or call us.' }, { status: 500 })
  }
}
