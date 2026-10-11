import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export const runtime = 'nodejs'

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const supabase = createServerSupabaseClient()
    const { data, error } = await supabase
      .from('contractors')
      .select('*')
      .eq('slug', params.slug)
      .eq('active', true)
      .maybeSingle()

    if (error) {
      console.error(`[/api/contractors/${params.slug}] Supabase error:`, error.message)
      return NextResponse.json({ error: 'Server error' }, { status: 500 })
    }

    if (!data) {
      return NextResponse.json({ error: 'Contractor not found' }, { status: 404 })
    }

    return NextResponse.json(data)
  } catch (err) {
    console.error(`[/api/contractors/${params.slug}] Unexpected error:`, err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
