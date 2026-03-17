import { useScrollReveal } from '../../../hooks/useScrollReveal'

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
      </svg>
    ),
    label: 'Structured & Goal-Oriented',
    description: 'Every lesson follows a clear progression — no filler, no guesswork. Each session targets a specific, measurable skill.',
    accent: '#e8400a',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    label: 'Professional Accuracy & Fluency',
    description: 'We focus on the accuracy and fluency that global workplaces demand — not just everyday conversation.',
    accent: '#f15a22',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    ),
    label: 'Real Workplace Standards',
    description: 'Lessons are designed to meet the communication expectations of international teams, not textbook exercises.',
    accent: '#1a2340',
  },
]

function Approach() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.15 })
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 })

  return (
    <section className="relative overflow-hidden bg-[#f9fafb] px-6 py-20 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-[#e8400a]/6 to-transparent blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1680px]">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-14 transition-all duration-700 ease-out"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#e8400a]">A Structured, Business-Focused Approach</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-tight text-[#12151d] sm:text-[36px] lg:text-[42px]">
              We Don't Rely on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8400a] to-[#ff7b54]">
                Casual Conversation Alone
              </span>
            </h2>
            <p className="max-w-sm text-[14px] leading-[1.8] text-[#64748b] sm:text-right">
              Each class targets specific skills — so your progress is measurable and practical.
            </p>
          </div>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-[#e8400a]/30 via-[#e2e8f0] to-transparent" />
        </div>

        {/* Pillar cards */}
        <div ref={gridRef} className="grid gap-px bg-[#e8edf2] rounded-2xl overflow-hidden shadow-sm sm:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.label}
              className="group relative flex flex-col bg-[#f9fafb] p-7 transition-[background-color] duration-300 hover:bg-white"
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? 'translateY(0)' : 'translateY(28px)',
                transitionDelay: gridVisible ? `${index * 80}ms` : '0ms',
                transitionProperty: 'opacity, transform, background-color',
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDuration: '400ms',
              }}
            >
              <div className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: `linear-gradient(to right, ${pillar.accent}, ${pillar.accent}44)` }}
              />
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                style={{ background: `${pillar.accent}12`, color: pillar.accent }}
              >
                {pillar.icon}
              </div>
              <h3 className="text-[15px] font-bold leading-snug tracking-tight text-[#12151d]">{pillar.label}</h3>
              <p className="mt-2.5 text-[13px] leading-[1.75] text-[#64748b]">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Approach
