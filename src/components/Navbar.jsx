import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV, APP_URL } from '../config.js'
import Button from './Button.jsx'

export function Logo({ light }) {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="Snap & Report home">
      <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-sign via-violet to-cyan font-display text-lg font-extrabold text-white shadow-neon">P</span>
      <span className={`font-display text-lg font-bold ${'text-white'}`}>Snap &amp; Report</span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-void/60 backdrop-blur-xl"
    >
      <div className="wrap flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV.map(([t, h]) => (
            <a key={h} href={h} className="text-sm font-medium text-mute transition-colors hover:text-cyan">{t}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button href={APP_URL} external className="hidden sm:inline-flex !py-2">Launch App</Button>
          <button className="lg:hidden p-2 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/10 bg-void/90"
          >
            <div className="wrap flex flex-col py-3">
              {NAV.map(([t, h]) => (
                <a key={h} href={h} onClick={() => setOpen(false)} className="border-b border-white/10 py-3 text-base font-medium text-white">{t}</a>
              ))}
              <Button href={APP_URL} external className="mt-4">Launch App</Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
