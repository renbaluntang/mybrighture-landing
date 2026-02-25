import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const baseTestimonials = [
  {
    label: 'TOEICと英語力',
    title: '“TOEIC 900点 から「話せる英語」を目指して発音から改善”',
    quote:
      '最初の授業で、衝撃を受けました。それまでは自分なりにリスニングも発音も得意なほうだと思っていたのですが、初回の授業でたくさんの指摘を受け、「できていない自分」に気づかされました。先生の話すスピードはナチュラルスピード。発音も美しく、「こんなふうに話したい」と思いました。授業を録音して自分の音声と聞き比べてみると、思っていた以上に自分の発音が違っていて、その差に驚きました。',
    name: 'Yさん',
  },
  {
    label: 'コミュニケーションがスムーズに',
    title: '“学校で学んだ発音はまったく別物だった”',
    quote:
      'Brightureで発音を学び始めてからずっと感じていたのは、「学校で学んできたものとは本当に違う」ということです。ほぼ初心者の状態で受講を始めましたが、それでも学校で習った発音とBrightureで学べる発音には、大きな隔たりがあることがすぐに分かりました。発音を学んだことで相手に聞き返される回数が減ったのはもちろん、正しい音を理解したことでリスニング力も向上し、こちらが聞き返す場面も少なくなりました。',
    name: 'Aさん',
  },
  {
    label: '初心者から上級者に',
    title: '“初心者が発音レッスンでキッカケを掴み、外資系のマネージャーに”',
    quote:
      '初めて、「本当に喋れるようになるかもしれない」と感じました。それまでの学習では、確かにテストの点は上がっても、英語が話せるようになる実感はありませんでした。特に初心者のうちは、発音を先に学ばないとどうにもならないと思います。音が正しくないと、せっかくの知識も生かせません。',
    name: 'Hさん',
  },
  {
    label: '海外出張で変化を実感',
    title: '“会議で聞き返されなくなり、提案が通るようになった”',
    quote:
      '海外クライアントとの定例会議で、以前は何度も聞き返されていました。Brightureで発音の癖を直してからは、第一声で伝わることが増え、会議の流れが止まらなくなりました。話すことへの怖さが減り、提案する回数も増えました。',
    name: 'Kさん',
  },
  {
    label: 'リスニング力アップ',
    title: '“音のルールを知って、映画が字幕なしで楽しめるように”',
    quote:
      '単語は知っているのに聞き取れない理由が、連結や脱落などの音の変化にあると知って納得しました。発音を練習すると同時に聞こえ方も変わり、英語の動画や映画を以前より自然に理解できるようになりました。',
    name: 'Mさん',
  },
  {
    label: '自信を持って話せる',
    title: '“面接での英語回答が評価され、希望部署へ異動”',
    quote:
      '英語面接では内容より発音に不安があり、いつも緊張していました。レッスンで口の形やリズムを細かく改善した結果、面接官の反応が明らかに変わりました。伝わる実感が自信につながり、希望していた部署への異動が決まりました。',
    name: 'Rさん',
  },
]

