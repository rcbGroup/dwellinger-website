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
          DEFAULT: '#0A0A0A',
          surface: '#111111',
          raised: '#1A1A1A',
          overlay: '#222222',
        },
        text: {
          DEFAULT: '#FFFFFF',
          secondary: '#A1A1AA',
          muted: '#71717A',
          inverse: '#0A0A0A',
        },
        amber: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FCD34D',
          subtle: '#1C1400',
          border: '#3D2E00',
        },
        border: {
          DEFAULT: '#2A2A2A',
          subtle: '#1F1F1F',
          strong: '#3F3F46',
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
        card: '0 1px 3px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.4)',
        'card-hover': '0 4px 24px rgba(0,0,0,0.8)',
        amber: '0 0 0 2px rgba(245,158,11,0.3)',
        glow: '0 0 40px rgba(245,158,11,0.15)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(245,158,11,0.15), transparent)',
        'surface-gradient': 'linear-gradient(180deg, #111111 0%, #0A0A0A 100%)',
        'amber-gradient': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        'card-gradient': 'linear-gradient(180deg, #1A1A1A 0%, #111111 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
