import { useScrollReveal } from '../../../hooks/useScrollReveal'
import section2Image from '../../../assets/image/section2.png'

const painPoints = [
  {
    title: '何度も聞き返される',
    description:
      '話す度に聞き返されていると英語を話すことにストレスを感じるようになり、せっかく学んだ英語を話すのが嫌になることも。',
  },
  {
    title: 'リスニングのスコアが伸びない',
    description:
      'リスニング対策の本を真面目に勉強しても、テストでリスニングの点数が伸び悩んでいる。聞き取れない音がたくさんある。',
  },
  {
    title: '格好よく自信を持って話したい',
    description:
      '英語を話すからにはやっぱりネイティブっぽく格好いい英語が話せるようになりたい。',
  },
]

function PainPoints() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.2 })
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.08 })

  return (
    <section className="relative pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
      <div className="mx-auto w-11/12 max-w-[1680px] px-4 sm:px-8 lg:px-16">
        <div
          ref={headerRef}
          className="transition-all duration-700 ease-out"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <p className="text-center text-xs font-semibold text-[#5e5e5e] sm:text-sm md:text-base">The Key to Improvement</p>
          <p
            className="mt-3 h-auto w-auto max-w-full justify-center pb-6 text-center text-base font-bold not-italic tracking-normal text-[#e8400a] sm:mt-4 sm:text-lg md:text-xl lg:text-2xl"
            style={{ fontFeatureSettings: 'normal', lineHeight: '1.4' }}
          >
            発音は、英語の悩みを"根っこ"から解決するカギ
          </p>

          <div className="mt-8 flex justify-center sm:mt-10">
            <img
              src={section2Image}
              alt="Concerned person illustration"
              loading="lazy"
              decoding="async"
              className="h-auto w-full max-w-[170px] object-contain sm:max-w-[200px] md:max-w-[220px]"
            />
          </div>
        </div>

        {/*
          Mobile (default):   1 column — cards stack vertically
          Tablet (md):        2 columns — first 2 side by side, 3rd centered below
          Desktop (xl):       3 columns — all 3 in a row
        */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:gap-5 xl:grid-cols-3">
          {painPoints.map((item, index) => (
            <div
              key={item.title}
              className={`transition-[opacity,transform] duration-500 ease-out ${
                index === painPoints.length - 1 && painPoints.length % 2 !== 0
                  ? 'md:col-span-2 md:mx-auto md:w-1/2 xl:col-span-1 xl:mx-0 xl:w-auto'
                  : ''
              }`}
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(28px)',
                transitionDelay: cardsVisible ? `${index * 110}ms` : '0ms',
              }}
            >
              <article
                className="group h-full cursor-default border-l-4 border-[#ff4a1f] bg-white p-4 transition-[transform,box-shadow,border-color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:p-5 md:hover:-translate-y-2 md:hover:border-[#e8400a] md:hover:bg-[#fff7f4] md:hover:shadow-[0_16px_38px_rgba(232,64,10,0.18)] lg:p-6"
              >
                <div className="pl-3 sm:pl-4 lg:pl-5">
                  <h3 className="text-xs font-bold leading-[1.3] tracking-tight text-[#e8400a] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:text-[#b23008] sm:text-sm md:text-base">
                    {item.title}
                  </h3>
                </div>
                <hr className="my-3 border-t border-[#d6d6d6] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:border-[#f0b29f] sm:my-4 lg:my-5" />
                <p className="max-w-prose text-xs font-medium leading-[1.55] tracking-tight text-[#2b2b2b] sm:text-sm">
                  {item.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PainPoints
