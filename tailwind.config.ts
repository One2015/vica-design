import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'DM Sans', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        primary: '#1a1a1a',
        secondary: '#666666',
        accent: '#fcf6eb',
        border: '#e3e2e2',
        warm: '#BD7D31',
      },
      spacing: {
        'page': 'clamp(1.5rem, 5vw, 6rem)',
        'section': 'clamp(3.75rem, 10vw, 10rem)',
      },
      maxWidth: {
        'content': '156rem',
        'wide': '186rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
