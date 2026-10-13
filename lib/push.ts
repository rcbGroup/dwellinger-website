// Server-side utility to send push notifications
// Call this from any API route after a key event

interface PushPayload {
  title: string
  body: string
  url?: string
  icon?: string
  user_type?: 'homeowner' | 'contractor' | 'investor'
  endpoint?: string // target specific subscriber
}

export async function sendPushNotification(payload: PushPayload): Promise<void> {
  const secret = process.env.INTERNAL_API_SECRET
  if (!secret) return // silently skip if not configured

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dwellinger.co.uk'

  try {
    await fetch(`${baseUrl}/api/push/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-internal-secret': secret,
      },
      body: JSON.stringify(payload),
    })
  } catch (err) {
    console.error('Push notification send failed (non-critical):', err)
  }
}

// Pre-built notification templates
export const pushNotifications = {
  quoteReceived: (name: string) => ({
    title: 'Your quote request received ✓',
    body: `Hi ${name}, we've received your project details and will confirm within 2 hours.`,
    url: '/services/estimating',
  }),

  jobPosted: (projectType: string) => ({
    title: 'Job posted successfully',
    body: `Your ${projectType} job is live. Verified contractors will be in touch within 24 hours.`,
    url: '/',
  }),

  callBooked: (callType: string, time: string) => ({
    title: 'Call confirmed ✓',
    body: `Your ${callType} at ${time} is booked. We'll send a reminder closer to the time.`,
    url: '/book-a-call',
  }),

  contactReceived: (name: string) => ({
    title: "Message received — we'll be in touch",
    body: `Thanks ${name}. A member of the Dwellinger team will respond within 24 hours.`,
    url: '/contact',
  }),

  contractorVerified: () => ({
    title: 'Builder Score™ updated',
    body: 'Your contractor profile has been verified. Your Builder Score is now live.',
    url: '/dashboard',
    user_type: 'contractor' as const,
  }),

  newJobMatch: (projectType: string, location: string) => ({
    title: `New ${projectType} job in ${location}`,
    body: 'A homeowner just posted a job that matches your profile. View it now.',
    url: '/dashboard',
    user_type: 'contractor' as const,
  }),
}
