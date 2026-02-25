import Header from '../components/Header.jsx'
import IndexBackground from '../components/backgrounds/IndexBackground.jsx'
import HeroSection from '../components/sections/HeroSection.jsx'
import PainPointsSection from '../components/sections/PainPointsSection.jsx'
import PronunciationPromiseSection from '../components/sections/PronunciationPromiseSection.jsx'
import EssentialsSection from '../components/sections/EssentialsSection.jsx'
import WhyBrightureSection from '../components/sections/WhyBrightureSection.jsx'
import LessonsSection from '../components/sections/LessonsSection.jsx'
import TestimonialsSection from '../components/sections/TestimonialsSection.jsx'
import PricingSection from '../components/sections/PricingSection.jsx'
import FaqSection from '../components/sections/FaqSection.jsx'
import CtaSection from '../components/sections/CtaSection.jsx'
import Footer from '../components/Footer.jsx'

function IndexPage() {
  return (
    <>
      <main className="relative w-full text-[#12151d]">
        <IndexBackground />

        <div className="w-full bg-[#e6e6e6]">
          <div className="mx-auto w-full max-w-[1680px]">
            <Header />
            <HeroSection />
          </div>
        </div>
        <div className="w-full bg-[#fafafa]">
          <PainPointsSection />
        </div>
        <div className="mx-auto w-full max-w-[1680px]">
          <PronunciationPromiseSection />
          <EssentialsSection />
        </div>
        <div className="w-full bg-[#f3f1f1]">
          <WhyBrightureSection />
        </div>
        <div className="mx-auto w-full max-w-[1680px]">
          <LessonsSection />
        </div>
        <div className="w-full bg-[#eef2f4]">
          <TestimonialsSection />
        </div>
        <div className="mx-auto w-full max-w-[1680px]">
          <PricingSection />
          <FaqSection />
          <CtaSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default IndexPage
