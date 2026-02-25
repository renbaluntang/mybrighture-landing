import { useEffect, useRef, useState } from 'react'
import section41Image from '../../assets/image/section4.1.webp'
import section42Image from '../../assets/image/section4.2.webp'
import section43Image from '../../assets/image/section4.3.webp'

const essentials = [
  '発音はなるべく早いうちに身につける',
  '発音は誰かにチェックしてもらう',
  'トレーニングを受けた講師を選ぶ',
]

const essentialCards = [
  {
    id: '01',
    title: '発音はなるべく早いうちに身につける',
    image: section41Image,
    alt: '発音学習の流れ',
    description:
      '正しい発音を身につけることの大切さは、多くの英語学習者が理解しています。しかしながら、ほとんどの人がある程度話せるようになってから、もう少し語彙力を付けてから、と「発音はもう少し後で」と考えていますが、正しい発音が身についていない状態のままインプットを行うと、間違った音のまま覚えてしまい、後で発音を身につけた後にやり直しする必要が出てきます。なので、発音は最初に学ぶのがおすすめ。',
  },
  {
    id: '02',
    title: '発音は誰かにチェックしてもらう',
    image: section42Image,
    alt: '講師に発音をチェックしてもらう様子',
    description:
      '昨今では、YouTubeなどにも発音学習に関する動画や教材が数多く公開され、独学でも学びやすい環境が整っています。しかし、どれだけ正しい知識を身につけたつもりでも、「実際に自分が正しい音で発音できているか」を客観的に判断することは非常に難しいものです。そのため、第三者に発音をチェックしてもらい、どこが正しく、どこを修正すべきかを具体的に指摘してもらうことが、上達への最短ルートとなります。',
  },
  {
    id: '03',
    title: 'トレーニングを受けた講師を選ぶ',
    image: section43Image,
    alt: 'トレーニングを受けた講師を選ぶ比較イメージ',
    description:
      '英語を話せることと、英語を教えられることは、まったく別のスキルです。ネイティブだからといって発音の仕組みやコツを体系的・論理的に説明できるとは限りません。発音学習においては、自分自身が第二言語として英語を学習し、さらに教えるためのトレーニングを受けた講師から学ぶことが重要です。プロの講師だからこそ、正しい知識を伝えるだけでなく、一人ひとりのウィークポイントに寄り添いながら的確なアドバイスをすることができます。',
  },
]

function EssentialsSection() {
  const cardRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean)
    if (!cards.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (!visible.length) return

        const nextIndex = cards.findIndex((card) => card === visible[0].target)
        if (nextIndex !== -1) setActiveIndex(nextIndex)
      },
      {
        root: null,
        rootMargin: '-20% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  const handleSidebarClick = (index) => {
    const target = cardRefs.current[index]
    if (!target) return
    setActiveIndex(index)

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section id="essential" className="px-4 pb-16 pt-8 sm:px-8 lg:px-16 lg:pb-20 lg:pt-12">
      <div className="mx-auto grid w-full max-w-[1680px] gap-6 lg:grid-cols-[0.52fr_1fr] lg:gap-8">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-[40px] font-bold leading-tight text-[#181b22]">What&apos;s Essential?</h2>
          <p className="mt-3 text-base font-bold text-[#f24506] sm:text-lg">発音を学ぶ上で大切なこと</p>

          <div className="mt-8 border-t border-[#d6d6d6]">
            {essentials.map((item, index) => (
              <button
                type="button"
                key={item}
                onClick={() => handleSidebarClick(index)}
                className={`flex w-full items-center justify-between border-b border-[#d6d6d6] py-5 text-left transition duration-200 active:scale-[0.99] ${
                  activeIndex === index ? 'bg-[#efefef]' : 'hover:bg-[#efefef] active:bg-[#e7e7e7]'
                }`}
              >
                <span className={`text-sm font-bold ${activeIndex === index ? 'text-[#f24506]' : 'text-[#23262f]'}`}>
                  {String(index + 1).padStart(2, '0')}.
                </span>
                <span
                  className={`mx-4 flex-1 text-xs font-semibold leading-snug sm:text-sm ${
                    activeIndex === index ? 'text-[#f24506]' : 'text-[#23262f]'
                  }`}
                >
                  {item}
                </span>
                <span className={`mr-2 text-base leading-none ${activeIndex === index ? 'text-[#f24506]' : 'text-[#3b3f48]'}`}>
                  ↓
                </span>
              </button>
            ))}
          </div>
        </aside>

        <div className="space-y-6">
          {essentialCards.map((card) => (
            <article
              key={card.id}
              ref={(el) => {
                cardRefs.current[Number(card.id) - 1] = el
              }}
              className="scroll-mt-28 rounded-2xl bg-[#ebebeb] px-5 py-7 sm:px-8 sm:py-8 lg:px-12"
            >
              <span className="inline-flex items-center rounded-full bg-[#23262f] px-4 py-1 text-xs font-bold text-white sm:text-sm">
                {card.id}
              </span>
              <h3 className="mt-4 text-xl font-bold leading-[1.35] text-[#181b22] sm:text-2xl md:text-[28px] lg:text-[32px]">
                {card.title}
              </h3>

              <img
                src={card.image}
                alt={card.alt}
                className="mt-6 h-auto w-full object-contain"
              />

              <p className="mt-5 text-[16px] leading-[1.75] text-[#23262f] sm:mt-6 sm:leading-[1.8] md:leading-[1.85]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EssentialsSection
