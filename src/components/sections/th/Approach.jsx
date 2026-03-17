import { useState, useRef, useEffect } from 'react'
import { BoltIcon, ChatBubbleBottomCenterTextIcon, LanguageIcon, SparklesIcon } from '@heroicons/react/24/solid'
import section41Image from '../../../assets/image/th_approach_foundation.png'
import section42Image from '../../../assets/image/th_approach_structure.png'
import section43Image from '../../../assets/image/th_approach_expression.png'
import section2Image from '../../../assets/image/th_approach_confidence.png'

const approachItems = [
  {
    title: 'Build Strong Foundations',
    short: 'Train your mouth and ears first.',
    detail:
      'We start from core pronunciation mechanics so every sentence is easier to produce and easier to understand.',
    image: section41Image,
    badge: 'Foundation',
    icon: LanguageIcon,
    accent: 'from-[#ff7b54] to-[#ff5b2e]' // Orange/Red gradient
  },
  {
    title: 'Organize Better Speech',
    short: 'Say things clearly and logically.',
    detail:
      'You learn practical speaking frameworks that help you structure ideas quickly in meetings, interviews, and daily conversations.',
    image: section42Image,
    badge: 'Structure',
    icon: ChatBubbleBottomCenterTextIcon,
    accent: 'from-[#4facfe] to-[#00f2fe]' // Blue cyan gradient
  },
  {
    title: 'Use Natural Expressions',
    short: 'Move beyond textbook phrasing.',
    detail:
      'Lessons focus on real spoken patterns and word choices so you sound more fluent, natural, and professional.',
    image: section43Image,
    badge: 'Expression',
    icon: SparklesIcon,
    accent: 'from-[#fccb90] to-[#d57eeb]' // Soft peach to purple gradient
  },
  {
    title: 'Speak with Confidence',
    short: 'Deliver with control under pressure.',
    detail:
      'Through repetition and focused correction, you gain confidence to speak accurately and comfortably in real situations.',
    image: section2Image,
    badge: 'Confidence',
    icon: BoltIcon,
    accent: 'from-[#43e97b] to-[#38f9d7]' // Green gradient
  },
]

