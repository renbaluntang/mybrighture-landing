import { useState } from 'react'
import { useScrollReveal } from '../../../hooks/useScrollReveal'

const painPoints = [
  {
    id: 0,
    icon: '◎',
    label: 'Pronunciation & Intonation',
    detail: 'Strong Vietnamese-influenced pronunciation and flat intonation make it difficult for international colleagues to understand clearly.',
    color: '#E8490F',
    bg: '#FFF4F0',
    border: '#FDDDD3',
    stat: '76%',
    statLabel: 'of Vietnamese learners report this',
  },
  {
    id: 1,
    icon: '◈',
    label: 'Sentence Structure & Direct Translation',
    detail: 'Translating directly from Vietnamese creates awkward phrasing and difficulty forming long, natural English sentences.',
    color: '#C48A00',
    bg: '#FFFBEE',
    border: '#FDEFC3',
    stat: '68%',
    statLabel: 'struggle with sentence length',
  },
  {
    id: 2,
    icon: '✦',
    label: 'Overusing Simple Grammar',
    detail: 'Relying only on basic grammar structures limits your ability to express complex ideas accurately in professional settings.',
    color: '#008F77',
    bg: '#F0FDFB',
    border: '#C5F0E8',
    stat: '72%',
    statLabel: 'find professional ideas harder',
  },
  {
    id: 3,
    icon: '◐',
    label: 'Limited Confidence Under Pressure',
    detail: 'Without the right structure, it is hard to speak confidently in meetings, interviews, and presentations.',
    color: '#6D3FC8',
    bg: '#F8F4FF',
    border: '#E4D6FC',
    stat: '64%',
    statLabel: 'lack confidence in meetings',
  },
]

function PainPoints() {
  const [activeCard, setActiveCard] = useState(null)
  const [headerRef, headerVisible] = useScrollReveal({ threshold: 0.15 })
  const [gridRef, gridVisible] = useScrollReveal({ threshold: 0.05 })

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#e8400a]/25 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1680px]">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-14 transition-all duration-700 ease-out"
          style={{ opacity: headerVisible ? 1 : 0, transform: headerVisible ? 'translateY(0)' : 'translateY(24px)' }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-[#e8400a]">English for Vietnamese Professionals</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[28px] font-extrabold leading-[1.15] tracking-tight text-[#12151d] sm:text-[36px] lg:text-[42px]">
              Motivated & Hardworking, But{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8400a] to-[#ff7b54]">
                Still Struggling With:
              </span>
            </h2>
            <p className="max-w-sm text-[14px] leading-[1.8] text-[#64748b] sm:text-right">
              In global companies, how you say something matters as much as what you say.
            </p>
          </div>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-[#e8400a]/30 via-[#e2e8f0] to-transparent" />
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid gap-4 sm:grid-cols-2">
          {painPoints.map((item, index) => {
            const isActive = activeCard === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveCard(isActive ? null : item.id)}
                className="group text-left"
                style={{
                  opacity: gridVisible ? 1 : 0,
                  transform: gridVisible ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.5s ease-out ${index * 80}ms, transform 0.5s ease-out ${index * 80}ms`,
                }}
              >
                <div
                  className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300"
                  style={{
                    background: isActive ? item.bg : '#fafafa',
                    border: `1.5px solid ${isActive ? item.color : '#e2e8f0'}`,
                    boxShadow: isActive ? `0 16px 40px ${item.color}1a` : '0 2px 8px rgba(0,0,0,0.04)',
                    transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                  }}
                >
                  <div
                    className="absolute left-0 top-0 h-[2px] transition-all duration-500"
                    style={{ width: isActive ? '100%' : '0%', background: `linear-gradient(to right, ${item.color}, ${item.color}44)` }}
                  />
                  <div className="flex items-start gap-4">
                    <span
                      className="mt-0.5 text-[22px] transition-transform duration-400"
                      style={{ color: item.color, transform: isActive ? 'rotate(20deg) scale(1.2)' : 'none' }}
                    >
                      {item.icon}
                    </span>
                    <div className="flex-1">
                      <h3
                        className="text-[15px] font-bold leading-snug transition-colors duration-200"
                        style={{ color: isActive ? item.color : '#1a202c' }}
                      >
                        {item.label}
                      </h3>

                      <div
                        style={{
                          maxHeight: isActive ? '200px' : '0px',
                          opacity: isActive ? 1 : 0,
                          overflow: 'hidden',
                          transition: 'max-height 0.45s ease, opacity 0.35s ease',
                        }}
                      >
                        <p className="mt-2 text-[13px] leading-[1.75] text-[#4a5568]">{item.detail}</p>
                        <div className="mt-3 flex items-baseline gap-2">
                          <span className="text-[26px] font-extrabold" style={{ color: item.color }}>{item.stat}</span>
                          <span className="text-[11px] text-[#94a3b8]">{item.statLabel}</span>
                        </div>
                      </div>

                      {!isActive && (
                        <p className="mt-1.5 font-mono text-[10px] text-[#b0bec5]">tap to expand →</p>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Closing callout */}
        <div
          className="mt-8 rounded-2xl border border-[#f0e4de] bg-[#fff7f4] px-6 py-5"
          style={{
            opacity: gridVisible ? 1 : 0,
            transform: gridVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out 320ms, transform 0.6s ease-out 320ms',
          }}
        >
          <p className="text-[14px] leading-[1.8] text-[#5a3a2e]">
            <span className="mr-2 font-bold text-[#e8400a]">→</span>
            We train you to speak clearly, professionally, and logically — the way international teams expect.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PainPoints
