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
    <section id="essential" className="relative px-4 pb-16 pt-8 sm:px-8 lg:px-16 lg:pb-24 lg:pt-16 bg-[#fafafa]">
      <div className="mx-auto grid w-full max-w-[1500px] gap-10 md:grid-cols-[0.45fr_1fr] md:gap-14 lg:gap-20">
        <aside className="md:sticky md:top-24 md:self-start">
          <span className="text-sm font-bold tracking-[0.08em] text-[#e8400a] sm:text-base">
            Key Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-[1.15] text-[#1a202c] tracking-tight">
            What&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8400a] to-[#ff7b54]">Essential?</span>
          </h2>
          <p className="mt-4 text-base font-medium text-[#4a5568] leading-relaxed">
            Mastering pronunciation requires the right approach. Focus on these core areas.
          </p>

          <div className="mt-10 border-t border-[#e2e8f0] relative">
            {essentials.map((item, index) => (
              <button
                type="button"
                key={item}
                onClick={() => handleSidebarClick(index)}
                className={`group relative flex w-full items-center justify-between border-b border-[#e2e8f0] py-6 text-left transition-all duration-300 ease-out outline-none ${
                  activeIndex === index ? 'bg-transparent scale-[1.02]' : 'hover:bg-white/50'
                }`}
              >
                {/* Active indicator bar */}
                <div 
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#e8400a] to-[#ff7b54] transition-all duration-300 ease-in-out origin-top
                    ${activeIndex === index ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}
                  `} 
                />

                <div className={`flex items-center gap-4 pl-4 transition-transform duration-300 ${activeIndex === index ? 'translate-x-2' : 'group-hover:translate-x-1'}`}>
                  <span className={`text-base font-extrabold font-mono transition-colors duration-300 ${activeIndex === index ? 'text-[#e8400a]' : 'text-[#a0aec0] group-hover:text-[#718096]'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`flex-1 text-sm font-semibold leading-snug transition-colors duration-300 ${
                      activeIndex === index ? 'text-[#1a202c]' : 'text-[#4a5568] group-hover:text-[#2d3748]'
                    }`}
                  >
                    {item}
                  </span>
                </div>
                <div className={`mr-2 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:bg-[#edf2f7] ${activeIndex === index ? 'bg-transparent text-[#e8400a] group-hover:text-[#e8400a]' : 'bg-transparent text-[#cbd5e0] group-hover:text-[#a0aec0]'}`}>
                  <svg className={`h-4 w-4 transition-transform duration-300 ${activeIndex === index ? 'translate-y-0.5' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <div className="space-y-10 sm:space-y-14">
          {essentialCards.map((card, index) => (
            <article
              key={card.id}
              ref={(el) => {
                cardRefs.current[Number(card.id) - 1] = el
              }}
              className={`scroll-mt-32 relative overflow-hidden rounded-[2rem] bg-white border border-[#e2e8f0] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)]
                ${activeIndex === index ? 'ring-2 ring-[#ffb399] shadow-[0_20px_50px_-20px_rgba(232,64,10,0.2)] scale-[1.01]' : 'opacity-80 scale-100'}
              `}
            >
              {/* Header section with gradient flair */}
              <div className="relative pt-8 px-6 sm:pt-10 sm:px-10 lg:px-12 z-10">
                <div className="flex items-center gap-3 mb-6">
                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a202c] to-[#2d3748] shadow-md">
                     <span className="text-sm font-bold text-white font-mono tracking-wider">{card.id}</span>
                   </div>
                   <div className="h-[2px] w-12 bg-gradient-to-r from-[#e8400a] to-[#ffb399]" />
                </div>
                <h3 className="text-lg font-bold leading-tight text-[#1a202c] sm:text-xl md:text-xl tracking-tight">
                  {card.title}
                </h3>
              </div>

              <div className="relative mt-8 px-6 sm:px-10 lg:px-12 pb-2">
                 <div className="relative rounded-2xl overflow-hidden bg-[#f7fafc] border border-[#edf2f7] mb-8">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="h-auto max-h-[220px] w-full object-contain sm:max-h-[240px] lg:max-h-[260px]"
                  />
                 </div>
              </div>

              <div className="px-6 pb-10 sm:px-10 lg:px-12 sm:pb-12 bg-gradient-to-b from-transparent to-[#fafafa]">
                <p className="whitespace-pre-line text-xs leading-[1.8] text-[#4a5568] font-medium sm:text-sm">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Essentials
