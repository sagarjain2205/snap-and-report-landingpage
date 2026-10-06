import { Check, ArrowDown } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Gallery from '../components/Gallery.jsx'

const points = ['Review reports', 'Inspect evidence', 'Verify violations', 'Manage challans', 'Track payment status']
const items = [
  { src: '/screenshots/police-dashboard.png', label: 'Officer Dashboard' },
  { src: '/screenshots/police-report-details.png', label: 'Report Verification' },
  { src: '/screenshots/police-challans.png', label: 'Challan Management' }
]
const flow = ['Verified Report', 'Challan', 'Payment', 'Status Tracking']

export default function Officers() {
  return (
    <>
      <section id="officers" className="sect border-y border-white/10 bg-white/[0.02]">
        <div className="wrap grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <Reveal delay={0.1} className="order-2 min-w-0 lg:order-1"><Gallery items={items} /></Reveal>
          <Reveal className="order-1 lg:order-2">
            <h2 className="h2">From reports to action.</h2>
            <p className="lead">Authorized officers stay in control of every decision.</p>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 font-medium">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-cyan/10 text-cyan ring-1 ring-cyan/30"><Check size={14} /></span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="sect">
        <div className="wrap">
          <Reveal>
            <h2 className="h2 max-w-xl">Challans, tracked to the end.</h2>
            <p className="lead">Once an officer verifies a report, the challan and its payment status stay visible in the same place.</p>
          </Reveal>
          <div className="mt-12 grid items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((f, i) => (
              <Reveal key={f} delay={i * 0.07}>
                <div className="relative h-full rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5">
                  <p className="text-sm text-mute">Stage {i + 1}</p>
                  <p className="mt-1 font-display text-xl font-bold">{f}</p>
                  {i < flow.length - 1 && (
                    <ArrowDown className="absolute -bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-void/80 p-0.5 text-mute sm:hidden" size={22} />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
