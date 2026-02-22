/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3ED',
        parchment: '#EDE8DF',
        forest: {
          DEFAULT: '#2D5016',
          light: '#4A7A28',
          muted: '#E8F0E0',
          deep: '#1A2E0D',
          glow: 'rgba(74,122,40,0.15)',
        },
        ember: {
          DEFAULT: '#E8823A',
          light: '#FDF0E6',
          deep: '#C4611E',
        },
        charcoal: '#1C1C1C',
        ink: '#0F1A09',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-green': '0 0 40px rgba(45,80,22,0.15), 0 4px 24px rgba(45,80,22,0.1)',
        'glow-ember': '0 0 40px rgba(232,130,58,0.2), 0 4px 24px rgba(232,130,58,0.12)',
        'card': '0 2px 8px rgba(15,26,9,0.06), 0 8px 32px rgba(15,26,9,0.04)',
        'card-hover': '0 4px 16px rgba(15,26,9,0.1), 0 16px 48px rgba(15,26,9,0.08)',
        'float': '0 20px 60px rgba(15,26,9,0.15)',
      },
      backgroundImage: {
        'hero-mesh': 'radial-gradient(ellipse at 70% 30%, rgba(74,122,40,0.4) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(232,130,58,0.12) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(26,46,13,0.3) 0%, transparent 70%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
