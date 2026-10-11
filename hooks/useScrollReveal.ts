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
    threshold = 0.05,
    rootMargin = '0px',
    once = true,
  } = options

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')

    // Immediately reveal elements already in the viewport
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add(className)
      }
    })

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
