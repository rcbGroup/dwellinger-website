'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase/client'
import Link from 'next/link'

export default function AuthCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'verifying' | 'success' | 'error'>('verifying')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    async function handleCallback() {
      const token_hash = searchParams.get('token_hash')
      const type = searchParams.get('type') as 'email' | 'magiclink' | null
      const error_param = searchParams.get('error_description')

      if (error_param) {
        setErrorMsg(decodeURIComponent(error_param))
        setStatus('error')
        return
      }

      if (!token_hash || !type) {
        // Check if session already exists (e.g. already clicked the link)
        const { data } = await supabase.auth.getSession()
        if (data.session) {
          setStatus('success')
          setTimeout(() => router.push('/dashboard'), 1000)
          return
        }
        setErrorMsg('Invalid or missing link parameters. Please request a new magic link.')
        setStatus('error')
        return
      }

      const { data, error } = await supabase.auth.verifyOtp({
        token_hash,
        type,
      })

      if (error || !data.session) {
        setErrorMsg(error?.message ?? 'This link has expired or already been used. Please request a new one.')
        setStatus('error')
        return
      }

      setStatus('success')
      setTimeout(() => router.push('/dashboard'), 1200)
    }

    handleCallback()
  }, [router, searchParams])

  if (status === 'verifying') {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-2 border-amber border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white font-semibold">Verifying your link…</p>
          <p className="text-text-muted text-sm mt-1">Just a moment</p>
        </div>
      </div>
    )
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-bg flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-white font-semibold text-lg">Signed in successfully</p>
          <p className="text-text-muted text-sm mt-1">Redirecting to your dashboard…</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center">
      <div className="w-full max-w-sm px-4 text-center">
        <div className="w-12 h-12 bg-red-500/20 border border-red-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-white font-semibold text-lg mb-2">Link expired or invalid</h1>
        <p className="text-text-muted text-sm mb-6">{errorMsg}</p>
        <Link href="/login" className="btn-primary inline-block px-6 py-3">
          Request a new link
        </Link>
      </div>
    </div>
  )
}
