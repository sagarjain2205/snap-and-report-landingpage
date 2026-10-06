import Reveal from '../components/Reveal.jsx'

export default function Problem() {
  return (
    <section className="sect">
      <div className="wrap grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="h2">Illegal parking shouldn’t disappear into paperwork.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-mute leading-relaxed">
            Traditional reporting and enforcement workflows can involve manual reporting, separate verification steps and back-and-forth coordination. Evidence gets scattered, and status is hard to follow.
          </p>
          <p className="mt-5 text-lg leading-relaxed">
            Snap &amp; Report puts the whole flow in one place: a citizen submits a photo, computer vision helps read the scene, and an authorized officer verifies and acts — with every step trackable.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
