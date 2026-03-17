import { useEffect, useRef, useState } from 'react'
import heroImage from '../../../assets/image/hero_th.jpeg'

const ROTATING_WORDS = ['Clearly', 'Professionally', 'Logically']

function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setStarted(true); observer.disconnect() }
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let frame
    const duration = 1400
    const start = performance.now()
    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [started, target])

  return <span ref={ref}>{count}{suffix}</span>
}

function Hero() {
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    const current = ROTATING_WORDS[wordIdx]
    let timeout
    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIdx + 1)); setCharIdx(v => v + 1) }, 65)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1500)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => { setDisplayed(current.slice(0, charIdx - 1)); setCharIdx(v => v - 1) }, 35)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx(v => (v + 1) % ROTATING_WORDS.length)
    }
    return () => clearTimeout(timeout)
  }, [wordIdx, charIdx, deleting])

  return (
    <section id="hero" className="relative w-full overflow-hidden bg-[#eceaea]">
      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-10 px-4 pb-10 pt-8 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-16 lg:pb-14 lg:pt-12">
        <div>
          <p className="inline-flex items-center gap-2 rounded-xl border border-[#fbd0bf] bg-[#edf0f2] px-4 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.13em] text-[#f15a22]">
            <i className="fa-solid fa-award sd appear shrink-0"></i>
            Free trial lesson with assessment
          </p>

          <h1 className="mt-5 text-[2.2rem] font-extrabold leading-[1.03] tracking-[-0.02em] text-[#1a2340] sm:text-[3rem] lg:text-[3.6rem]">
            Professional English
            <br />
            for{' '}
            <span className="text-[#f15a22]">
              Global Careers
            </span>
          </h1>

          <p className="mt-6 max-w-[520px] text-[1rem] leading-[1.75] text-[#4a5568] sm:text-[1.05rem]">
            Brighture English Academy prepares Vietnamese professionals, university students, and early-career workers to communicate with clarity, structure, and professional confidence.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/register/index.html"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#e8400a] to-[#ff6a3d] px-8 py-3.5 text-[1.05rem] font-bold tracking-wide text-white shadow-[0_8px_25px_-5px_rgba(232,64,10,0.5)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_30px_-5px_rgba(232,64,10,0.6)]"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[200%]" aria-hidden="true" />
              <span className="relative font-bold text-white flex items-center gap-2">
                Start Free Trial
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-9 grid max-w-[560px] grid-cols-3 gap-5 border-t border-[#d8dde7] pt-6">
            {[
              { value: 15, suffix: '', label: 'programs' },
              { value: 50, suffix: 'min', label: 'per lesson' },
              { value: 1200, suffix: '+', label: 'learners' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[1.5rem] font-extrabold leading-none text-[#f15a22]">
                  <Counter target={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#718096]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[1.2rem] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
            <img
              src={heroImage}
              alt="Vietnamese professional in an online English class"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-full min-h-[280px] w-full object-cover sm:min-h-[360px] lg:min-h-[470px]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111827]/28 to-transparent" />
          </div>

          <div className="absolute -bottom-4 -left-4 animate-[vn-float_3s_ease-in-out_infinite] rounded-xl bg-white px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:px-4 sm:py-2.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e] animate-[vn-pulse_1.8s_ease-in-out_infinite]" />
              <span className="text-[0.72rem] font-semibold text-[#1a2340] sm:text-[0.78rem]">Live Class in Progress</span>
            </div>
          </div>

          <div className="absolute -right-3 -top-4 animate-[vn-float_3s_ease-in-out_infinite_0.4s] rounded-xl bg-white px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:px-4 sm:py-2.5">
            <div className="flex items-center gap-2">
              <span className="text-[0.95rem]" aria-hidden="true">⭐</span>
              <div>
                <p className="text-[0.7rem] font-bold text-[#1a2340] sm:text-[0.76rem]">Expert Feedback</p>
                <p className="text-[0.63rem] text-[#4a5568] sm:text-[0.68rem]">After every lesson</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes vn-float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes vn-pulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.45); opacity: 0.6; } }
      `}</style>
    </section>
  )
}

export default Hero
