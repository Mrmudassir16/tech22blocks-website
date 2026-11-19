/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--canvas)',
        surface: 'var(--surface)',
        'surface-elevated': 'var(--surface-elevated)',
        'surface-card': 'var(--surface-card)',
        border: 'var(--border)',
        'border-subtle': 'var(--border-subtle)',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-light': 'var(--accent-light)',
        'accent-hover': 'var(--accent-hover)',
        obsidian: {
          950: '#030712',
          900: '#060b18',
          850: '#0b1120',
          800: '#0f172a',
          700: '#1e293b',
        },
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0a85b1',
          700: '#0284c7',
          800: '#0369a1',
          900: '#075985',
          950: '#082f49',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        display: ['"Plus Jakarta Sans"', 'var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'elevated': 'var(--shadow-elevated)',
        'offset': '4px 4px 0 var(--border)',
        'offset-accent': '4px 4px 0 var(--accent)',
      },
      borderRadius: {
        'card': 'var(--radius-card)',
        'shell': 'var(--radius-shell)',
      },
      animation: {
        'star-float': 'star-float 6s ease-in-out infinite',
      },
      keyframes: {
        'star-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
};
