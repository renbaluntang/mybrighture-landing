import Header from '../components/Header.jsx'
import IndexBackground from '../components/backgrounds/IndexBackground.jsx'
import Hero from '../components/sections/Hero.jsx'
import PainPoints from '../components/sections/PainPoints.jsx'
import PronunciationPromise from '../components/sections/PronunciationPromise.jsx'
import Essentials from '../components/sections/Essentials.jsx'
import WhyBrighture from '../components/sections/WhyBrighture.jsx'
import Lessons from '../components/sections/Lessons.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import Pricing_JP from '../components/sections/Pricing_JP.jsx'
import Faq from '../components/sections/Faq.jsx'
import Cta from '../components/sections/Cta.jsx'
import Footer from '../components/Footer.jsx'

function IndexPage() {
  return (
    <>
      <main id="top" className="relative w-full text-[#12151d]">
        <IndexBackground />

        <div className="w-full bg-[#e6e6e6]">
          <div className="mx-auto w-full max-w-[1680px]">
            <Header />
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
          <Pricing_JP />
          <Faq />
          <Cta />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
