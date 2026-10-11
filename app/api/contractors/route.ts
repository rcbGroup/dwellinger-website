import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
      .from('contractors')
      .select('*')
      .eq('active', true)
      .order('score', { ascending: false })

    if (error) {
      console.error('[/api/contractors] Supabase error:', error.message)
      return NextResponse.json([], { status: 200 })
    }

    return NextResponse.json(data || [])
  } catch (err) {
    console.error('[/api/contractors] Unexpected error:', err)
    return NextResponse.json([], { status: 200 })
  }
}
