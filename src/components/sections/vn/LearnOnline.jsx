import { useScrollReveal } from '../../../hooks/useScrollReveal'

const benefits = [
  {
    id: 'anywhere',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Study From Anywhere',
    description: 'Study from your home or office while receiving high professional standard instruction.',
    stat: '100%',
    statLabel: 'Online',
  },
  {
    id: 'structured',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" />
      </svg>
    ),
    title: 'Structured Lesson Plans',
    description: 'Every session follows a structured plan designed for accuracy, clarity, and logical progression.',
    stat: 'Focused',
    statLabel: 'Coaching',
  },
  {
    id: 'progress',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
    title: 'Professional Growth',
    description: 'Focused coaching that prepares you for global careers and international communication standards.',
    stat: '2x',
    statLabel: 'Faster progress',
  },
]

function LearnOnline() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.2 })
  const [contentRef, contentVisible] = useScrollReveal({ threshold: 0.1 })

  return (
    <section className="relative overflow-hidden bg-[#f4f6f8] px-6 py-20 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#e8400a]/25 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1680px]">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: text */}
          <div
            ref={headerRef}
            className="transition-all duration-700 ease-out"
            style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateX(0)' : 'translateX(-28px)' }}
          >
            <span className="text-sm font-bold tracking-[0.08em] text-[#e8400a] sm:text-base">Fully Online</span>
            <h2 className="mt-3 text-[30px] font-extrabold leading-[1.15] tracking-tight text-[#12151d] sm:text-[38px]">
              Online Learning with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8400a] to-[#ff7b54]">
                Global Standards
              </span>
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-[#4a5568]">
              All classes are conducted online, allowing flexible learning while maintaining structured lesson plans, high expectations for accuracy, and focused coaching for professional growth in global careers.
            </p>
            <div className="mt-8">
              <a
                href="/register/index.html"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#e8400a] to-[#ff6a3d] px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_8px_25px_-5px_rgba(232,64,10,0.45)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_12px_30px_-5px_rgba(232,64,10,0.55)]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[200%]" aria-hidden="true" />
                <span className="relative flex items-center gap-2">
                  Book a Free Trial
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </a>
            </div>
            <p className="mt-5 flex items-center gap-2 text-[12px] font-medium text-[#718096]">
              <svg className="h-3.5 w-3.5 text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
              </svg>
              No commitment — cancel anytime
            </p>
          </div>

          {/* Right: benefit cards */}
          <div ref={contentRef} className="flex flex-col gap-4">
            {benefits.map((item, index) => (
              <div
                key={item.id}
                className="group relative flex cursor-default items-center gap-5 overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-5 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#f0ccc2] hover:shadow-[0_16px_32px_-12px_rgba(232,64,10,0.15)] sm:p-6"
                style={{
                  opacity: contentVisible ? 1 : 0,
                  transform: contentVisible ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: contentVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#e8400a]/5 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f4f6f8] text-[#64748b] transition-all duration-300 group-hover:bg-[#e8400a]/10 group-hover:text-[#e8400a] group-hover:scale-110">
                  {item.icon}
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-[15px] font-bold text-[#1a202c] transition-colors duration-300 group-hover:text-[#e8400a]">{item.title}</h3>
                  <p className="mt-1 text-[13px] leading-[1.7] text-[#4a5568]">{item.description}</p>
                </div>
                <div className="relative z-10 ml-auto shrink-0 text-right">
                  <p className="text-[22px] font-extrabold leading-none text-[#cbd5e0] transition-colors duration-300 group-hover:text-[#e8400a]">{item.stat}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-[#94a3b8] transition-colors duration-300 group-hover:text-[#f15a22]">{item.statLabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearnOnline
