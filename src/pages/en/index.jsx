import { useEffect } from 'react'
import Footer from '../../components/Footer.jsx'
import HeaderEn from '../../components/HeaderEn.jsx'
import IndexBackground from '../../components/backgrounds/IndexBackground.jsx'
import ScrollProgressBar from '../../components/backgrounds/ScrollProgressBar.jsx'
import Cta from '../../components/sections/en/Cta.jsx'
import Essentials from '../../components/sections/en/Essentials.jsx'
import Faq from '../../components/sections/en/Faq.jsx'
import Hero from '../../components/sections/en/Hero.jsx'
import Lessons from '../../components/sections/en/Lessons.jsx'
import PainPoints from '../../components/sections/en/PainPoints.jsx'
import Pricing from '../../components/sections/en/Pricing.jsx'
import PronunciationPromise from '../../components/sections/en/PronunciationPromise.jsx'
import Testimonials from '../../components/sections/en/Testimonials.jsx'
import WhyBrighture from '../../components/sections/en/WhyBrighture.jsx'
import enLandingConfig from './config.js'

function EnLandingPage() {
  useEffect(() => {
    document.title = enLandingConfig.title
  }, [])

  return (
    <>
      <ScrollProgressBar />
      <main id="top" className="relative w-full text-[#12151d]">
        <IndexBackground />

        <div className="w-full bg-[#e6e6e6]">
          <div className="mx-auto w-full max-w-[1680px]">
            <HeaderEn />
            <Hero />
          </div>
        </div>
        <div className="w-full bg-[#fafafa]">
          <PainPoints />
        </div>
        <div className="mx-auto w-full max-w-[1680px]">
          <PronunciationPromise />
          <Essentials />
        </div>
        <div className="w-full bg-[#f3f1f1]">
          <WhyBrighture />
        </div>
        <div className="mx-auto w-full max-w-[1680px]">
          <Lessons />
        </div>
        <div className="w-full bg-[#eef2f4]">
          <Testimonials />
        </div>
        <div className="mx-auto w-full max-w-[1680px]">
          <Pricing />
          <Faq />
          <Cta />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default EnLandingPage
