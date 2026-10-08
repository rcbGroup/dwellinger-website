import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
      screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1200px' },
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--color-bg)',
          surface: 'var(--color-bg-surface)',
          raised: 'var(--color-bg-raised)',
          overlay: 'var(--color-bg-overlay)',
        },
        text: {
          DEFAULT: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          inverse: 'var(--color-text-inverse)',
        },
        amber: {
          DEFAULT: 'var(--amber)',
          dark: 'var(--amber-dark)',
          light: 'var(--amber-light)',
          subtle: 'var(--amber-subtle)',
          border: 'var(--amber-border)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          subtle: 'var(--color-border-subtle)',
          strong: 'var(--color-border-strong)',
        },
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
      },
      fontFamily: {
        display: ['var(--font-cal)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        hero: ['clamp(2.5rem,6vw,4.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h1: ['clamp(2rem,5vw,3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.75rem,4vw,2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        h3: ['clamp(1.25rem,3vw,1.75rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        DEFAULT: '8px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
      },
      boxShadow: {
        card: 'var(--card-shadow)',
        'card-hover': 'var(--card-shadow-hover)',
        amber: '0 0 0 2px rgba(196,119,59,0.3)',
        glow: '0 0 40px rgba(196,119,59,0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'var(--hero-gradient)',
        'surface-gradient': 'linear-gradient(180deg, var(--color-bg-surface) 0%, var(--color-bg) 100%)',
        'amber-gradient': 'linear-gradient(135deg, #C4773B 0%, #A85F2A 100%)',
        'card-gradient': 'linear-gradient(180deg, var(--color-bg-raised) 0%, var(--color-bg-surface) 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
