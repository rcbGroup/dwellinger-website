import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { token_hash, type } = body

    if (!token_hash || !type) {
      return NextResponse.json({ error: 'Missing token_hash or type' }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()

    const { data, error } = await supabase.auth.verifyOtp({
      token_hash,
      type: type as 'email' | 'magiclink',
    })

    if (error || !data.session) {
      console.error('OTP verify error:', error)
      return NextResponse.json({ error: 'Invalid or expired link. Please request a new one.' }, { status: 401 })
    }

    return NextResponse.json({
      success: true,
      user: {
        id: data.user?.id,
        email: data.user?.email,
      },
    })
  } catch (err) {
    console.error('Confirm route error:', err)
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
