import { useState } from 'react'
import { Zap, Cpu, UserCheck, Eye, User, ShieldCheck, Copy, Check } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { Logo } from '../components/Navbar.jsx'
import { APP_URL, GITHUB_URL } from '../config.js'

const why = [
  [Zap, 'Faster Reporting', 'Snap a photo, add the location, submit.'],
  [Cpu, 'AI-Assisted Detection', 'Computer vision helps read the scene.'],
  [UserCheck, 'Human Verification', 'Officers make the final call.'],
  [Eye, 'Transparent Tracking', 'Report and challan status stay visible.']
]

export function Why() {
  return (
    <section className="sect">
      <div className="wrap">
        <Reveal><h2 className="h2 max-w-xl">Why Snap &amp; Report</h2></Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.map(([Icon, t, d], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 transition-colors hover:border-cyan/60 hover:shadow-glow">
                <Icon className="text-cyan" size={24} />
                <h3 className="mt-5 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DemoCredentials() {
  const [copied, setCopied] = useState(null)

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  const creds = [
    {
      role: 'Citizen',
      icon: User,
      badgeColor: 'border-cyan/30 bg-cyan/10 text-cyan',
      email: 'citizen@demo.com',
      password: 'demo123'
    },
    {
      role: 'Officer',
      icon: ShieldCheck,
      badgeColor: 'border-violet/30 bg-violet/10 text-violet',
      email: 'officer@demo.com',
      password: 'demo123'
    }
  ]

  return (
    <section className="px-5 pb-16 sm:px-8">
      <Reveal className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8 shadow-2xl">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan/10 blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 h-48 w-48 rounded-full bg-violet/10 blur-3xl pointer-events-none" />

          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🧪</span>
            <div>
              <h3 className="text-xl font-extrabold text-white">Demo Credentials</h3>
              <p className="text-xs text-white/60 mt-0.5">Use these test accounts to try out the application</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {creds.map((c) => (
              <div key={c.role} className="rounded-xl border border-white/10 bg-black/40 p-4 sm:p-5 transition-colors hover:border-cyan/40">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${c.badgeColor}`}>
                    <c.icon size={14} />
                    {c.role}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs font-mono">
                  <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 border border-white/5">
                    <span className="text-white/50 font-sans text-[11px]">Email:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">{c.email}</span>
                      <button
                        onClick={() => handleCopy(c.email, `${c.role}-email`)}
                        className="text-white/50 hover:text-cyan transition-colors"
                        title="Copy email"
                      >
                        {copied === `${c.role}-email` ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 border border-white/5">
                    <span className="text-white/50 font-sans text-[11px]">Password:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">{c.password}</span>
                      <button
                        onClick={() => handleCopy(c.password, `${c.role}-pass`)}
                        className="text-white/50 hover:text-cyan transition-colors"
                        title="Copy password"
                      >
                        {copied === `${c.role}-pass` ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function CTA() {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-28">
      <Reveal className="mx-auto max-w-6xl">
        <div className="cta-card relative overflow-hidden rounded-2xl px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-5xl">Smarter reporting. Safer streets.</h2>
          <p className="mt-4 text-white/80">Turn a simple snapshot into an actionable report.</p>
          <Button href={APP_URL} external variant="light" arrow className="mt-8">Launch Snap &amp; Report</Button>
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  const links = [['Home', '#home'], ['How It Works', '#how'], ['AI Technology', '#ai'], ['Application', APP_URL], ['GitHub', GITHUB_URL]]
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/50 text-white backdrop-blur">
      <div className="wrap flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo light />
          <p className="mt-3 max-w-xs text-sm text-white/60">AI-assisted illegal parking reporting and enforcement support.</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {links.map(([t, h]) => (
            <li key={t}>
              <a href={h} {...(h.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})} className="text-white/70 hover:text-white">{t}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/10 py-5 text-xs text-white/50 flex flex-col sm:flex-row items-center justify-between gap-3 wrap">
        <div>© 2026 Snap &amp; Report. All rights reserved.</div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-white/70">
          <span>Made by <a href="https://github.com/sagarjain2205" target="_blank" rel="noreferrer" className="text-cyan hover:underline font-medium">Sagar Jain</a></span>
          <span className="hidden sm:inline">•</span>
          <a href="mailto:jainsagar22105@gmail.com" className="hover:text-cyan transition-colors">jainsagar22105@gmail.com</a>
          <span className="hidden sm:inline">•</span>
          <a href="https://github.com/sagarjain2205" target="_blank" rel="noreferrer" className="hover:text-cyan transition-colors">GitHub Profile</a>
        </div>
      </div>
    </footer>
  )
}
