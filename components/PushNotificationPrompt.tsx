'use client'

import { useEffect, useState } from 'react'

function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

type PermissionState = 'default' | 'granted' | 'denied' | 'unsupported' | 'loading'

interface PushNotificationPromptProps {
  user_type?: 'homeowner' | 'contractor' | 'investor'
  /** If true, shows a minimal icon button instead of the full banner */
  compact?: boolean
  className?: string
}

export default function PushNotificationPrompt({
  user_type = 'homeowner',
  compact = false,
  className = '',
}: PushNotificationPromptProps) {
  const [permission, setPermission] = useState<PermissionState>('loading')
  const [dismissed, setDismissed] = useState(false)
  const [subscribing, setSubscribing] = useState(false)

  useEffect(() => {
    // Check support
    if (!('serviceWorker' in navigator) || !('PushManager' in window) || !('Notification' in window)) {
      setPermission('unsupported')
      return
    }

    // Check if user already dismissed this
    try {
      if (localStorage.getItem('dwell_push_dismissed') === '1') {
        setDismissed(true)
      }
    } catch {}

    setPermission(Notification.permission as PermissionState)
  }, [])

  const subscribe = async () => {
    if (subscribing) return
    setSubscribing(true)

    try {
      const result = await Notification.requestPermission()
      setPermission(result as PermissionState)

      if (result !== 'granted') {
        setSubscribing(false)
        return
      }

      // Get SW registration
      const reg = await navigator.serviceWorker.ready

      // Check if already subscribed
      let sub = await reg.pushManager.getSubscription()

      if (!sub) {
        const vapidKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
        if (!vapidKey) {
          console.warn('VAPID public key not configured')
          setSubscribing(false)
          return
        }
        sub = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(vapidKey),
        })
      }

      // Send to our API
      await fetch('/api/push/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscription: sub.toJSON(), user_type }),
      })
    } catch (err) {
      console.error('Push subscribe error:', err)
    } finally {
      setSubscribing(false)
    }
  }

  const unsubscribe = async () => {
    try {
      const reg = await navigator.serviceWorker.ready
      const sub = await reg.pushManager.getSubscription()
      if (sub) {
        await fetch('/api/push/subscribe', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ endpoint: sub.endpoint }),
        })
        await sub.unsubscribe()
      }
      setPermission('default')
    } catch (err) {
      console.error('Push unsubscribe error:', err)
    }
  }

  const dismiss = () => {
    setDismissed(true)
    try { localStorage.setItem('dwell_push_dismissed', '1') } catch {}
  }

  // Don't render if unsupported, loading, or dismissed
  if (permission === 'loading' || permission === 'unsupported' || dismissed) return null

  // ─── Compact toggle (for settings pages / profile) ────────────────────────
  if (compact) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <span className="text-sm text-gray-300">Push notifications</span>
        <button
          onClick={permission === 'granted' ? unsubscribe : subscribe}
          disabled={subscribing}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
            permission === 'granted' ? 'bg-[#C4773B]' : 'bg-gray-600'
          } disabled:opacity-50`}
          aria-label="Toggle push notifications"
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              permission === 'granted' ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    )
  }

  // ─── Full banner (shown once, bottom of page) ──────────────────────────────
  if (permission === 'denied') return null // Can't request if denied
  if (permission === 'granted') return null // Already subscribed, banner not needed

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm rounded-xl border border-white/10 bg-[#111] p-4 shadow-2xl md:left-auto md:right-6 md:max-w-xs ${className}`}
      role="dialog"
      aria-label="Enable notifications"
    >
      <button
        onClick={dismiss}
        className="absolute right-3 top-3 text-gray-500 hover:text-gray-300 transition-colors"
        aria-label="Dismiss"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      <div className="flex items-start gap-3 pr-4">
        <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#C4773B]/20">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4773B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Stay updated</p>
          <p className="mt-0.5 text-xs text-gray-400 leading-relaxed">
            Get instant alerts when contractors respond to your project or your quote is ready.
          </p>
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <button
          onClick={subscribe}
          disabled={subscribing}
          className="flex-1 rounded-lg bg-[#C4773B] px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {subscribing ? 'Enabling…' : 'Enable notifications'}
        </button>
        <button
          onClick={dismiss}
          className="rounded-lg border border-white/10 px-3 py-2 text-xs text-gray-400 transition-colors hover:text-gray-200"
        >
          Not now
        </button>
      </div>
    </div>
  )
}
