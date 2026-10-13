import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, description, location, budget, project_type, contact_name, contact_email, contact_phone, start_date } = body

    if (!title || !description || !contact_name || !contact_email) {
      return NextResponse.json({ error: 'Title, description, name and email are required.' }, { status: 400 })
    }

    // Try to persist to Supabase — non-blocking, never returns error to user
    try {
      const { createServerSupabaseClient } = await import('@/lib/supabase/server')
      const supabase = createServerSupabaseClient()
      await supabase.from('job_postings').insert({
        title: String(title).trim(),
        description: String(description).trim(),
        location: location ? String(location).trim() : null,
        budget: budget ? String(budget) : null,
        project_type: project_type ? String(project_type) : null,
        contact_name: String(contact_name).trim(),
        contact_email: String(contact_email).toLowerCase().trim(),
        contact_phone: contact_phone ? String(contact_phone).trim() : null,
        start_date: start_date ? String(start_date) : null,
        status: 'open',
        created_at: new Date().toISOString(),
      })
    } catch (dbErr) {
      console.error('Job posting DB save (non-critical):', dbErr)
    }

    // Fire-and-forget push confirmation
    try {
      const { sendPushNotification, pushNotifications } = await import('@/lib/push')
      await sendPushNotification(pushNotifications.jobPosted(String(project_type || title).trim()))
    } catch {}

    return NextResponse.json({ success: true, message: 'Job posted. Contractors will be in touch.' })
  } catch (err) {
    console.error('Post-a-job route error:', err)
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
