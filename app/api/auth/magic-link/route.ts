import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const emailLower = email.toLowerCase().trim()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLower)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    const { error } = await supabase.auth.admin.generateLink({
      type: 'magiclink',
      email: emailLower,
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dwellinger.co.uk'}/auth-callback`,
      },
    })

    if (error) {
      console.error('Magic link error:', error)
      return NextResponse.json({ error: 'Failed to send magic link. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: 'Magic link sent — check your inbox.' })
  } catch (err) {
    console.error('Magic link route error:', err)
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
