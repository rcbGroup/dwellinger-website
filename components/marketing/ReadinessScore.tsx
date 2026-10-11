'use client'

import Link from 'next/link'
import { CheckCircle, Circle, ArrowRight } from 'lucide-react'

export interface ReadinessItem {
  label: string
  done: boolean
  weight?: number
}

export interface ReadinessScoreProps {
  score: number
  items: ReadinessItem[]
  ctaLabel?: string
  ctaHref?: string
  title?: string
  compact?: boolean
}

function scoreLabel(score: number): { label: string; colour: string } {
  if (score >= 80) return { label: 'Ready to proceed', colour: '#10B981' }
  if (score >= 60) return { label: 'Nearly there', colour: '#F59E0B' }
  if (score >= 40) return { label: 'Getting started', colour: '#C4773B' }
  return { label: 'Just begun', colour: '#71717A' }
}

function Ring({ score, size = 80 }: { score: number; size?: number }) {
  const radius = (size - 12) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference
  const { colour } = scoreLabel(score)
  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="-rotate-90" style={{ width: size, height: size }}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="8" />
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={colour} strokeWidth="8"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.6s ease' }} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-white" style={{ fontSize: size > 64 ? '1.1rem' : '0.85rem' }}>{score}%</span>
      </div>
    </div>
  )
}

export function ReadinessScore({ score, items, ctaLabel = 'Complete checklist', ctaHref = '/tools/project-readiness', title, compact = false }: ReadinessScoreProps) {
  const { label } = scoreLabel(score)
  const doneCount = items.filter((i) => i.done).length
  const { colour } = scoreLabel(score)
  return (
    <div className={compact ? '' : 'card p-6'}>
      {title && <h3 className="font-display text-base text-white mb-4">{title}</h3>}
      <div className="flex items-center gap-5 mb-5">
        <Ring score={score} size={compact ? 64 : 80} />
        <div className="min-w-0">
          <p className="font-semibold mb-0.5" style={{ color: colour }}>{label}</p>
          <p className="text-text-muted text-xs leading-relaxed">{doneCount} of {items.length} items complete</p>
          {!compact && (
            <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden w-32">
              <div className="h-full rounded-full transition-all duration-500" style={{ width: `${score}%`, backgroundColor: colour }} />
            </div>
          )}
        </div>
      </div>
      <div className="space-y-2 mb-5">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            {item.done ? <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" /> : <Circle className="w-4 h-4 text-white/20 flex-shrink-0" />}
            <span className={`text-xs leading-snug ${item.done ? 'text-text-secondary line-through' : 'text-text-muted'}`}>{item.label}</span>
          </div>
        ))}
      </div>
      {score < 100 && ctaHref && (
        <Link href={ctaHref} className="inline-flex items-center gap-1.5 text-amber text-xs font-semibold hover:underline">
          {ctaLabel} <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </div>
  )
}

export default ReadinessScore
