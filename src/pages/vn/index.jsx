import { useEffect } from 'react'
import Header from '../../components/HeaderEn.jsx'
import Footer from '../../components/Footer.jsx'
import ScrollProgressBar from '../../components/backgrounds/ScrollProgressBar.jsx'
import Hero from '../../components/sections/vn/Hero.jsx'
import PainPoints from '../../components/sections/vn/PainPoints.jsx'
import Approach from '../../components/sections/vn/Approach.jsx'
import Programs from '../../components/sections/vn/Programs.jsx'
import Feedback from '../../components/sections/vn/Feedback.jsx'
import LearnOnline from '../../components/sections/vn/LearnOnline.jsx'
import Cta from '../../components/sections/vn/Cta.jsx'
import vnLandingConfig from './config.js'

function VnLandingPage() {
  useEffect(() => {
    document.title = vnLandingConfig.title
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

export default VnLandingPage
