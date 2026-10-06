import { useEffect, useRef } from 'react'

// Fixed full-page animated backdrop:
// drifting aurora orbs + moving neon grid floor + interactive particle network
// + passing light streaks (like headlights) + soft cursor glow.
export default function BackgroundFX() {
  const canvasRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const COLORS = ['34,211,238', '139,92,246', '79,124,255', '46,242,208']
    const mouse = { x: -9999, y: -9999 }
    let w = 0, h = 0, raf = 0, pts = [], streaks = []

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.min(110, Math.floor((w * h) / 15000))
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.6 + 0.6,
        c: COLORS[(Math.random() * COLORS.length) | 0]
      }))
    }

    const spawnStreak = () => {
      const fromLeft = Math.random() > 0.5
      streaks.push({
        x: fromLeft ? -200 : w + 200,
        y: Math.random() * h,
        dir: fromLeft ? 1 : -1,
        speed: 9 + Math.random() * 9,
        len: 140 + Math.random() * 200,
        c: COLORS[(Math.random() * COLORS.length) | 0]
      })
    }

    const frame = () => {
      ctx.clearRect(0, 0, w, h)

      // particles + links
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i]
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const d = Math.hypot(dx, dy)
        if (d < 170) { p.vx += (dx / d) * 0.012; p.vy += (dy / d) * 0.012 }
        p.vx *= 0.995; p.vy *= 0.995
        p.x += p.vx; p.y += p.vy
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        if (p.y < -10) p.y = h + 10
        if (p.y > h + 10) p.y = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.c},0.9)`
        ctx.shadowColor = `rgba(${p.c},1)`
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.shadowBlur = 0

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j]
          const dist = Math.hypot(p.x - q.x, p.y - q.y)
          if (dist < 125) {
            ctx.strokeStyle = `rgba(${p.c},${(1 - dist / 125) * 0.35})`
            ctx.lineWidth = 0.7
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke()
          }
        }
        if (d < 170) {
          ctx.strokeStyle = `rgba(${p.c},${(1 - d / 170) * 0.7})`
          ctx.lineWidth = 0.9
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke()
        }
      }

      // light streaks
      if (Math.random() < 0.012 && streaks.length < 4) spawnStreak()
      streaks = streaks.filter((s) => s.x > -400 && s.x < w + 400)
      for (const s of streaks) {
        s.x += s.speed * s.dir
        const x2 = s.x - s.len * s.dir
        const g = ctx.createLinearGradient(s.x, s.y, x2, s.y)
        g.addColorStop(0, `rgba(${s.c},0.95)`)
        g.addColorStop(1, `rgba(${s.c},0)`)
        ctx.strokeStyle = g
        ctx.lineWidth = 2
        ctx.shadowColor = `rgba(${s.c},1)`
        ctx.shadowBlur = 16
        ctx.beginPath(); ctx.moveTo(s.x, s.y); ctx.lineTo(x2, s.y); ctx.stroke()
        ctx.shadowBlur = 0
      }

      raf = requestAnimationFrame(frame)
    }

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (glowRef.current) glowRef.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`
    }
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    const onVis = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden && !reduce) raf = requestAnimationFrame(frame)
    }

    resize()
    if (reduce) { frame(); cancelAnimationFrame(raf) } else { raf = requestAnimationFrame(frame) }
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVis)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-void">
      <div className="bg-orb" style={{ width: '48vw', height: '48vw', left: '-12vw', top: '-14vw', background: 'radial-gradient(circle, #4F7CFF, transparent 65%)' }} />
      <div className="bg-orb" style={{ width: '42vw', height: '42vw', right: '-10vw', top: '10vh', background: 'radial-gradient(circle, #8B5CF6, transparent 65%)', animationDelay: '-7s', animationDuration: '27s' }} />
      <div className="bg-orb" style={{ width: '40vw', height: '40vw', left: '25vw', bottom: '-18vw', background: 'radial-gradient(circle, #22D3EE, transparent 65%)', animationDelay: '-13s', animationDuration: '31s', opacity: 0.4 }} />
      <div className="bg-grid" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div ref={glowRef} className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full opacity-40" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.25), transparent 65%)', willChange: 'transform' }} />
      <div className="bg-vignette" />
      <div className="bg-noise" />
    </div>
  )
}
