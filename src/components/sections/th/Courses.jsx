import { useState, useEffect } from 'react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { useCardReveal } from '../../../hooks/useCardReveal'

const courseCards = [
  {
    id: '01',
    title: 'Speech Fluency',
    description: 'Speak more smoothly, naturally, and confidently by improving core delivery skills.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.5a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75H6.75Z" />
      </svg>
    ),
    accent: '#e8400a',
  },
  {
    id: '02',
    title: 'Phonics & Pronunciation',
    description: 'Improve sounds, stress, and intonation so your English is easier to understand.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
    accent: '#f15a22',
  },
  {
    id: '03',
    title: 'Listening & Speaking',
    description: 'Train your ear while responding naturally and confidently in conversations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    accent: '#1a2340',
  },
  {
    id: '04',
    title: 'Daily Conversation',
    description: 'Practical English for real-life situations, not textbook-only language.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" />
      </svg>
    ),
    accent: '#2d5a8e',
  },
  {
    id: '05',
    title: 'Business Coaching',
    description: 'Develop professional English for meetings, presentations, and workplace communication.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    accent: '#7b4ea8',
  },
  {
    id: '06',
    title: 'Exam Preparation',
    description: 'Structured support for exams, focusing on speaking accuracy and clarity.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="h-5 w-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-1.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    accent: '#0d7a5f',
  },
]

// Individual card — owns its own IntersectionObserver via useCardReveal
function CourseCard({ course, gridVisible, index }) {
  const [cardRef, isActive] = useCardReveal({ threshold: 0.35 })
  const [hasHover, setHasHover] = useState(true)
  const [autoPulse, setAutoPulse] = useState(false)

  // Fixed tilt used only for mobile auto-pulse (no live tracking on touch)
  const tiltTransforms = [
    'perspective(600px) rotateX(4deg) rotateY(-4deg)',
    'perspective(600px) rotateX(4deg) rotateY(4deg)',
    'perspective(600px) rotateX(-4deg) rotateY(-4deg)',
    'perspective(600px) rotateX(-4deg) rotateY(4deg)',
  ];
  const mobilePulseTilt = tiltTransforms[index % tiltTransforms.length];

  useEffect(() => {
    // Determine if the user has a cursor/mouse
    const isHoverable = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setHasHover(isHoverable)

    // If there is NO cursor (e.g., mobile phone), start an auto-animation "breathing" loop
    if (!isHoverable) {
      const interval = setInterval(() => {
        setAutoPulse(prev => !prev)
      }, 3500 + index * 800) // Staggered timers so the cards organically wave
      
      return () => clearInterval(interval)
    }
  }, [index])

  // For touch devices, it's visibly "active" if it has scrolled on-screen (isActive) AND is pulsing
  const isTouchActive = !hasHover && isActive && autoPulse

  return (
    <article
      ref={cardRef}
      className={`relative z-0 transition-opacity duration-500 ${hasHover ? 'hover:z-20' : isTouchActive ? 'z-20' : 'z-0'}`}
      style={{
        // entrance animation driven by the grid-level observer
        opacity: gridVisible ? 1 : 0,
        transform: gridVisible ? 'translateY(0)' : 'translateY(28px)',
        transitionDelay: gridVisible ? `${index * 60}ms` : '0ms',
        transitionProperty: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDuration: '400ms',
      }}
    >
      <div
        className="group relative flex h-full flex-col bg-[#f9fafb] p-7 will-change-transform"
        style={{
          // Smooth reset when mouse leaves
          transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease',
          // Mobile auto-pulse lift
          ...(isTouchActive && {
            backgroundColor: 'white',
            transform: mobilePulseTilt,
            boxShadow: '0 22px 50px -12px rgba(0,0,0,0.18)',
          }),
        }}
        // Real-time mouse-tracking 3D tilt — mirrors TiltCard from BrightureTH.jsx
        onMouseMove={(e) => {
          if (!hasHover) return;
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
          e.currentTarget.style.transition = 'none';
          e.currentTarget.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${y}deg) scale(1.02)`;
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.boxShadow = '0 22px 50px -12px rgba(0,0,0,0.18)';
        }}
        onMouseLeave={(e) => {
          if (!hasHover) return;
          e.currentTarget.style.transition = 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease';
          e.currentTarget.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)';
          e.currentTarget.style.backgroundColor = '';
          e.currentTarget.style.boxShadow = '';
        }}
      >
        {/* Icon + number row */}
        <div className="mb-6 flex items-center justify-between">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-700 ${hasHover ? 'group-hover:scale-105' : ''}`}
            style={{
              background: `${course.accent}12`,
              color: course.accent,
              // touch auto: keep the icon in its "activated" scale briefly
              transform: isTouchActive ? 'scale(1.05)' : undefined,
            }}
          >
            {course.icon}
          </div>
          <span
            className="font-mono text-[10px] font-bold tracking-widest"
            style={{ color: `${course.accent}55` }}
          >
            {course.id}
          </span>
        </div>

        {/* Bottom accent line — hover on desktop, scroll-reveal on touch */}
        <div
          className={`absolute bottom-0 left-0 h-[2px] transition-all duration-700 ${hasHover ? 'group-hover:w-full' : ''}`}
          style={{
            background: `linear-gradient(to right, ${course.accent}, ${course.accent}44)`,
            // touch auto: full-width during pulse
            width: isTouchActive ? '100%' : '0%',
          }}
        />

        <h3
          className="text-[15px] font-bold leading-snug tracking-tight text-[#12151d]"
        >
          {course.title}
        </h3>
        <p className="mt-2.5 text-[13px] leading-[1.75] text-[#64748b]">
          {course.description}
        </p>
      </div>
    </article>
  )
}

function Courses() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.15 })
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 })

  return (
    <section id="lessons" className="relative overflow-hidden bg-[#f9fafb] px-6 py-24 sm:px-10 lg:px-20">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute right-0 top-0 h-[480px] w-[480px] rounded-full bg-gradient-to-bl from-[#e8400a]/6 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-[#1a2340]/5 to-transparent blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1680px]">

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className="mb-16 transition-all duration-700 ease-out"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#e8400a]">
            What We Teach
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-tight text-[#12151d] sm:text-[36px] lg:text-[42px]">
              Courses Designed for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8400a] to-[#ff7b54]">
                You
              </span>
            </h2>
            <p className="max-w-sm text-[14px] leading-[1.8] text-[#64748b] sm:text-right">
              Structured, focused, and built around real communication for every learner.
            </p>
          </div>
          {/* Divider */}
          <div className="mt-8 h-px w-full bg-gradient-to-r from-[#e8400a]/30 via-[#e2e8f0] to-transparent" />
        </div>

        {/* ── Course grid ── */}
        <div
          ref={gridRef}
          className="grid gap-px bg-[#e8edf2] sm:grid-cols-2 xl:grid-cols-3 rounded-2xl overflow-hidden shadow-sm"
        >
          {courseCards.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              gridVisible={gridVisible}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Courses
