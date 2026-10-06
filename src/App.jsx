import BackgroundFX from './components/BackgroundFX.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import Problem from './sections/Problem.jsx'
import HowItWorks from './sections/HowItWorks.jsx'
import Citizens from './sections/Citizens.jsx'
import AITech from './sections/AITech.jsx'
import Officers from './sections/Officers.jsx'
import TechStack from './sections/TechStack.jsx'
import Architecture from './sections/Architecture.jsx'
import Showcase from './sections/Showcase.jsx'
import { Why, DemoCredentials, CTA, Footer } from './sections/Closing.jsx'

export default function App() {
  return (
    <>
      <BackgroundFX />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Problem />
        <HowItWorks />
        <Citizens />
        <AITech />
        <Officers />
        <TechStack />
        <Architecture />
        <Showcase />
        <Why />
        <DemoCredentials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
