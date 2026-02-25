import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const baseTestimonials = [
  {
    label: 'TOEICと英語力',
    title: '"TOEIC 900点 から「話せる英語」を目指して発音から改善"',
    quote:
      '最初の授業で、衝撃を受けました。それまでは自分なりにリスニングも発音も得意なほうだと思っていたのですが、初回の授業でたくさんの指摘を受け、「できていない自分」に気づかされました。先生の話すスピードはナチュラルスピード。発音も美しく、「こんなふうに話したい」と思いました。授業を録音して自分の音声と聞き比べてみると、思っていた以上に自分の発音が違っていて、その差に驚きました。',
    name: 'Yさん',
  },
  {
    label: 'コミュニケーションがスムーズに',
    title: '"学校で学んだ発音はまったく別物だった"',
    quote:
      'Brightureで発音を学び始めてからずっと感じていたのは、「学校で学んできたものとは本当に違う」ということです。ほぼ初心者の状態で受講を始めましたが、それでも学校で習った発音とBrightureで学べる発音には、大きな隔たりがあることがすぐに分かりました。発音を学んだことで相手に聞き返される回数が減ったのはもちろん、正しい音を理解したことでリスニング力も向上し、こちらが聞き返す場面も少なくなりました。',
    name: 'Aさん',
  },
  {
    label: '初心者から上級者に',
    title: '"初心者が発音レッスンでキッカケを掴み、外資系のマネージャーに"',
    quote:
      '初めて、「本当に喋れるようになるかもしれない」と感じました。それまでの学習では、確かにテストの点は上がっても、英語が話せるようになる実感はありませんでした。特に初心者のうちは、発音を先に学ばないとどうにもならないと思います。音が正しくないと、せっかくの知識も生かせません。',
    name: 'Hさん',
  },
  {
    label: '海外出張で変化を実感',
    title: '"会議で聞き返されなくなり、提案が通るようになった"',
    quote:
      '海外クライアントとの定例会議で、以前は何度も聞き返されていました。Brightureで発音の癖を直してからは、第一声で伝わることが増え、会議の流れが止まらなくなりました。話すことへの怖さが減り、提案する回数も増えました。',
    name: 'Kさん',
  },
  {
    label: 'リスニング力アップ',
    title: '"音のルールを知って、映画が字幕なしで楽しめるように"',
    quote:
      '単語は知っているのに聞き取れない理由が、連結や脱落などの音の変化にあると知って納得しました。発音を練習すると同時に聞こえ方も変わり、英語の動画や映画を以前より自然に理解できるようになりました。',
    name: 'Mさん',
  },
  {
    label: '自信を持って話せる',
    title: '"面接での英語回答が評価され、希望部署へ異動"',
    quote:
      '英語面接では内容より発音に不安があり、いつも緊張していました。レッスンで口の形やリズムを細かく改善した結果、面接官の反応が明らかに変わりました。伝わる実感が自信につながり、希望していた部署への異動が決まりました。',
    name: 'Rさん',
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

function TestimonialsSection() {
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
        <div className="grid items-start gap-8 md:grid-cols-2 md:gap-10">
          <div>
            <p className="text-[15px] font-bold text-[#e8400a]">● 受講者の声</p>
            <h2
              className="mt-5 text-[32px] font-semibold not-italic leading-[1.25] text-[#1f2d4a]"
              style={{ fontFamily: 'var(--s-font-ee93ad8a)' }}
            >
              英語が変わる。未来がひらける。
            </h2>
          </div>
          <p className="pt-1 text-[16px] leading-[1.85] text-[#2b2b2b]">
            Brighture English Academyで学習された生徒さんから、たくさんの声をいただいています。その中から一部をご紹介させていただきます。
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

export default TestimonialsSection