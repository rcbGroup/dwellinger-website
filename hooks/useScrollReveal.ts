'use client'

import { useEffect } from 'react'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useScrollReveal(
  className: string = 'reveal-visible',
  options: ScrollRevealOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -60px 0px',
    once = true,
  } = options

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove(className)
          }
        })
      },
      { threshold, rootMargin }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [className, threshold, rootMargin, once])
}
