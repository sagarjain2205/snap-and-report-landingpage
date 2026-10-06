import Reveal from '../components/Reveal.jsx'

const layers = [
  ['Frontend', 'What users see', ['React', 'Tailwind CSS']],
  ['Backend', 'Business logic and APIs', ['Node.js', 'Express.js']],
  ['Database', 'Reports, users, challans', ['MongoDB', 'Mongoose']],
  ['AI service', 'Vision pipeline', ['Python', 'FastAPI', 'YOLOv8', 'EasyOCR']],
  ['Services', 'Supporting tools', ['Cloudinary', 'Axios', 'JWT', 'PDFKit']]
]

export default function TechStack() {
  return (
    <section id="tech" className="sect border-y border-white/10 bg-white/[0.02]">
      <div className="wrap">
        <Reveal>
          <h2 className="h2 max-w-2xl">Built on a focused stack.</h2>
          <p className="lead">Five layers, each with one job.</p>
        </Reveal>
        <div className="mt-12 space-y-3">
          {layers.map(([name, desc, techs], i) => (
            <Reveal key={name} delay={i * 0.05}>
              <div
                className="grid gap-3 rounded-xl border border-white/10 bg-void/80 p-4 sm:grid-cols-[200px_1fr] sm:items-center sm:p-5"
                style={{ marginLeft: `${i * 0}px` }}
              >
                <div>
                  <p className="font-display text-lg font-bold">{name}</p>
                  <p className="text-sm text-mute">{desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {techs.map((t) => (
                    <span key={t} className="rounded-md border border-white/15 bg-white/[0.04] backdrop-blur-md px-3 py-1.5 text-sm font-semibold">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
