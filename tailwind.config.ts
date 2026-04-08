import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        zg: {
          50:  '#FEF8EE',
          100: '#FDF0D5',
          200: '#FADCAA',
          300: '#F6C070',
          400: '#FA7E00',
          500: '#CF7923',
          600: '#A56E37',
          700: '#7A5C3D',
          800: '#504335',
          900: '#332F2B',
        },
        paper: '#FAF6F0',
        border: '#E8D9C5',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        serif: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
}
export default config
