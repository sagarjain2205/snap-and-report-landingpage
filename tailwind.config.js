export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050816',
        ink: '#E8EEFF',
        sign: '#4F7CFF',
        violet: '#8B5CF6',
        cyan: '#22D3EE',
        aqua: '#2EF2D0',
        mute: '#93A4CC'
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34,211,238,0.25), 0 10px 40px -10px rgba(79,124,255,0.55)',
        neon: '0 0 24px rgba(34,211,238,0.45), 0 0 60px rgba(139,92,246,0.35)'
      },
      keyframes: {
        drift: { '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' }, '33%': { transform: 'translate3d(8vw,-6vh,0) scale(1.15)' }, '66%': { transform: 'translate3d(-6vw,7vh,0) scale(0.92)' } },
        grid: { to: { backgroundPosition: '0 64px' } },
        shimmer: { to: { backgroundPosition: '200% center' } },
        spin360: { to: { transform: 'rotate(360deg)' } },
        scan: { '0%': { top: '-10%' }, '100%': { top: '110%' } },
        pulseGlow: { '0%,100%': { boxShadow: '0 0 0 0 rgba(34,211,238,0.55)' }, '50%': { boxShadow: '0 0 0 12px rgba(34,211,238,0)' } },
        floaty: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        marquee: { to: { transform: 'translateX(-50%)' } }
      },
      animation: {
        drift: 'drift 22s ease-in-out infinite',
        grid: 'grid 2.4s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
        spin360: 'spin360 6s linear infinite',
        scan: 'scan 3.2s linear infinite',
        pulseGlow: 'pulseGlow 2s ease-out infinite',
        floaty: 'floaty 5s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite'
      }
    }
  },
  plugins: []
}
