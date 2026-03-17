import { useScrollReveal } from '../../../hooks/useScrollReveal'
import CtaAmbientBackground from '../../backgrounds/CtaAmbientBackground'
import CtaCloudLayer from '../../backgrounds/CtaCloudLayer'
import ctaL from '../../../assets/image/CTA-L.png'
import ctaR from '../../../assets/image/CTA-R.png'

function Cta() {
  const [sectionRef, sectionVisible] = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="contact" className="px-4 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-16">
      <div
        ref={sectionRef}
        className="mx-auto w-full max-w-[1680px] transition-all duration-700 ease-out"
        style={{ opacity: sectionVisible ? 1 : 0, transform: sectionVisible ? 'translateY(0)' : 'translateY(28px)' }}
      >
        <div className="relative overflow-hidden rounded-[28px] border border-[#d7d7d7] bg-[radial-gradient(140%_120%_at_50%_0%,#f7f7f7_0%,#ececec_55%,#e6e6e6_100%)] shadow-[0_18px_40px_-22px_rgba(40,40,40,0.35)]">
          <CtaAmbientBackground />
          <CtaCloudLayer />

          <div className="relative z-10 grid items-center gap-2 px-2 sm:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] sm:gap-6 sm:px-4 lg:justify-center lg:gap-0 lg:grid-cols-[minmax(170px,230px)_minmax(340px,520px)_minmax(170px,230px)] lg:px-6">

            {/* Left image mobile */}
            <div className="flex justify-center self-start pt-2 sm:hidden">
              <img src={ctaL} alt="" loading="lazy" decoding="async" className="block w-auto max-w-[250px] object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.2)]" aria-hidden="true" />
            </div>
            {/* Left image sm */}
            <div className="hidden justify-center self-start pt-8 sm:flex lg:hidden">
              <img src={ctaL} alt="" loading="lazy" decoding="async" className="block w-auto max-w-[400px] object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.2)]" aria-hidden="true" />
            </div>
            {/* Left image lg */}
            <div className="hidden justify-center self-start pt-10 lg:order-1 lg:flex">
              <img src={ctaL} alt="" loading="lazy" decoding="async" className="block w-auto max-w-[400px] object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.2)]" aria-hidden="true" />
            </div>
            {/* Right image lg */}
            <div className="hidden justify-center self-start pt-10 lg:order-3 lg:flex">
              <img src={ctaR} alt="" loading="lazy" decoding="async" className="block w-auto max-w-[400px] object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.2)]" aria-hidden="true" />
            </div>

            {/* Center content */}
            <div className="mx-auto w-full max-w-[760px] px-4 pb-8 pt-3 text-center sm:px-6 sm:py-10 lg:order-2 lg:max-w-[520px] lg:px-5 lg:py-12">
              <p className="inline-flex rounded-full border border-[#d8d8d8] bg-white/70 px-3 py-1 text-[10px] font-semibold tracking-[0.03em] text-[#4d4d4d] sm:px-4 sm:text-[12px]">
                Free Pronunciation Trial Lesson
              </p>

              <h2 className="mt-4 text-[26px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[30px] lg:text-[32px]">
                <span className="text-[#e8400a]">Start with a</span>
                <br />
                <span className="text-[#1a2340]">Free Pronunciation Trial</span>
              </h2>

              <p className="mx-auto mt-4 max-w-sm text-[13px] leading-[1.8] text-[#4a5568] sm:text-[14px]">
                Experience our structured approach with a free Pronunciation trial lesson and see how focused feedback can improve your clarity immediately.
              </p>

              <a
                href="/register/index.html"
                className="group relative mt-7 inline-flex animate-bounce items-center justify-center overflow-hidden rounded-md border border-[#e8400a] bg-[#e8400a] px-7 py-2.5 text-[12px] font-bold text-white shadow-[0_0_0_0_rgba(232,64,10,0.35)] transition-all duration-300 ease-out sm:px-9 sm:py-3 sm:text-[14px] hover:-translate-y-0.5 hover:[animation-play-state:paused] hover:bg-white hover:text-[#e8400a] hover:shadow-[0_10px_24px_-8px_rgba(232,64,10,0.35)] active:translate-y-0 active:scale-[0.99]"
              >
                <span className="pointer-events-none absolute inset-y-0 left-[-22%] w-[22%] -skew-x-12 bg-white/25 transition-transform duration-700 group-hover:translate-x-[580%]" />
                <span className="absolute inset-0 -z-10 rounded-md bg-[#e8400a]/25" style={{ animation: 'twCtaGlow 1.8s ease-in-out infinite' }} aria-hidden="true" />
                Book Free Trial Lesson
                <span className="ml-2 inline-block text-[11px] sm:text-[12px]" aria-hidden="true">&gt;</span>
              </a>

              <div className="mt-5">
                <a
                  href="mailto:info@brighture.jp"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#4a5568] underline-offset-2 transition-all duration-200 hover:text-[#e8400a] hover:underline sm:text-[13px]"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  info@brighture.jp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twCtaGlow {
          0%, 100% { opacity: 0.28; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.04); }
        }
      `}</style>
    </section>
  )
}

export default Cta
