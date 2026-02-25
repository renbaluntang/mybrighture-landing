import ctaL from '../../assets/image/CTA-L.png'
import ctaR from '../../assets/image/CTA-R.png'
import CtaAmbientBackground from '../backgrounds/CtaAmbientBackground'
import CtaCloudLayer from '../backgrounds/CtaCloudLayer'

function CtaSection() {
  return (
    <section id="contact" className="px-4 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-16">
        <div className="mx-auto w-full max-w-[1680px]">
          <div className="relative overflow-hidden rounded-[28px] border border-[#d7d7d7] bg-[radial-gradient(140%_120%_at_50%_0%,#f7f7f7_0%,#ececec_55%,#e6e6e6_100%)] shadow-[0_18px_40px_-22px_rgba(40,40,40,0.35)]">
            <CtaAmbientBackground />
            <CtaCloudLayer />

            <div className="relative z-10 grid items-center gap-2 px-2 sm:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] sm:gap-6 sm:px-4 lg:justify-center lg:gap-0 lg:grid-cols-[minmax(170px,230px)_minmax(340px,480px)_minmax(170px,230px)] lg:px-6">
            <div className="flex justify-center self-start pt-2 sm:hidden">
              <img
                src={ctaL}
                alt="CTA-l"
                className="block w-auto max-w-[250px] object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.2)]"
              />
            </div>
            <div className="hidden justify-center gap-0 self-start pt-8 sm:flex lg:hidden">
              <img
                src={ctaL}
                alt="CTA-l"
                className="block w-auto max-w-[400px] object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.2)]"
              />
            </div>

            <div className="hidden justify-center self-start pt-10 lg:order-1 lg:flex">
              <img
                src={ctaL}
                alt="CTA-l"
                className="block w-auto max-w-[400px] object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.2)] lg:max-w-[400px]"
              />
            </div>

            <div className="hidden justify-center self-start pt-10 lg:order-3 lg:flex">
              <img
                src={ctaR}
                alt="CTA-r"
                className="block w-auto max-w-[400px] object-contain drop-shadow-[0_14px_22px_rgba(0,0,0,0.2)] lg:max-w-[400px]"
              />
            </div>

            <div className="mx-auto w-full max-w-[760px] px-4 pb-7 pt-2 text-center sm:px-6 sm:py-10 sm:text-left lg:order-2 lg:max-w-[480px] lg:px-5 lg:py-12 lg:text-center">
              <p className="inline-flex rounded-full border border-[#d8d8d8] bg-white/70 px-3 py-1 text-[10px] font-semibold tracking-[0.03em] text-[#4d4d4d] sm:px-4 sm:text-[12px]">
                Free Trial Lesson with Assessment
              </p>
              <h2 className="mt-3 text-[26px] font-bold leading-[0.95] tracking-[-0.02em] text-[#e8400a] sm:text-[30px] lg:text-[32px]">Sign up for free</h2>
              <a
                href="#"
                className="group relative mt-7 inline-flex animate-bounce items-center justify-center overflow-hidden rounded-md border border-[#e8400a] bg-[#e8400a] px-7 py-2.5 text-[12px] font-bold text-white shadow-[0_0_0_0_rgba(232,64,10,0.35)] transition-all duration-300 ease-out sm:px-9 sm:py-3 sm:text-[14px] hover:-translate-y-0.5 hover:[animation-play-state:paused] hover:bg-white hover:text-[#e8400a] hover:shadow-[0_10px_24px_-8px_rgba(232,64,10,0.35)] active:translate-y-0 active:scale-[0.99]"
              >
                <span className="pointer-events-none absolute inset-y-0 left-[-22%] w-[22%] -skew-x-12 bg-white/25 transition-transform duration-700 group-hover:translate-x-[580%]" />
                <span
                  className="absolute inset-0 -z-10 rounded-md bg-[#e8400a]/25"
                  style={{ animation: 'ctaGlow 1.8s ease-in-out infinite' }}
                  aria-hidden="true"
                />
                Try a free trial lesson
                <span className="ml-2 inline-block text-[11px] sm:text-[12px]" aria-hidden="true">
                  &gt;
                </span>
              </a>
            </div>
            </div>
          </div>
      </div>
      <style>{`
        @keyframes ctaGlow {
          0%, 100% { opacity: 0.28; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.04); }
        }
      `}</style>
    </section>
  )
}

export default CtaSection
