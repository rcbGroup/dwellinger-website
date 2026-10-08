'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

export type Theme = 'dark' | 'mid' | 'light'

interface ThemeContextValue {
  theme: Theme
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark')
  useEffect(() => {
    const saved = (typeof window !== 'undefined'
      ? localStorage.getItem('dwell-theme')
      : null) as Theme | null
    if (saved && ['dark', 'mid', 'light'].includes(saved)) {
      setThemeState(saved)
      document.documentElement.setAttribute('data-theme', saved)
    } else {
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    if (typeof window !== 'undefined') {
      localStorage.setItem('dwell-theme', t)
      document.documentElement.setAttribute('data-theme', t)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
