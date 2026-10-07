'use client'

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-8">
        <div className="w-20 h-20 rounded-full bg-amber-subtle border-2 border-amber flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
          </svg>
        </div>
        <h1 className="font-display text-h2 text-white mb-3">You&apos;re offline</h1>
        <p className="text-text-secondary max-w-sm mx-auto leading-relaxed mb-2">
          It looks like you&apos;ve lost your internet connection. Dwellinger requires a connection
          to load live contractor data and scores.
        </p>
        <p className="text-text-muted text-sm max-w-sm mx-auto">
          Check your Wi-Fi or mobile data, then try reloading.
        </p>
      </div>
      <button
        onClick={() => window.location.reload()}
        className="btn-primary mb-4"
      >
        Try again
      </button>
      <a href="/" className="text-amber text-sm hover:underline">
        Back to homepage
      </a>
    </div>
  )
}
