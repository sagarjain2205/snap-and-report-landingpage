import { Check } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Gallery from '../components/Gallery.jsx'

const points = ['Simple registration', 'Upload or capture evidence', 'Add location', 'Submit report', 'Track reports']
const items = [
  { src: '/screenshots/citizen-dashboard-1.png', label: 'Citizen Dashboard' },
  { src: '/screenshots/citizen-dashboard-2.png', label: 'Dashboard Overview' },
  { src: '/screenshots/citizen-report-upload.png', label: 'Report Submission' },
  { src: '/screenshots/citizen-my-reports.png', label: 'My Reports' }
]

export default function Citizens() {
  return (
    <section id="citizens" className="sect">
      <div className="wrap grid gap-12 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
        <Reveal>
          <h2 className="h2">Report in seconds.</h2>
          <p className="lead">Everything a citizen needs, without a form-filled office visit.</p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 font-medium">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-cyan/10 text-cyan ring-1 ring-cyan/30"><Check size={14} /></span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0"><Gallery items={items} /></Reveal>
      </div>
    </section>
  )
}
