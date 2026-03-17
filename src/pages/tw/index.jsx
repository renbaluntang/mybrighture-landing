import { useEffect } from 'react'
import Header from '../../components/HeaderEn.jsx'
import Footer from '../../components/Footer.jsx'
import ScrollProgressBar from '../../components/backgrounds/ScrollProgressBar.jsx'
import Hero from '../../components/sections/tw/Hero.jsx'
import PainPoints from '../../components/sections/tw/PainPoints.jsx'
import Approach from '../../components/sections/tw/Approach.jsx'
import Programs from '../../components/sections/tw/Programs.jsx'
import Feedback from '../../components/sections/tw/Feedback.jsx'
import LearnOnline from '../../components/sections/tw/LearnOnline.jsx'
import Cta from '../../components/sections/tw/Cta.jsx'
import twLandingConfig from './config.js'

function TwLandingPage() {
  useEffect(() => {
    document.title = twLandingConfig.title
  }, [])

  return (
    <>
      <ScrollProgressBar />
      <main id="top" className="relative w-full text-[#12151d]">
        <div className="w-full bg-[#eceaea]">
          <Header />
          <Hero />
        </div>
        <PainPoints />
        <Approach />
        <Programs />
        <Feedback />
        <LearnOnline />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default TwLandingPage
