import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { title, description, location, budget, project_type, contact_name, contact_email, contact_phone, start_date } = body

    if (!title || !description || !contact_name || !contact_email) {
      return NextResponse.json({ error: 'Title, description, name and email are required.' }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    const { error } = await supabase.from('job_postings').insert({
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

    if (error) {
      console.error('Job posting insert error:', error)
    }

    return NextResponse.json({ success: true, message: 'Job posted. Contractors will be in touch.' })
  } catch (err) {
    console.error('Post-a-job route error:', err)
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
