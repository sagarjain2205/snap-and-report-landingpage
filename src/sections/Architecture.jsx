import { ArrowDown } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'

const Node = ({ children, tone = 'plain', sub }) => (
  <div
    className={`w-full max-w-xs rounded-xl border px-5 py-3 text-center ${
      tone === 'ai' ? 'border-aqua/70 bg-aqua/10' : tone === 'main' ? 'border-sign/60 bg-gradient-to-r from-sign to-violet text-white shadow-neon' : 'border-white/20 bg-white/[0.04] backdrop-blur-md'
    }`}
  >
    <p className="font-display text-base font-bold">{children}</p>
    {sub && <p className={`text-xs ${tone === 'main' ? 'text-white/70' : 'text-mute'}`}>{sub}</p>}
  </div>
)
const Down = () => <ArrowDown size={18} className="my-1.5 text-mute" />

export default function Architecture() {
  return (
    <section className="sect">
      <div className="wrap">
        <Reveal>
          <h2 className="h2 max-w-2xl">How the pieces connect.</h2>
          <p className="lead">The React app never talks to the AI service directly. Express coordinates everything.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 sm:p-10">
            <Node>Citizen / Officer</Node><Down />
            <Node>React + Tailwind</Node><Down />
            <Node tone="main">Node.js + Express</Node>
            <div className="mt-2 grid w-full max-w-2xl gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center">
                <Down />
                <Node sub="Reports, users, challans">MongoDB</Node>
              </div>
              <div className="flex flex-col items-center">
                <Down />
                <Node>Cloudinary</Node><Down />
                <Node sub="Stored image">Image URL</Node><Down />
                <Node tone="ai">FastAPI</Node><Down />
                <Node tone="ai">YOLOv8 + EasyOCR</Node><Down />
                <Node sub="JSON">AI Result</Node><Down />
                <Node tone="main">Express</Node><Down />
                <Node>MongoDB</Node>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
