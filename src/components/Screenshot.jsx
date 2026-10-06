import { useState } from 'react'

// Shows /screenshots/<file> if it exists, otherwise a clean labelled placeholder.
// `scan` adds an animated cyan scan line (AI-detection feel).
export default function Screenshot({ src, label, ratio = '16 / 10', frame = true, scan = false, className = '' }) {
  const [ok, setOk] = useState(true)
  const body = (
    <div className={`relative w-full overflow-hidden bg-[#0A1030] ${scan ? 'scan' : ''}`} style={{ aspectRatio: ratio }}>
      {ok ? (
        <img
          src={src}
          alt={label}
          loading="lazy"
          onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      ) : (
        <div className="absolute inset-0 m-2 flex flex-col items-center justify-center gap-1 rounded-md border border-dashed border-cyan/30 bg-gradient-to-br from-sign/10 via-transparent to-violet/10 p-3 text-center sm:m-3">
          <p className="font-display text-sm font-bold text-white/80 sm:text-base">{label}</p>
          <p className="text-xs text-cyan/70 sm:text-sm">Screenshot</p>
          <p className="mt-1 hidden text-[11px] text-white/40 sm:block">
            Replace with the original SS: <span className="font-mono">{src.split('/').pop()}</span>
          </p>
        </div>
      )}
    </div>
  )
  if (!frame)
    return (
      <figure className={`overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-glow ${className}`}>
        {body}
      </figure>
    )
  return (
    <figure className={`overflow-hidden rounded-xl border border-white/15 bg-void shadow-[0_30px_80px_-30px_rgba(79,124,255,0.55)] ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.05] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/80" />
        <span className="ml-3 truncate rounded bg-white/10 px-3 py-0.5 text-[11px] text-mute">{label}</span>
      </div>
      {body}
    </figure>
  )
}
