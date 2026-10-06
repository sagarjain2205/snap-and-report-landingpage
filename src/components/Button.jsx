import { ArrowRight } from 'lucide-react'
const styles = {
  primary: 'text-white bg-gradient-to-r from-sign via-violet to-cyan bg-[length:200%_auto] hover:bg-right shadow-neon hover:scale-[1.03] animate-pulseGlow',
  light: 'bg-white text-void hover:bg-cyan hover:shadow-neon hover:scale-[1.03]',
  ghost: 'border border-white/20 bg-white/5 text-white backdrop-blur hover:border-cyan/70 hover:bg-cyan/10 hover:shadow-glow'
}
export default function Button({ href, variant = 'primary', arrow, external, children, className = '' }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm sm:text-[15px] font-semibold transition-all duration-300 ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
    </a>
  )
}
