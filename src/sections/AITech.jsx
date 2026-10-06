import { ArrowRight, ArrowDown } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Screenshot from '../components/Screenshot.jsx'

const chain = [
  ['Image', 'Citizen upload', false],
  ['YOLOv8', 'Vehicle detection', true],
  ['EasyOCR', 'Number plate recognition', true],
  ['Officer verification', 'Final decision', false]
]

export default function AITech() {
  return (
    <section id="ai" className="sect border-y border-white/10 bg-black/30 text-white">
      <div className="wrap">
        <Reveal>
          <h2 className="h2 max-w-2xl">AI that assists enforcement.</h2>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70">
            Computer vision helps accelerate the identification process while authorized officers retain final verification and enforcement responsibility.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
          {chain.map(([t, s, ai], i) => (
            <div key={t} className="flex flex-1 flex-col items-stretch gap-3 lg:flex-row lg:items-center">
              <Reveal delay={i * 0.08} className="flex-1">
                <div className={`h-full rounded-xl border p-5 ${ai ? 'border-aqua/60 bg-aqua/10 shadow-[0_0_30px_-8px_rgba(46,242,208,0.5)]' : 'border-white/15 bg-white/5'}`}>
                  <p className="font-display text-xl font-bold">{t}</p>
                  <p className="mt-1 text-sm text-white/60">{s}</p>
                  {ai && <p className="mt-3 text-xs font-semibold text-aqua">AI-assisted step</p>}
                </div>
              </Reveal>
              {i < chain.length - 1 && (
                <>
                  <ArrowRight className="hidden shrink-0 text-white/40 lg:block" size={20} />
                  <ArrowDown className="mx-auto shrink-0 text-white/40 lg:hidden" size={20} />
                </>
              )}
            </div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14 mx-auto max-w-4xl">
          <Screenshot src="/screenshots/ai-detection.png" label="AI Detection" scan />
        </Reveal>
      </div>
    </section>
  )
}
