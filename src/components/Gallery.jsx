import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Screenshot from './Screenshot.jsx'

// Tabbed screenshot viewer with a crossfade between images.
export default function Gallery({ items }) {
  const [i, setI] = useState(0)
  const cur = items[i]
  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2" role="tablist">
        {items.map((it, n) => (
          <button
            key={it.src}
            role="tab"
            aria-selected={n === i}
            onClick={() => setI(n)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              n === i ? 'bg-gradient-to-r from-sign to-violet text-white shadow-neon' : 'bg-white/5 text-mute border border-white/10 hover:text-white hover:border-cyan/50'
            }`}
          >
            {it.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={cur.src}
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Screenshot src={cur.src} label={cur.label} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
