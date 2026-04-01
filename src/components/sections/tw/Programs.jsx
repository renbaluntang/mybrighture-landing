import { useState, useEffect } from 'react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'
import { useCardReveal } from '../../../hooks/useCardReveal'

const programs = [
  {
    id: '01',
    emoji: '💼',
    title: 'Business Coaching',
    description: 'Develop professional speaking skills for meetings, presentations, and international collaboration.',
    accent: '#e8400a',
  },
  {
    id: '02',
    emoji: '✍️',
    title: 'Business Writing',
    description: 'Improve clarity, tone, and structure in emails, reports, and professional documents.',
    accent: '#f15a22',
  },
  {
    id: '03',
    emoji: '🔤',
    title: 'Phonics & Pronunciation',
    description: 'Refine sounds, stress, and intonation for clearer, more professional speech.',
    accent: '#1a2340',
  },
  {
    id: '04',
    emoji: '🗣',
    title: 'Speech Fluency',
    description: 'Speak more smoothly and naturally by improving intonation, stress, rhythm, emotion, expression, flow, and pacing.',
    accent: '#2d5a8e',
  },
  {
    id: '05',
    emoji: '🤝',
    title: 'Daily Conversation',
    description: 'Communicate naturally and confidently in professional and social settings.',
    accent: '#7b4ea8',
  },
  {
    id: '06',
    emoji: '📝',
    title: 'Exam Preparation',
    description: 'Targeted support for exams that require accuracy, structure, and clear expression.',
    accent: '#0d7a5f',
  },
]

function ProgramCard({ program, gridVisible, index }) {
  const [cardRef, isActive] = useCardReveal({ threshold: 0.35 })
  const [hasHover, setHasHover] = useState(true)
  const [autoPulse, setAutoPulse] = useState(false)

  // Generate a distinct tilt direction based on the card's array index
  const tiltTransforms = [
    'translateZ(20px) rotateX(4deg) rotateY(-4deg)',   // Lift bottom-right
    'translateZ(20px) rotateX(4deg) rotateY(4deg)',    // Lift bottom-left
    'translateZ(20px) rotateX(-4deg) rotateY(-4deg)',  // Lift top-right
    'translateZ(20px) rotateX(-4deg) rotateY(4deg)',   // Lift top-left
  ];
  
  const hoverTransform = tiltTransforms[index % tiltTransforms.length];

  useEffect(() => {
    const isHoverable = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setHasHover(isHoverable)

    if (!isHoverable) {
      const interval = setInterval(() => {
        setAutoPulse(prev => !prev)
      }, 3500 + index * 800)
      
      return () => clearInterval(interval)
    }
  }, [index])

  const isTouchActive = !hasHover && isActive && autoPulse

  return (
    <article
      ref={cardRef}
      className={`relative z-0 transition-opacity duration-500 perspective-[1000px] ${hasHover ? 'hover:z-20' : isTouchActive ? 'z-20' : 'z-0'}`}
      style={{
        opacity: gridVisible ? 1 : 0,
        transform: gridVisible ? 'translateY(0)' : 'translateY(28px)',
        transitionDelay: gridVisible ? `${index * 60}ms` : '0ms',
        transitionProperty: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        transitionDuration: '400ms',
      }}
    >
      <div
        className={`group relative flex h-full flex-col bg-[#f9fafb] p-7 transition-all duration-700 will-change-transform shadow-[0_0px_0px_rgba(0,0,0,0)]`}
        style={{
          ...(hasHover ? {} : {}),
          ...((isTouchActive) && { 
            backgroundColor: 'white',
            transform: hoverTransform,
            boxShadow: '0 22px 50px -12px rgba(0,0,0,0.18)'
          }),
        }}
        onMouseEnter={(e) => {
          if (!hasHover) return;
          e.currentTarget.style.transform = hoverTransform;
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.boxShadow = '0 22px 50px -12px rgba(0,0,0,0.18)';
        }}
        onMouseLeave={(e) => {
          if (!hasHover) return;
          e.currentTarget.style.transform = '';
          e.currentTarget.style.backgroundColor = '';
          e.currentTarget.style.boxShadow = '';
        }}
      >
        {/* Bottom accent line */}
        <div
          className={`absolute bottom-0 left-0 h-[2px] transition-all duration-700 ${hasHover ? 'group-hover:w-full' : ''}`}
          style={{
            background: `linear-gradient(to right, ${program.accent}, ${program.accent}44)`,
            width: isTouchActive ? '100%' : '0%',
          }}
        />

        {/* Emoji icon + number row */}
        <div className="mb-5 flex items-center justify-between">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg transition-transform duration-700 ${hasHover ? 'group-hover:scale-105' : ''}`}
            style={{
              background: `${program.accent}12`,
              transform: isTouchActive ? 'scale(1.05)' : undefined,
            }}
          >
            {program.emoji}
          </div>
          <span
            className="font-mono text-[10px] font-bold tracking-widest"
            style={{ color: `${program.accent}55` }}
          >
            {program.id}
          </span>
        </div>

        <h3 className="text-[15px] font-bold leading-snug tracking-tight text-[#12151d]">
          {program.title}
        </h3>
        <p className="mt-2.5 text-[13px] leading-[1.75] text-[#64748b]">
          {program.description}
        </p>
      </div>
    </article>
  )
}

function Programs() {
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.15 })
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 })

  return (
    <section id="programs" className="relative overflow-hidden bg-[#f9fafb] px-6 py-24 sm:px-10 lg:px-20">
      <div className="pointer-events-none absolute right-0 top-0 h-[480px] w-[480px] rounded-full bg-gradient-to-bl from-[#e8400a]/6 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-gradient-to-tr from-[#1a2340]/5 to-transparent blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1680px]">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-16 transition-all duration-700 ease-out"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(20px)' }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#e8400a]">
            Programs Designed for Learners
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-tight text-[#12151d] sm:text-[36px] lg:text-[42px]">
              Programs Built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8400a] to-[#ff7b54]">
                Global Careers
              </span>
            </h2>
            <p className="max-w-sm text-[14px] leading-[1.8] text-[#64748b] sm:text-right">
              Structured, focused, and built around professional communication needs.
            </p>
          </div>
          <div className="mt-8 h-px w-full bg-gradient-to-r from-[#e8400a]/30 via-[#e2e8f0] to-transparent" />
        </div>

        {/* Programs grid */}
        <div
          ref={gridRef}
          className="grid gap-px bg-[#e8edf2] sm:grid-cols-2 xl:grid-cols-3 rounded-2xl overflow-hidden shadow-sm"
        >
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} gridVisible={gridVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