function TestimonialsSection() {
  const trackRef = useRef(null)
  const autoPlayRef = useRef(null)
  const scrollEndRef = useRef(null)
  const featuredLoopIndexRef = useRef(baseTestimonials.length)

  const [quoteBoxHeight, setQuoteBoxHeight] = useState(null)
  const [featuredLoopIndex, setFeaturedLoopIndex] = useState(baseTestimonials.length)

  const cards = useMemo(() => {
    const first = baseTestimonials.map((item, idx) => ({ ...item, loopIndex: idx }))
    const second = baseTestimonials.map((item, idx) => ({ ...item, loopIndex: idx + baseTestimonials.length }))
    const third = baseTestimonials.map((item, idx) => ({ ...item, loopIndex: idx + baseTestimonials.length * 2 }))
    return [...first, ...second, ...third]
  }, [])

  const syncFeatured = (nextLoopIndex) => {
    featuredLoopIndexRef.current = nextLoopIndex
    setFeaturedLoopIndex(nextLoopIndex)
  }

  const centerCardByLoopIndex = (loopIndex, behavior = 'smooth') => {
    const track = trackRef.current
    if (!track) return

    const card = track.querySelector(`[data-loop-index="${loopIndex}"]`)
    if (!card) return

    const trackRect = track.getBoundingClientRect()
    const cardRect = card.getBoundingClientRect()
    const delta = cardRect.left - trackRect.left - (trackRect.width / 2 - cardRect.width / 2)

    track.scrollTo({ left: track.scrollLeft + delta, behavior })
  }

  const getNearestLoopIndex = () => {
    const track = trackRef.current
    if (!track) return featuredLoopIndexRef.current

    const trackRect = track.getBoundingClientRect()
    const centerX = trackRect.left + trackRect.width / 2
    const items = Array.from(track.querySelectorAll('[data-card="testimonial"]'))

    let nearest = { distance: Number.POSITIVE_INFINITY, loopIndex: featuredLoopIndexRef.current }

    items.forEach((item) => {
      const rect = item.getBoundingClientRect()
      const itemCenter = rect.left + rect.width / 2
      const distance = Math.abs(centerX - itemCenter)
      const loopIndex = Number(item.getAttribute('data-loop-index'))

      if (!Number.isNaN(loopIndex) && distance < nearest.distance) {
        nearest = { distance, loopIndex }
      }
    })

    return nearest.loopIndex
  }

  const normalizeLoop = (loopIndex) => {
    const baseCount = baseTestimonials.length
    let normalized = loopIndex

    if (loopIndex < baseCount) {
      normalized = loopIndex + baseCount
    } else if (loopIndex >= baseCount * 2) {
      normalized = loopIndex - baseCount
    }

    if (normalized !== loopIndex) {
      centerCardByLoopIndex(normalized, 'auto')
    }

    return normalized
  }

  const moveCards = (direction = 1) => {
    const current = featuredLoopIndexRef.current
    const next = current + direction
    centerCardByLoopIndex(next, 'smooth')

    window.setTimeout(() => {
      const snapped = getNearestLoopIndex()
      const normalized = normalizeLoop(snapped)
      const centered = getNearestLoopIndex()
      syncFeatured(normalized === centered ? normalized : centered)
      centerCardByLoopIndex(featuredLoopIndexRef.current, 'smooth')
    }, 420)
  }

  const restartAutoPlay = () => {
    if (autoPlayRef.current) {
      window.clearInterval(autoPlayRef.current)
    }

    autoPlayRef.current = window.setInterval(() => {
      moveCards(1)
    }, 3500)
  }

  useEffect(() => {
    const calculateUnifiedQuoteHeight = () => {
      if (window.innerWidth < 1024) {
        setQuoteBoxHeight(null)
        return
      }

      const track = trackRef.current
      if (!track) return

      const quoteTexts = Array.from(track.querySelectorAll('[data-quote-text="testimonial"]'))
      if (!quoteTexts.length) return

      let tallest = 0
      quoteTexts.forEach((node) => {
        const rect = node.getBoundingClientRect()
        if (rect.height > tallest) tallest = rect.height
      })

      setQuoteBoxHeight(Math.ceil(tallest + 32))
    }

    const stopAutoPlay = () => {
      if (autoPlayRef.current) {
        window.clearInterval(autoPlayRef.current)
        autoPlayRef.current = null
      }
    }

    const onScroll = () => {
      const nearest = getNearestLoopIndex()
      syncFeatured(nearest)

      if (scrollEndRef.current) {
        window.clearTimeout(scrollEndRef.current)
      }

      scrollEndRef.current = window.setTimeout(() => {
        const snapped = getNearestLoopIndex()
        centerCardByLoopIndex(snapped, 'smooth')
        const normalized = normalizeLoop(snapped)
        syncFeatured(normalized)
      }, 120)
    }

    const onMouseEnter = () => stopAutoPlay()
    const onMouseLeave = () => restartAutoPlay()

    const track = trackRef.current
    const rafId = requestAnimationFrame(() => {
      calculateUnifiedQuoteHeight()
      centerCardByLoopIndex(baseTestimonials.length, 'auto')
      syncFeatured(baseTestimonials.length)
      restartAutoPlay()
    })

    window.addEventListener('resize', calculateUnifiedQuoteHeight)
    if (track) {
      track.addEventListener('scroll', onScroll, { passive: true })
      track.addEventListener('mouseenter', onMouseEnter)
      track.addEventListener('mouseleave', onMouseLeave)
      track.addEventListener('touchstart', onMouseEnter, { passive: true })
      track.addEventListener('touchend', onMouseLeave)
    }

    return () => {
      cancelAnimationFrame(rafId)
      if (autoPlayRef.current) window.clearInterval(autoPlayRef.current)
      if (scrollEndRef.current) window.clearTimeout(scrollEndRef.current)

      window.removeEventListener('resize', calculateUnifiedQuoteHeight)
      if (track) {
        track.removeEventListener('scroll', onScroll)
        track.removeEventListener('mouseenter', onMouseEnter)
        track.removeEventListener('mouseleave', onMouseLeave)
        track.removeEventListener('touchstart', onMouseEnter)
        track.removeEventListener('touchend', onMouseLeave)
      }
    }
  }, [])

  return (
    <section
      id="voice"
      className="relative px-4 py-14 sm:px-8 sm:py-20 lg:px-16"
    >
      <div className="mx-auto w-full max-w-[1680px]">
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

        <div className="relative mt-12">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-1 py-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cards.map((item, index) => {
              const isFeatured = item.loopIndex === featuredLoopIndex

              return (
                <article
                  data-card="testimonial"
                  data-loop-index={item.loopIndex}
                  key={`${item.title}-${index}`}
                  className={`flex w-[92%] shrink-0 snap-center flex-col rounded-2xl border p-6 transition-all duration-500 sm:w-[64%] lg:w-[36%] xl:w-[27%] ${
                    isFeatured
                      ? 'scale-[1.055] border-[#f38a6a] bg-[#ffffff] shadow-[0_24px_40px_rgba(21,34,58,0.16)]'
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
                  <div
                    className="mt-6 flex items-start rounded-2xl bg-[#ececec] p-4"
                    style={quoteBoxHeight ? { height: `${quoteBoxHeight}px` } : undefined}
                  >
                    <p
                      data-quote-text="testimonial"
                      className="h-auto text-[13px] font-medium leading-[1.4] text-[#2f2f2f]"
                    >
                      {item.quote}
                    </p>
                  </div>
                  <p
                    className="mt-[12px] text-right text-[12px] font-medium leading-[1.6] text-[#979797]"
                    style={{ fontFamily: 'var(--s-font-ee93ad8a)', margin: '12px 0 0 0', height: 'auto' }}
                  >
                    {item.name}
                  </p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => moveCards(-1)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f1f1] text-[#f24506] ring-1 ring-black/5 transition hover:bg-[#e9e9e9]"
            aria-label="Previous testimonials"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => moveCards(1)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#f1f1f1] text-[#f24506] ring-1 ring-black/5 transition hover:bg-[#e9e9e9]"
            aria-label="Next testimonials"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
