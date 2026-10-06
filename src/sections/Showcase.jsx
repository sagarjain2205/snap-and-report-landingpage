import Reveal from '../components/Reveal.jsx'
import Screenshot from '../components/Screenshot.jsx'

const shots = [
  ['/screenshots/citizen-dashboard-1.png', 'Citizen Dashboard', 'lg:col-span-2'],
  ['/screenshots/citizen-report-upload.png', 'Report Submission', ''],
  ['/screenshots/citizen-my-reports.png', 'My Reports', ''],
  ['/screenshots/police-dashboard.png', 'Officer Dashboard', 'lg:col-span-2'],
  ['/screenshots/police-report-details.png', 'Report Verification', ''],
  ['/screenshots/police-challans.png', 'Challan Management', '']
]

export default function Showcase() {
  return (
    <section className="sect border-y border-white/10 bg-white/[0.02]">
      <div className="wrap">
        <Reveal>
          <h2 className="h2 max-w-2xl">Built around the real workflow.</h2>
          <p className="lead">The citizen side on top, the officer side below.</p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {shots.map(([src, label, span], i) => (
            <Reveal key={src} delay={(i % 2) * 0.06} className={`min-w-0 ${span}`}>
              <Screenshot src={src} label={label} frame={false} />
              <p className="mt-2 text-sm font-semibold">{label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
