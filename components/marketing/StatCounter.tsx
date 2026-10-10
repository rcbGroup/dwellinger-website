'use client'

import { useEffect, useRef, useState } from 'react'

interface StatCounterProps {
  target: string
  label: string
  duration?: number
  prefix?: string
  suffix?: string
}

export function StatCounter({ target, label, duration = 1200, prefix = '', suffix = '' }: StatCounterProps) {
  const numericTarget = parseInt(target.replace(/,/g, ''), 10)
  const isNumeric = !isNaN(numericTarget)
  const [displayed, setDisplayed] = useState(isNumeric ? '0' : target)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    if (!isNumeric || animated.current) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || animated.current) return
      animated.current = true
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.round(eased * numericTarget)
        setDisplayed(current.toLocaleString())
        if (progress < 1) requestAnimationFrame(tick)
        else setDisplayed(numericTarget.toLocaleString())
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [isNumeric, numericTarget, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold text-amber stat-number">
        {prefix}{displayed}{suffix}
      </div>
      <div className="text-sm mt-1.5" style={{ color: 'var(--color-text-muted)' }}>{label}</div>
    </div>
  )
}
