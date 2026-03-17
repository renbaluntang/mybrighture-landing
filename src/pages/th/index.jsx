import { useEffect } from 'react'
import Header from '../../components/HeaderEn.jsx'
import Footer from '../../components/Footer.jsx'
import IndexBackground from '../../components/backgrounds/IndexBackground.jsx'
import ScrollProgressBar from '../../components/backgrounds/ScrollProgressBar.jsx'
import Approach from '../../components/sections/th/Approach.jsx'
import Courses from '../../components/sections/th/Courses.jsx'
import Cta from '../../components/sections/th/Cta.jsx'
import Feedback from '../../components/sections/th/Feedback.jsx'
import Hero from '../../components/sections/th/Hero.jsx'
import LearnOnline from '../../components/sections/th/LearnOnline.jsx'
import WhyBrighture from '../../components/sections/th/WhyBrighture.jsx'
import thLandingConfig from './config.js'

function ThLandingPage() {
  useEffect(() => {
    document.title = thLandingConfig.title
  }, [])

  return (
    <>
      <ScrollProgressBar />
      <main id="top" className="relative w-full text-[#12151d]">
        <div className="w-full bg-[#eceaea]">
        <Header/>
        <Hero />
        </div>
        <WhyBrighture />
        <Approach />
        <Courses />
        <Feedback />
        <LearnOnline />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default ThLandingPage
