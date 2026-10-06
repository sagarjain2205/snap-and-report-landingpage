import Reveal from '../components/Reveal.jsx'
import Screenshot from '../components/Screenshot.jsx'

const steps = [
  ['Capture', 'Citizen captures or uploads an image.', ['/screenshots/citizen-report-upload.png', 'Report Upload']],
  ['Submit', 'Citizen adds location and details.', null],
  ['AI Analysis', 'YOLOv8 detects vehicles and EasyOCR helps read the number plate.', ['/screenshots/ai-detection.png', 'AI Detection']],
  ['Officer Verification', 'Authorized officer reviews and verifies the violation.', ['/screenshots/police-report-details.png', 'Report Details']],
  ['Challan & Tracking', 'A challan can be issued and its status tracked.', ['/screenshots/police-challans.png', 'Challans']]
]

export default function HowItWorks() {
  return (
    <section id="how" className="sect border-y border-white/10 bg-white/[0.02]">
      <div className="wrap">
        <Reveal>
          <h2 className="h2 max-w-2xl">From a snapshot to a tracked challan.</h2>
          <p className="lead">Five steps, one workflow.</p>
        </Reveal>
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {steps.map(([t, d, shot], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <li className="relative h-full list-none">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-sign to-violet font-display text-sm font-bold text-white shadow-neon">{i + 1}</span>
                  <span className="hidden lg:block h-px flex-1 bg-line" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{d}</p>
                {shot && <Screenshot src={shot[0]} label={shot[1]} ratio="4 / 3" frame={false} className="mt-4" />}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
