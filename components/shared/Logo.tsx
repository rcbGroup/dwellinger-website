'use client'

import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showWordmark?: boolean
  className?: string
}

/** Dwellinger mark — copper diamond badge with house silhouette */
function DwellingerMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Diamond / score badge background */}
      <rect
        x="5.5"
        y="5.5"
        width="25"
        height="25"
        rx="4"
        transform="rotate(45 18 18)"
        fill="#C8773A"
      />
      {/* House body */}
      <path
        d="M11.5 22 L18 13.5 L24.5 22 L24.5 27 L11.5 27 Z"
        fill="white"
        fillOpacity="0.95"
      />
      {/* Door */}
      <rect x="15" y="23" width="6" height="4" rx="0.75" fill="#C8773A" />
      {/* Window / score dot */}
      <circle cx="18" cy="10.5" r="2" fill="white" fillOpacity="0.35" />
    </svg>
  )
}

/** Full Dwellinger wordmark SVG — for crisp rendering at any scale */
function DwellingerWordmark({ height = 20 }: { height?: number }) {
  return (
    <svg
      height={height}
      viewBox="0 0 160 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Dwellinger"
    >
      <text
        x="0"
        y="17"
        fontFamily="'Geist', 'Inter', system-ui, sans-serif"
        fontWeight="600"
        fontSize="18"
        letterSpacing="-0.3"
        fill="currentColor"
      >
        Dwellinger
      </text>
    </svg>
  )
}

const sizeMap = {
  sm: { mark: 28, wordmarkH: 16, gap: 8 },
  md: { mark: 36, wordmarkH: 20, gap: 10 },
  lg: { mark: 48, wordmarkH: 26, gap: 12 },
}

export function Logo({
  size = 'md',
  showWordmark = true,
  className = '',
}: LogoProps) {
  const { mark, wordmarkH, gap } = sizeMap[size]

  return (
    <Link
      href="/"
      className={`inline-flex items-center select-none ${className}`}
      style={{ gap }}
      aria-label="Dwellinger — home"
    >
      <DwellingerMark size={mark} />
      {showWordmark && (
        <span
          style={{
            color: 'var(--color-text)',
            fontFamily: "'Geist', 'Inter', system-ui, sans-serif",
            fontWeight: 600,
            fontSize: wordmarkH,
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
        >
          Dwellinger
        </span>
      )}
    </Link>
  )
}

/** Mark-only version for favicons, avatars, share cards */
export function LogoMark({ size = 36 }: { size?: number }) {
  return <DwellingerMark size={size} />
}

export default Logo
