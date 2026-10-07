import Link from 'next/link'
import { MapPin, Star, CheckCircle } from 'lucide-react'
import BuilderScoreRing from './BuilderScoreRing'

interface ContractorCardProps {
  id: string
  name: string
  company: string
  location: string
  specialisms: string[]
  score: number
  reviewCount: number
  projectsCompleted: number
  verified: boolean
  avatarInitials: string
  avgProjectValue?: string
}

export default function ContractorCard({
  id,
  name,
  company,
  location,
  specialisms,
  score,
  reviewCount,
  projectsCompleted,
  verified,
  avatarInitials,
  avgProjectValue,
}: ContractorCardProps) {
  const tier =
    score >= 900 ? 'Platinum' : score >= 700 ? 'Gold' : score >= 500 ? 'Silver' : 'Bronze'
  const tierColour =
    score >= 900
      ? 'bg-copper text-white'
      : score >= 700
        ? 'bg-yellow-400 text-yellow-900'
        : score >= 500
          ? 'bg-gray-300 text-gray-700'
          : 'bg-amber-700 text-white'

  return (
    <Link href={`/contractors/${id}`} className="card block p-4 hover:no-underline group">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">{avatarInitials}</span>
        </div>
        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className="font-bold text-navy text-sm truncate group-hover:text-copper transition-colors">
              {name}
            </h3>
            {verified && (
              <CheckCircle className="w-3.5 h-3.5 text-success flex-shrink-0" />
            )}
          </div>
          <p className="text-text-mid text-xs truncate">{company}</p>
          <div className="flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3 text-text-light flex-shrink-0" />
            <span className="text-xs text-text-light">{location}</span>
          </div>
        </div>
        {/* Score */}
        <div className="bg-navy rounded-md p-2 flex-shrink-0">
          <BuilderScoreRing score={score} size="sm" showLabel={false} />
        </div>
      </div>

      {/* Score label */}
      <div className="flex items-center gap-2 mb-3">
        <span className={`badge text-xs ${tierColour}`}>{tier}</span>
        <span className="text-xs text-text-mid font-semibold">
          Builder Score™ {score}/1000
        </span>
      </div>

      {/* Specialisms */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        {specialisms.slice(0, 3).map((s) => (
          <span key={s} className="badge-cream text-xs px-2 py-0.5">
            {s}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-cream-dark">
        <div className="text-center">
          <div className="flex items-center justify-center gap-0.5">
            <Star className="w-3 h-3 text-copper fill-copper" />
            <span className="text-xs font-bold text-navy">
              {(score / 200).toFixed(1)}
            </span>
          </div>
          <div className="text-xs text-text-light mt-0.5">{reviewCount} reviews</div>
        </div>
        <div className="text-center">
          <div className="text-xs font-bold text-navy">{projectsCompleted}</div>
          <div className="text-xs text-text-light mt-0.5">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-xs font-bold text-navy">{avgProjectValue || '£50k+'}</div>
          <div className="text-xs text-text-light mt-0.5">Avg. value</div>
        </div>
      </div>
    </Link>
  )
}
