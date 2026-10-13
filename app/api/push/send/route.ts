import { NextRequest, NextResponse } from 'next/server'

// Internal API to send push notifications
// POST body: { title, body, url, user_type?, endpoint? }
// If endpoint provided → send to that one subscriber
// If user_type provided → broadcast to all of that type
// If neither → broadcast to all

export async function POST(req: NextRequest) {
  // Require internal secret to prevent abuse
  const authHeader = req.headers.get('x-internal-secret')
  if (authHeader !== process.env.INTERNAL_API_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { title, body, url, icon, user_type, endpoint } = await req.json()

    if (!title || !body) {
      return NextResponse.json({ error: 'title and body required' }, { status: 400 })
    }

    const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
    const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY
    const vapidSubject = process.env.VAPID_SUBJECT || 'mailto:info@dwellinger.co.uk'

    if (!vapidPublicKey || !vapidPrivateKey) {
      console.error('VAPID keys not configured')
      return NextResponse.json({ error: 'Push not configured' }, { status: 500 })
    }

    // Dynamically import web-push
    const webpush = await import('web-push')
    webpush.setVapidDetails(vapidSubject, vapidPublicKey, vapidPrivateKey)

    const payload = JSON.stringify({
      title,
      body,
      url: url || '/',
      icon: icon || '/icons/icon-192x192.png',
      badge: '/icons/icon-72x72.png',
    })

    // Get subscriptions from Supabase
    const { createServerSupabaseClient } = await import('@/lib/supabase/server')
    const supabase = createServerSupabaseClient()

    let query = supabase.from('push_subscriptions').select('endpoint, p256dh, auth')
    if (endpoint) {
      query = query.eq('endpoint', endpoint)
    } else if (user_type) {
      query = query.eq('user_type', user_type)
    }

    const { data: subs, error } = await query.limit(500)
    if (error || !subs?.length) {
      return NextResponse.json({ sent: 0, message: 'No subscribers found' })
    }

    let sent = 0, failed = 0
    const expiredEndpoints: string[] = []

    await Promise.allSettled(
      subs.map(async (sub) => {
        if (!sub.p256dh || !sub.auth) return
        try {
          await webpush.sendNotification(
            { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
            payload,
            { TTL: 86400 } // 24 hours
          )
          sent++
        } catch (err: unknown) {
          failed++
          // 410 Gone = subscription expired, clean up
          if (err && typeof err === 'object' && 'statusCode' in err && (err as { statusCode: number }).statusCode === 410) {
            expiredEndpoints.push(sub.endpoint)
          }
        }
      })
    )

    // Clean up expired subscriptions
    if (expiredEndpoints.length) {
      await supabase.from('push_subscriptions').delete().in('endpoint', expiredEndpoints)
    }

    return NextResponse.json({ sent, failed, cleaned: expiredEndpoints.length })
  } catch (err) {
    console.error('Push send error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
