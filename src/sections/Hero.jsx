import { motion } from 'framer-motion'
import { Cpu, Users, BadgeCheck, FileText, Activity } from 'lucide-react'
import Button from '../components/Button.jsx'
import Screenshot from '../components/Screenshot.jsx'
import { APP_URL } from '../config.js'

const strip = [
  [Cpu, 'AI-Assisted Detection'],
  [Users, 'Citizen Reporting'],
  [BadgeCheck, 'Officer Verification'],
  [FileText, 'Digital Challans'],
  [Activity, 'Status Tracking']
]

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-36">
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-mute">
            <span className="h-2 w-2 animate-pulseGlow rounded-full bg-aqua" /> AI-assisted enforcement support
          </div>
          <h1 className="h1-fx mt-6 max-w-4xl text-[2.6rem] leading-[1.02] font-extrabold sm:text-7xl">
            Snap it. Report it. Make roads safer.
          </h1>
          <p className="lead !max-w-2xl">
            Snap &amp; Report transforms illegal parking reporting into a faster, smarter and more transparent digital workflow — connecting citizens, AI-assisted detection and traffic authorities.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={APP_URL} external arrow>Launch Snap &amp; Report</Button>
            <Button href="#how" variant="ghost">See How It Works</Button>
          </div>
        </motion.div>

        <motion.div
          className="mt-14 sm:mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <div className="neon-frame animate-floaty">
            <Screenshot src="/screenshots/hero-product.png" label="Snap & Report Product" ratio="16 / 9" scan />
          </div>
        </motion.div>

        <ul className="glass mt-12 grid grid-cols-2 gap-x-6 gap-y-4 rounded-xl px-5 py-5 sm:grid-cols-5">
          {strip.map(([Icon, t]) => (
            <li key={t} className="flex items-center gap-2.5 text-sm font-medium">
              <Icon size={18} className="shrink-0 text-cyan" /> {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
