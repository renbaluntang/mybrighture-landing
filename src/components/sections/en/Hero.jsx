import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import heroImage from '../../../assets/image/original_hero.png'

const AVATARS = [
  { initials: 'AK', bg: '#fde0d4' },
  { initials: 'MS', bg: '#d4e8fd' },
  { initials: 'TN', bg: '#d4fde4' },
  { initials: 'RL', bg: '#f0d4fd' },
]

function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textOffset = Math.min(scrollY * 0.08, 36)
  const imageOffset = Math.min(scrollY * 0.12, 54)

  return (
    <section id="hero" className="relative pt-2 pb-8 md:pt-0 md:pb-10">
      <div className="grid w-full md:max-h-[620px] md:grid-cols-2 xl:mx-auto lg:max-h-none lg:h-[87vh] xl:w-10/12">
        <div
          className="relative z-10 flex items-center px-5 pb-8 pt-6 sm:px-10 md:order-1 lg:px-16"
          style={{ transform: `translateY(${-textOffset}px)`, willChange: 'transform' }}
        >
          <div className="max-w-[700px]">
            {/* Badge */}
            <p
              className="mr-auto inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-[#e8400a] shadow-sm border border-[#ffcfbe] my-2"
              style={{ animation: 'heroTextIn 0.6s ease-out 0.05s both' }}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e8400a] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e8400a]" />
              </span>
              <span className="uppercase tracking-[0.18em] leading-[1.4]">
                Free trial lesson with assessment
              </span>
            </p>

            {/* Headline */}
            <h1
              className="h-auto w-auto max-w-full border-0 text-left text-3xl font-extrabold not-italic leading-[1.05] tracking-[-0.02em] text-[#121a35] sm:text-4xl lg:text-5xl xl:text-[3.5rem] [z-index:1]"
              style={{
                fontFamily: 'var(--s-font-6bb12d8c, var(--s-font-ee93ad8a))',
                margin: '0',
                animation: 'heroTextIn 0.65s ease-out 0.2s both',
              }}
            >
              <span className="text-[#f24c18]">Confidence</span> Starts with
              <br className="hidden sm:block" />
              {' '}<span className="text-[#f24c18]">Pronunciation</span>
            </h1>

            {/* Subtitle */}
            <p
              className="h-auto w-auto max-w-[620px] flex-1 px-0 text-left text-sm font-medium leading-[1.6] text-[#3f4a61] sm:text-base"
              style={{
                fontFamily: 'var(--s-font-ee93ad8a)',
                margin: '24px 0 0 0',
                animation: 'heroTextIn 0.65s ease-out 0.38s both',
              }}
            >
              Our rigorously trained teachers provide personalized, step-by-step guidance to help you build clear and confident English pronunciation.
            </p>

            {/* CTA group */}
            <div
              className="mt-10 flex flex-col gap-4 items-start max-[425px]:items-center"
              style={{ animation: 'heroTextIn 0.65s ease-out 0.54s both' }}
            >
              <div className="flex flex-wrap items-center gap-4">
                {/* Primary CTA */}
                <a
                  href="/register/index.html"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#e8400a] to-[#ff6a3d] px-8 py-3 text-base font-bold tracking-wide text-white shadow-[0_8px_25px_-5px_rgba(232,64,10,0.5)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_30px_-5px_rgba(232,64,10,0.6)]"
                >
                  {/* shimmer sweep */}
                  <span
                    className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[200%]"
                    aria-hidden="true"
                  />
                  <span className="relative font-bold text-white flex items-center gap-2">
                    Try a free lesson
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {AVATARS.map((a) => (
                    <span
                      key={a.initials}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white text-[10px] font-bold text-[#3f4a61]"
                      style={{ background: a.bg }}
                      aria-hidden="true"
                    >
                      {a.initials}
                    </span>
                  ))}
                </div>
                <p className="text-xs font-medium text-[#5a6475]">
                  Joined by <span className="font-bold text-[#121a35]">1,200+</span> learners
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image column */}
        <div
          className="relative z-10 flex aspect-[4/5] w-full items-end overflow-hidden rounded-t-[2.6rem] bg-[#ccd3d9] md:order-2 md:aspect-auto md:min-h-full md:rounded-t-none md:rounded-bl-[4.8rem]"
          style={{ transform: `translateY(${imageOffset}px)`, willChange: 'transform', animation: 'heroFadeIn 0.9s ease-out 0.15s both' }}
        >
          <img
            src={heroImage}
            alt="Smiling student talking"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="h-full w-full object-cover object-top md:!object-center"
          />
          {/* Text overlay */}
          <div className="absolute bottom-5 left-5 pr-5 z-20 md:bottom-6 md:left-6 md:pr-6 lg:bottom-10 lg:left-10 lg:pr-10 xl:bottom-16 xl:left-16 xl:pr-16">
            <h2 className="text-2xl font-extrabold tracking-tight text-white drop-shadow-lg [text-shadow:_0_2px_10px_rgb(0_0_0_/_60%)] sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl leading-[1.2]">
              Learn Pronunciation.<br />
              Unlock Your Opportunities.
            </h2>
          </div>
          {/* Gradient overlay for text readability */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

// Keyframes injected once at module level
if (typeof document !== 'undefined' && !document.getElementById('hero-keyframes')) {
  const style = document.createElement('style')
  style.id = 'hero-keyframes'
  style.textContent = `
    @keyframes heroTextIn {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes heroFadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  `
  document.head.appendChild(style)
}
