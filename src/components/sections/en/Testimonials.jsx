import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const baseTestimonials = [
  {
    label: 'TOEIC and Real English Skills',
    title: '"From TOEIC 900 to spoken English Improving pronunciation first"',
    quote:
      'I was shocked in my very first lesson. Until then, I thought I was fairly good at listening and pronunciation. But in that first class, I received many corrections and realized how much I was actually missing.\n\nThe teacher spoke at a natural speed. The pronunciation was clear and beautiful. I thought, "This is how I want to speak."\n\nWhen I recorded the lesson and compared the teacher\'s voice with my own, I was surprised by how different my pronunciation really was.',
    name: 'Yさん',
  },
  {
    label: 'Smoother communication',
    title: '"What I learned in school was completely different"',
    quote:
      'After I started learning pronunciation at Brighture English Academy, I kept feeling that it was totally different from what I learned at school.\n\nI began the lessons almost as a beginner, but even so, I quickly realized there was a big gap between school pronunciation and the pronunciation taught at Brighture.\n\nAfter learning proper pronunciation, people asked me to repeat myself far less often. By understanding the correct sounds, my listening also improved, and I didn\'t need to ask others to repeat themselves as much.\n\nOverall, communication became surprisingly smooth.',
    name: 'Aさん',
  },
  {
    label: 'From Beginner to Advanced',
    title: '"A beginner finds a turning point through pronunciation\nNow a manager at a global company"',
    quote:
      'For the first time, I felt, "I might really be able to speak English." Before that, my test scores improved, but I never felt that my spoken English was getting better.\n\nEspecially at the beginner level, I believe pronunciation must come first. If the sounds are wrong, even good knowledge can\'t be used effectively.\n\nBy first understanding the sounds and learning how to produce them correctly, then studying grammar and reading, I felt myself naturally getting closer to real spoken English.',
    name: 'Hさん',
  },
]

const N = baseTestimonials.length
const AUTOPLAY_INTERVAL = 3500  // ms between auto-advances
const RESUME_DELAY = 10000      // ms of inactivity before autoplay resumes after button press

const buildCards = () => [
  ...baseTestimonials.map((t, i) => ({ ...t, key: `pre-${i}`,  realIndex: i })),
  ...baseTestimonials.map((t, i) => ({ ...t, key: `mid-${i}`,  realIndex: i })),
  ...baseTestimonials.map((t, i) => ({ ...t, key: `post-${i}`, realIndex: i })),
]

const CARDS = buildCards()
const INITIAL_INDEX = N

