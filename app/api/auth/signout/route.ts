import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase/client'

export async function POST() {
  try {
    await supabase.auth.signOut()
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Sign out error:', err)
    return NextResponse.json({ error: 'Sign out failed' }, { status: 500 })
  }
}