function Approach() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = approachItems[activeIndex]
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef(null)
  
  // Auto-progress functionality
  useEffect(() => {
    if (isHovered) {
      clearInterval(timerRef.current)
      return
    }
    
    timerRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % approachItems.length)
    }, 5000)
    
    return () => clearInterval(timerRef.current)
  }, [isHovered])

  return (
    <section
      id="essential"
      className="relative overflow-hidden bg-[#fafafa] px-6 py-20 sm:px-10 lg:px-16"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#e8400a]/10 to-transparent blur-[100px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#1a2b5a]/10 to-transparent blur-[120px] mix-blend-multiply" />
      </div>

      <div className="mx-auto w-full max-w-[1440px] relative z-10">
        <div className="max-w-[820px] mb-16 text-center mx-auto">
          <span className="text-sm font-bold tracking-[0.08em] text-[#e8400a] sm:text-base">
            Our Approach
          </span>
          <h2 className="text-[30px] font-extrabold leading-[1.18] text-[#12151d] sm:text-[38px] tracking-tight">
            Structured, Focused, and <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8400a] to-[#ff7b54]">
              Actually Fun to Practice
            </span>
          </h2>
          <p className="mt-5 text-[14px] leading-relaxed text-[#4e5871] max-w-2xl mx-auto sm:text-[15px]">
            Pick a focus area below. Each one shows how Brighture helps you improve faster with guided, practical, and engaging lesson flows.
          </p>
        </div>

        <div 
          className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Side - Interactive Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 relative">
            {approachItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeIndex === index
              
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`group relative w-full rounded-2xl p-5 text-left transition-all duration-300 ease-out outline-none transform-gpu
                    ${isActive 
                      ? 'bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] scale-[1.02] z-10' 
                      : 'bg-white/60 hover:bg-white/90 border-transparent hover:shadow-md hover:-translate-y-1 z-0'
                    }
                  `}
                  aria-pressed={isActive}
                >
                  {/* Subtle active border gradient */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-[#e8400a] to-[#ff7b54] opacity-20 pointer-events-none [mask-image:linear-gradient(white,white)] mask-composite-exclude" style={{ padding: '2px', backgroundClip: 'content-box' }}/>
                  )}
                  {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-gradient-to-b from-[#e8400a] to-[#ff7b54] rounded-r-md rounded-l-none opacity-100" />
                  )}

                  <div className="flex items-center gap-4 relative z-10">
                    <div
                      className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 shadow-sm
                        ${isActive 
                          ? `bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-[#e8400a]/20 scale-110` 
                          : 'bg-[#f0f4f8] text-[#4a5568] group-hover:bg-white group-hover:shadow-md'
                        }
                      `}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className={`text-[10px] font-bold uppercase tracking-wider transition-colors
                          ${isActive ? 'text-[#e8400a]' : 'text-[#718096] group-hover:text-[#4a5568]'}`}>
                          {item.badge}
                        </p>
                      </div>
                      <h3 className={`text-[15px] sm:text-base font-bold leading-snug transition-colors
                        ${isActive ? 'text-[#1a202c]' : 'text-[#2d3748] group-hover:text-[#1a202c]'}`}>
                        {item.title}
                      </h3>
                      
                      {/* Animated description expansion */}
                      <div 
                        className="overflow-hidden transition-all duration-300 ease-out transform-gpu"
                        style={{
                          maxHeight: isActive ? '40px' : '0px',
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? '8px' : '0px'
                        }}
                      >
                        <p className="text-[12px] leading-relaxed text-[#4a5568]">
                          {item.short}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Side - Premium Image Display */}
          <article className="relative lg:col-span-7 h-full min-h-[400px] lg:min-h-[500px]">
            {/* Glassmorphism Container */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/40 bg-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] backdrop-blur-xl group">
              
              {/* Images with subtle scale effect on change */}
              {approachItems.map((item, index) => {
                const isActive = index === activeIndex
                return (
                  <div 
                    key={item.title}
                    className={`absolute inset-0 transition-all duration-500 ease-out origin-center transform-gpu will-change-[opacity,transform]
                      ${isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0 pointer-events-none'}
                    `}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                    {/* Modern gradient overlay - stronger at bottom for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/40 to-transparent mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />
                  </div>
                )
              })}

              {/* Dynamic Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 z-20 transition-all duration-500 transform translate-y-0">
                {/* Progress Indicators */}
                <div className="flex items-center gap-3 mb-6">
                  {approachItems.map((item, index) => (
                    <button
                      key={`${item.title}-dot`}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 
                        ${index === activeIndex ? 'w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'w-3 bg-white/40 hover:bg-white/70'}
                      `}
                      aria-label={`Show ${item.title}`}
                    />
                  ))}
                </div>

                <div 
                  className={`transition-all duration-500 transform 
                    ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-0 opacity-100'}
                  `}
                >
                   <div className="inline-flex items-center gap-2 mb-3">
                     <activeItem.icon className="w-4 h-4 text-[#ff8c6b]" />
                     <span className="text-[#ff8c6b] text-[11px] font-semibold tracking-wide uppercase">{activeItem.badge}</span>
                   </div>
                  <h3 className="text-[26px] font-bold leading-tight text-white shadow-sm sm:text-[32px] mb-3">
                    {activeItem.title}
                  </h3>
                  <p className="max-w-2xl text-[13px] leading-relaxed text-[#e2e8f0] sm:text-[14px] font-medium backdrop-blur-sm">
                    {activeItem.detail}
                  </p>
                </div>
              </div>

               {/* Hint badge */}
               <div className="absolute top-6 right-6 z-20">
                  <div className="px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white/80 text-xs font-medium flex items-center gap-2 shadow-xl opacity-0 xl:opacity-100 transition-opacity">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Hover to peek
                  </div>
               </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Approach