function Testimonials() {
  const trackRef       = useRef(null)
  const activeIndexRef = useRef(INITIAL_INDEX)
  const isAnimatingRef = useRef(false)
  const autoPlayRef    = useRef(null)  // setInterval handle
  const resumeTimerRef = useRef(null)  // setTimeout handle for 10s resume

  const [activeIndex, setActiveIndex] = useState(INITIAL_INDEX)
  const [pressedBtn,  setPressedBtn]  = useState(null)   // null | 'prev' | 'next'
  const [isPlaying,   setIsPlaying]   = useState(true)

  // ── scroll helpers ────────────────────────────────────────────────────────

  const getScrollLeftForIndex = useCallback((idx) => {
    const track = trackRef.current
    if (!track) return 0
    const card = track.children[idx]
    if (!card) return 0
    return card.offsetLeft - track.offsetWidth / 2 + card.offsetWidth / 2
  }, [])

  const jumpTo = useCallback((idx) => {
    const track = trackRef.current
    if (!track) return
    track.style.scrollBehavior = 'auto'
    track.scrollLeft = getScrollLeftForIndex(idx)
    track.style.scrollBehavior = ''
    activeIndexRef.current = idx
    setActiveIndex(idx)
  }, [getScrollLeftForIndex])

  const slideTo = useCallback((idx) => {
    if (isAnimatingRef.current) return
    isAnimatingRef.current = true

    const track = trackRef.current
    if (!track) { isAnimatingRef.current = false; return }

    track.style.scrollBehavior = 'smooth'
    track.scrollLeft = getScrollLeftForIndex(idx)
    activeIndexRef.current = idx
    setActiveIndex(idx)

    setTimeout(() => {
      track.style.scrollBehavior = ''
      const cur = activeIndexRef.current
      if      (cur < N)      jumpTo(cur + N)
      else if (cur >= N * 2) jumpTo(cur - N)
      isAnimatingRef.current = false
    }, 420)
  }, [getScrollLeftForIndex, jumpTo])

  const move = useCallback((dir) => {
    slideTo(activeIndexRef.current + dir)
  }, [slideTo])

  // ── autoplay ──────────────────────────────────────────────────────────────

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    autoPlayRef.current = setInterval(() => move(1), AUTOPLAY_INTERVAL)
    setIsPlaying(true)
  }, [move])

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
      autoPlayRef.current = null
    }
    setIsPlaying(false)
  }, [])

  const clearResumeTimer = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current)
      resumeTimerRef.current = null
    }
  }, [])

  // Schedule autoplay to resume after RESUME_DELAY ms of button inactivity
  const scheduleResume = useCallback(() => {
    clearResumeTimer()
    resumeTimerRef.current = setTimeout(() => {
      startAutoPlay()
    }, RESUME_DELAY)
  }, [clearResumeTimer, startAutoPlay])

  // ── button handlers ───────────────────────────────────────────────────────

  const handlePrev = () => {
    stopAutoPlay()
    clearResumeTimer()
    setPressedBtn('prev')
    move(-1)
    setTimeout(() => setPressedBtn(null), 180)
    scheduleResume()
  }

  const handleNext = () => {
    stopAutoPlay()
    clearResumeTimer()
    setPressedBtn('next')
    move(1)
    setTimeout(() => setPressedBtn(null), 180)
    scheduleResume()
  }

  // ── lifecycle ─────────────────────────────────────────────────────────────

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      jumpTo(INITIAL_INDEX)
      startAutoPlay()
    })
    return () => {
      cancelAnimationFrame(raf)
      stopAutoPlay()
      clearResumeTimer()
    }
  }, [jumpTo, startAutoPlay, stopAutoPlay, clearResumeTimer])

  // Pause on hover / touch of the track; resume when cursor leaves
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onEnter = () => { stopAutoPlay(); clearResumeTimer() }
    const onLeave = () => startAutoPlay()
    track.addEventListener('mouseenter', onEnter)
    track.addEventListener('mouseleave', onLeave)
    track.addEventListener('touchstart',  onEnter, { passive: true })
    track.addEventListener('touchend',    onLeave)
    return () => {
      track.removeEventListener('mouseenter', onEnter)
      track.removeEventListener('mouseleave', onLeave)
      track.removeEventListener('touchstart',  onEnter)
      track.removeEventListener('touchend',    onLeave)
    }
  }, [stopAutoPlay, startAutoPlay, clearResumeTimer])

  // ── render ────────────────────────────────────────────────────────────────

  const getButtonClass = (which) => {
    const pressed = pressedBtn === which
    return [
      'relative inline-flex h-12 w-12 items-center justify-center rounded-xl',
      'ring-1 transition-all duration-150 select-none',
      pressed
        ? 'scale-90 bg-[#e8400a] text-white shadow-inner ring-[#e8400a]'
        : 'bg-[#f1f1f1] text-[#f24506] ring-black/5 hover:bg-[#e9e9e9] active:scale-90 active:bg-[#e8400a] active:text-white',
    ].join(' ')
  }

  return (
    <section id="voice" className="relative px-4 py-14 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto w-full max-w-[1680px]">

        {/* Header */}
        <div className="grid items-start !items-center gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <p className="text-[15px] font-bold text-[#e8400a]">● Student Voice</p>
            <h2
              className="mt-5 text-[32px] font-semibold not-italic leading-[1.25] text-[#1f2d4a]"
              style={{ fontFamily: 'var(--s-font-ee93ad8a)' }}
            >
              Master English. Unlock Your Opportunities.
            </h2>
          </div>
          <p className="pt-1 text-[16px] leading-[1.85] text-[#2b2b2b]">
            At Brighture English Academy, many students have shared their experiences with us. Here are just a few highlights.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-12">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-hidden px-1 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CARDS.map((item, arrayIndex) => {
              const isFeatured = arrayIndex === activeIndex
              return (
                <article
                  key={item.key}
                  className={`flex w-[92%] shrink-0 flex-col rounded-2xl border p-6 transition-all duration-500 sm:w-[64%] lg:w-[36%] xl:w-[27%] ${
                    isFeatured
                      ? 'scale-[1.055] border-[#f38a6a] bg-white shadow-[0_24px_40px_rgba(21,34,58,0.16)]'
                      : 'border-[#dde3e8] bg-[#f8f9fa]'
                  }`}
                >
                  <p className="mr-auto inline-flex items-center rounded-full bg-[#e9e9e9] px-3 py-1 text-[13px] font-bold text-[#e8400a]">
                    ● {item.label}
                  </p>
                  <h3
                    className="mt-6 min-h-[52px] text-[16px] font-medium leading-[1.6] text-[#2b3a58]"
                    style={{ fontFamily: 'var(--s-font-ee93ad8a)' }}
                  >
                    {item.title}
                  </h3>
                  <div className="mt-6 flex flex-1 items-start rounded-2xl bg-[#ececec] p-4">
                    <p className="text-[13px] font-medium leading-[1.6] text-[#2f2f2f]">{item.quote}</p>
                  </div>
                  <p
                    className="mt-3 text-right text-[12px] font-medium leading-[1.6] text-[#979797]"
                    style={{ fontFamily: 'var(--s-font-ee93ad8a)' }}
                  >
                    {item.name}
                  </p>
                </article>
              )
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-end gap-3">

          {/* Paused indicator — fades in when autoplay is stopped by button press */}
          <span
            className={`mr-1 text-[12px] text-[#bbb] transition-opacity duration-500 ${
              isPlaying ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
            aria-live="polite"
          >
            自動再生を一時停止中 (10秒後に再開)
          </span>

          <button
            type="button"
            onClick={handlePrev}
            className={getButtonClass('prev')}
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className={getButtonClass('next')}
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
 
