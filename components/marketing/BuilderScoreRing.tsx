'use client'

interface BuilderScoreRingProps {
  score: number
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

const sizeMap = {
  sm: { outer: 48, inner: 36, fontSize: 11, labelSize: 7 },
  md: { outer: 68, inner: 52, fontSize: 17, labelSize: 8 },
  lg: { outer: 96, inner: 74, fontSize: 24, labelSize: 9 },
}

export default function BuilderScoreRing({ score, size = 'md', showLabel = true }: BuilderScoreRingProps) {
  const { outer, inner, fontSize, labelSize } = sizeMap[size]
  const pct = Math.min(100, Math.max(0, (score / 1000) * 100))
  const circumference = 2 * Math.PI * (outer / 2 - 4)
  const strokeDashoffset = circumference * (1 - pct / 100)
  return (
    <div className="relative flex-shrink-0" style={{ width: outer, height: outer }}>
      <svg width={outer} height={outer} viewBox={`0 0 ${outer} ${outer}`} className="-rotate-90">
        <circle cx={outer / 2} cy={outer / 2} r={outer / 2 - 4} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth={4} />
        <circle cx={outer / 2} cy={outer / 2} r={outer / 2 - 4} fill="none" stroke="#C4773B" strokeWidth={4} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} style={{ transition: 'stroke-dashoffset 1s ease-out' }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full" style={{ margin: (outer - inner) / 2 }}>
        <span style={{ fontSize, color: '#fff', fontWeight: 800, lineHeight: 1 }}>{score}</span>
        {showLabel && (<span style={{ fontSize: labelSize, color: 'rgba(255,255,255,0.5)', marginTop: 1 }}>/1000</span>)}
      </div>
    </div>
  )
}
