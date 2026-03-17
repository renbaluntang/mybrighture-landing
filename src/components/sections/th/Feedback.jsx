import { useScrollReveal } from '../../../hooks/useScrollReveal'

const feedbackItems = [
  {
    id: 'verbal',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-7 w-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
    label: 'Live Verbal Feedback',
    detail: 'Real-time corrections and guidance directly during and after every class session.',
    color: '#e8400a',
  },
  {
    id: 'written',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-7 w-7" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
    label: 'Written Lesson Report',
    detail: 'Detailed post-lesson notes highlighting your strengths, corrections, and clear next steps.',
    color: '#f15a22',
  },
]

const stats = [
  { value: '100%', label: 'of lessons include feedback' },
  { value: '2x', label: 'faster improvement reported' },
  { value: '50 min', label: 'focused per lesson' },
]

function Feedback() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.2 })
  const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 })
  const [statsRef, statsVisible] = useScrollReveal({ threshold: 0.2 })

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      {/* Decorative top divider line */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#e8400a]/30 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1680px]">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-14 max-w-[760px] transition-all duration-700 ease-out"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <span className="text-sm font-bold tracking-[0.08em] text-[#e8400a] sm:text-base">
            After Every Class
          </span>
          <h2 className="mt-3 text-[30px] font-extrabold leading-[1.15] tracking-tight text-[#12151d] sm:text-[38px]">
            Comprehensive Feedback{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8400a] to-[#ff7b54]">
              Built In
            </span>
          </h2>
          <p className="mt-5 text-[15px] leading-[1.8] text-[#4a5568]">
            Your improvement matters. That&apos;s why every lesson includes structured, actionable feedback — so you always know exactly what to work on next.
          </p>
        </div>

        {/* Two-column layout: cards + callout */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-10 xl:grid-cols-[1.1fr_0.9fr]">
          {/* Feedback cards */}
          <div ref={cardsRef} className="flex flex-col gap-5">
            {feedbackItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-[#fafafa] p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] sm:p-8"
                style={{
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: cardsVisible ? `${index * 120}ms` : '0ms',
                }}
              >
                {/* Subtle background gradient on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `radial-gradient(ellipse at 0% 0%, ${item.color}08 0%, transparent 70%)` }}
                />

                <div className="relative z-10 flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${item.color}12`, color: item.color }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <h3
                      className="text-[17px] font-bold leading-snug transition-colors duration-300"
                      style={{ color: '#1a202c' }}
                    >
                      {item.label}
                    </h3>
                    <p className="mt-2 text-[14px] leading-[1.75] text-[#4a5568]">
                      {item.detail}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                  style={{ background: `linear-gradient(to right, ${item.color}, ${item.color}44)` }}
                />
              </div>
            ))}

            {/* Closing note */}
            <div
              className="rounded-2xl border border-[#f0e4de] bg-[#fff7f4] p-5"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: cardsVisible ? '240ms' : '0ms',
              }}
            >
              <p className="text-[14px] leading-[1.8] text-[#5a3a2e]">
                <span className="mr-2 font-bold text-[#e8400a]">→</span>
                You will always know what to work on and <em>how</em> to improve — not just that you spoke.
              </p>
            </div>
          </div>

          {/* Stats panel */}
          <div
            ref={statsRef}
            className="flex flex-col justify-center gap-6"
            style={{ opacity: statsVisible ? 1 : 0, transform: statsVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s ease-out, transform 0.7s ease-out' }}
          >
            <div className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-gradient-to-br from-[#1a2340] to-[#2d4070] p-8 text-white shadow-[0_20px_50px_-15px_rgba(26,35,64,0.35)] sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.1em] text-[#ff8c6b]">
                Why it works
              </p>
              <h3 className="mt-4 text-[22px] font-extrabold leading-[1.25] sm:text-[26px]">
                Feedback is the fastest path to real improvement.
              </h3>
              <p className="mt-4 text-[14px] leading-[1.8] text-white/75">
                Without clear, specific feedback after each lesson, most learners repeat the same mistakes. Our structured reports mean every session moves you forward.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 border-t border-white/15 pt-8 sm:grid-cols-3">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="text-center"
                    style={{
                      opacity: statsVisible ? 1 : 0,
                      transform: statsVisible ? 'translateY(0)' : 'translateY(16px)',
                      transition: `opacity 0.5s ease-out ${160 + i * 100}ms, transform 0.5s ease-out ${160 + i * 100}ms`,
                    }}
                  >
                    <p className="text-[28px] font-extrabold leading-none text-[#ff8c6b]">{stat.value}</p>
                    <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-wide text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feedback
