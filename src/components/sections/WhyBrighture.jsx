import { useEffect, useRef, useState } from 'react'
import {
  AcademicCapIcon,
  CalendarDaysIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/solid'
import section5Image from '../../assets/image/section5.png'

function RibbonAwardIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.75a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5Zm-2.18 12.9L7.7 21.25a.75.75 0 0 0 1.1.88L12 20.2l3.2 1.93a.75.75 0 0 0 1.1-.88l-2.12-5.6a7.9 7.9 0 0 1-4.36 0Z" />
    </svg>
  )
}

const leftFeatures = [
  {
    title: '初心者でも',
    description:
      'Brightureの発音レッスンは、英語初心者でも大丈夫。まずは、先生の音を真似するところから始めよう。',
    icon: AcademicCapIcon,
  },
  {
    title: '週1ペースから',
    description:
      '1レッスン毎の予約制だから、忙しい社会人でも自分のペースで無理なく進められます。',
    icon: CalendarDaysIcon,
  },
]

const rightFeatures = [
  {
    title: '一音ずつ着実に',
    description:
      '毎レッスン一音にフォーカスして、しっかり学習。苦手な音や日本人に難しい音は毎回ドリルの形で復習。',
    icon: PresentationChartLineIcon,
  },
  {
    title: '講師がサポート',
    description:
      'ブライチャー独自のトレーニングを受けた講師たちが学習をサポートします。',
    icon: RibbonAwardIcon,
  },
]

const allFeatures = [...leftFeatures, ...rightFeatures]
const baseAnimationDelay = 220

function WhyBrighture() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.25 }
    )

    observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="reasons"
      ref={sectionRef}
      className="relative px-4 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-14"
    >
      <div className="mx-auto w-full max-w-[1680px] text-center">
        <p className="text-sm font-bold tracking-[0.08em] text-[#e8400a] sm:text-base">With Brighture</p>

        <h2 className="mt-4 text-3xl font-bold leading-[1.2] text-[#1f2128] sm:text-4xl md:text-[2.55rem]">
          Brightureなら
          <br />
          確実に身につく
        </h2>

        <p className="mx-auto mt-4 max-w-4xl text-sm leading-[1.7] text-[#6b6b6b] sm:text-base">
          採用からトレーニングまで一貫して厳しい基準をクリアした講師があなたを徹底サポート
        </p>

        <div className="mt-9 grid items-start gap-6 lg:grid-cols-[0.85fr_2.2fr_0.85fr] lg:gap-4 xl:gap-6">
          <div className="space-y-8 md:hidden lg:block lg:space-y-11">
            {leftFeatures.map((feature, index) => {
              const Icon = feature.icon

              return (
                <article
                  key={feature.title}
                  style={{ transitionDelay: `${baseAnimationDelay + index * 90}ms` }}
                  className={`mx-auto max-w-[300px] transition-all duration-500 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] lg:max-w-none ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  <Icon className="mx-auto h-9 w-9 text-[#ff4a1f] sm:h-10 sm:w-10" aria-hidden="true" />
                  <h3 className="mt-3 text-[18px] font-bold text-[#1f2128]">{feature.title}</h3>
                  <p className="mx-auto mt-3 max-w-[280px] text-[14px] leading-[1.8] text-[#666]">{feature.description}</p>
                </article>
              )
            })}
          </div>

          <div className="order-first mx-auto w-full max-w-[760px] md:col-span-2 lg:col-span-1 lg:order-none">
            <img
              src={section5Image}
              alt="Brighture instructors"
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="space-y-8 md:hidden lg:block lg:space-y-11">
            {rightFeatures.map((feature, index) => {
              const Icon = feature.icon

              return (
                <article
                  key={feature.title}
                  style={{ transitionDelay: `${baseAnimationDelay + (index + 2) * 90}ms` }}
                  className={`mx-auto max-w-[300px] transition-all duration-500 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] lg:max-w-none ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  <Icon className="mx-auto h-9 w-9 text-[#ff4a1f] sm:h-10 sm:w-10" aria-hidden="true" />
                  <h3 className="mt-3 text-[18px] font-bold text-[#1f2128]">{feature.title}</h3>
                  <p className="mx-auto mt-3 max-w-[280px] text-[14px] leading-[1.8] text-[#666]">{feature.description}</p>
                </article>
              )
            })}
          </div>

          <div className="hidden md:col-span-2 md:grid md:grid-cols-2 md:gap-x-7 md:gap-y-9 lg:hidden">
            {allFeatures.map((feature, index) => {
              const Icon = feature.icon

              return (
                <article
                  key={`md-${feature.title}`}
                  style={{ transitionDelay: `${baseAnimationDelay + index * 90}ms` }}
                  className={`mx-auto max-w-[300px] transition-all duration-500 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  <Icon className="mx-auto h-9 w-9 text-[#ff4a1f] sm:h-10 sm:w-10" aria-hidden="true" />
                  <h3 className="mt-3 text-[18px] font-bold text-[#1f2128]">{feature.title}</h3>
                  <p className="mx-auto mt-3 max-w-[280px] text-[14px] leading-[1.8] text-[#666]">{feature.description}</p>
                </article>
              )
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center sm:mt-9">
          <a
            href="https://brighture-edu.com/register/index.html"
            className="group relative inline-flex items-center justify-center rounded-md border border-[#e8400a] bg-[#e8400a] px-7 py-2.5 text-[15px] tracking-tight transition-colors duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] hover:bg-transparent"
          >
            <span className="font-bold text-white transition-colors duration-300 ease-[cubic-bezier(0.445,0.05,0.55,0.95)] group-hover:text-[#e8400a]">
              無料体験申込み  →
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyBrighture
