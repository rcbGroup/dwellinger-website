'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import { FileText, Plus, Trash2, Bookmark } from 'lucide-react'

type SavedScope = {
  id: string
  project_type: string
  address: string | null
  spec_level: string | null
  created_at: string
  trades: string[]
  notes: string | null
}

const TYPE_LABELS: Record<string, string> = {
  extension: 'Extension',
  loft: 'Loft Conversion',
  refurbishment: 'Refurbishment',
  kitchen: 'Kitchen',
  bathroom: 'Bathroom',
  structural: 'Structural Works',
  other: 'Other',
}

const SPEC_LABELS: Record<string, string> = {
  standard: 'Standard',
  mid: 'Mid-range',
  high: 'High specification',
}

export default function ScopesPage() {
  const router = useRouter()
  const [scopes, setScopes] = useState<SavedScope[]>([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.replace('/login'); return }
      const { data, error } = await supabase
        .from('scopes')
        .select('id, project_type, address, spec_level, created_at, trades, notes')
        .order('created_at', { ascending: false })
      if (error) {
        setError(error.message)
      } else {
        setScopes(data ?? [])
      }
      setLoading(false)
    }
    load()
  }, [router])

  async function handleDelete(id: string) {
    if (!confirm('Delete this scope? This cannot be undone.')) return
    setDeleting(id)
    const { error } = await supabase.from('scopes').delete().eq('id', id)
    if (!error) setScopes((prev) => prev.filter((s) => s.id !== id))
    setDeleting(null)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div
          className="w-10 h-10 border-2 rounded-full animate-spin"
          style={{ borderColor: '#C4773B', borderTopColor: 'transparent' }}
        />
      </div>
    )
  }

  return (
    <main className="container mx-auto px-4 py-10 max-w-3xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl text-white mb-1">My Scopes</h1>
          <p className="text-text-muted text-sm">Your saved scopes of work</p>
        </div>
        <Link
          href="/scope-builder"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-lg flex-shrink-0"
          style={{ background: '#C4773B' }}
        >
          <Plus className="w-4 h-4" />
          New scope
        </Link>
      </div>

      {error && (
        <div
          className="card p-4 mb-6"
          style={{ borderColor: 'rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.05)' }}
        >
          <p className="text-sm" style={{ color: '#f87171' }}>{error}</p>
          <p className="text-text-muted text-xs mt-1">Run migration 003_scopes.sql in Supabase to enable this page.</p>
        </div>
      )}

      {!error && scopes.length === 0 && (
        <div className="card p-10 text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: 'rgba(196,119,59,0.1)', border: '1px solid rgba(196,119,59,0.3)' }}
          >
            <Bookmark className="w-6 h-6 text-amber" />
          </div>
          <h2 className="font-display text-lg text-white mb-2">No scopes saved yet</h2>
          <p className="text-text-muted text-sm mb-6 max-w-xs mx-auto">
            Use the Scope Builder to generate a scope of works, then save it to your account.
          </p>
          <Link
            href="/scope-builder"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white px-5 py-2.5 rounded-lg"
            style={{ background: '#C4773B' }}
          >
            <Plus className="w-4 h-4" />
            Build a scope
          </Link>
        </div>
      )}

      {scopes.length > 0 && (
        <div className="space-y-3">
          {scopes.map((scope) => (
            <div key={scope.id} className="card p-5">
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(196,119,59,0.1)' }}
                >
                  <FileText className="w-4 h-4 text-amber" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold text-sm">
                      {TYPE_LABELS[scope.project_type] ?? scope.project_type}
                      {scope.spec_level && (
                        <span className="text-text-muted font-normal ml-2 text-xs">
                          {SPEC_LABELS[scope.spec_level] ?? scope.spec_level}
                        </span>
                      )}
                    </h3>
                    <span className="text-text-muted text-xs flex-shrink-0">
                      {new Date(scope.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  {scope.address && (
                    <p className="text-text-muted text-xs mb-2">{scope.address}</p>
                  )}
                  {scope.trades && scope.trades.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {scope.trades.slice(0, 5).map((trade) => (
                        <span
                          key={trade}
                          className="text-xs text-text-muted rounded px-2 py-0.5 border border-border"
                          style={{ background: 'rgba(255,255,255,0.04)' }}
                        >
                          {trade}
                        </span>
                      ))}
                      {scope.trades.length > 5 && (
                        <span className="text-xs text-text-muted">+{scope.trades.length - 5} more</span>
                      )}
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleDelete(scope.id)}
                  disabled={deleting === scope.id}
                  className="p-1.5 rounded transition-colors flex-shrink-0"
                  style={{ color: 'var(--color-text-muted)' }}
                  title="Delete scope"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}