import { useEffect, useRef, useState } from 'react'
import section41Image from '../../../assets/image/section4.1en.webp'
import section42Image from '../../../assets/image/section4.2.webp'
import section43Image from '../../../assets/image/section4.3.webp'

const essentials = [
  'Learn pronunciation as early as you can',
  'Get feedback on your pronunciation',
  'Learn with a trained teacher',
]

const essentialCards = [
  {
    id: '01',
    title: 'Learn pronunciation as early as possible',
    image: section41Image,
    alt: 'Pronunciation learning roadmap',
    description:
      'Many English learners know pronunciation is important, but often think: "I\'ll work on it later, after I learn more words or can speak better."\n\nThe problem? If you keep learning English with the wrong sounds, you\'ll remember words incorrectly. Later, even if you fix your pronunciation, you may need to unlearn and relearn them.\n\nThat\'s why we recommend starting pronunciation from day one, so you build the right habits from the very beginning.',
  },
  {
    id: '02',
    title: 'Get feedback on your pronunciation',
    image: section42Image,
    alt: 'Instructor checking pronunciation',
    description:
      'Today, there are countless videos and materials for learning pronunciation on platforms like YouTube, making self-study easier than ever.\n\nBut no matter how much you understand the theory, it’s hard to know if you’re actually making the sounds correctly.\n\nThat’s why having someone else check your pronunciation is the fastest way to improve. A teacher can show you exactly what you’re doing right and what needs fixing.',
  },
  {
    id: '03',
    title: 'Learn with a trained teacher',
    image: section43Image,
    alt: 'Comparison for choosing trained instructors',
    description:
      'Speaking English well and teaching English are completely different skills.\nBeing a native speaker does not always mean someone can explain pronunciation\nin a clear and logical way.\n\nFor effective pronunciation learning, it’s important to study with teachers who have learned English as a second language and have received specialized training in how to teach it.\n\nAs professional educators, our teachers do more than share correct knowledge. They provide clear, personalized guidance, focusing on each student’s weak points.',
  },
]

function Essentials() {
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
      <div className="mx-auto grid w-full max-w-[1680px] gap-6 md:grid-cols-[0.52fr_1fr] md:gap-8">
        <aside className="md:sticky md:top-24 md:self-start">
          <h2 className="text-[40px] font-bold leading-tight text-[#181b22]">What&apos;s Essential?</h2>
          <p className="mt-3 text-base font-bold text-[#f24506] sm:text-lg">Key points for learning pronunciation</p>

          <div className="mt-8 border-t border-[#d6d6d6]">
            {essentials.map((item, index) => (
              <button
                type="button"
                key={item}
                onClick={() => handleSidebarClick(index)}
                className={`flex w-full items-center justify-between border-b border-[#d6d6d6] py-5 text-left transition-all duration-200 active:scale-[0.99] ${
                  activeIndex === index ? 'bg-[#efefef] pl-3' : 'hover:bg-[#efefef] active:bg-[#e7e7e7] pl-0'
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
                className="mt-6 h-auto max-h-[300px] w-full object-contain"
              />

              <p className="mt-5 whitespace-pre-line text-[16px] leading-[1.75] text-[#23262f] sm:mt-6 sm:leading-[1.8] md:leading-[1.85]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Essentials
