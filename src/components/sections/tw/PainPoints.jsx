import { useState, useEffect } from 'react'

const struggles = [
  {
    id: 0,
    icon: '◎',
    label: 'Pronunciation That Affects Clarity',
    detail: 'Sounds, tones, and stress patterns from Mandarin often carry into English speech — making it harder for international listeners to follow.',
    color: '#E8490F',
    bg: '#FFF4F0',
    border: '#FDDDD3',
    stat: '71%',
    statLabel: 'of Taiwanese learners report this',
  },
  {
    id: 1,
    icon: '◈',
    label: 'Sentence Structures from Chinese Patterns',
    detail: 'Direct translation from Chinese creates word order and grammar issues that reduce the naturalness and professionalism of spoken English.',
    color: '#C48A00',
    bg: '#FFFBEE',
    border: '#FDEFC3',
    stat: '65%',
    statLabel: 'struggle with sentence structure',
  },
  {
    id: 2,
    icon: '✦',
    label: 'Expressing Ideas Professionally',
    detail: 'Speaking confidently in casual settings is different from articulating ideas clearly in meetings, presentations, and global collaborations.',
    color: '#008F77',
    bg: '#F0FDFB',
    border: '#C5F0E8',
    stat: '78%',
    statLabel: 'find professional contexts harder',
  },
  {
    id: 3,
    icon: '◐',
    label: 'Precision in Grammar & Word Choice',
    detail: 'Small errors in word choice or grammar quietly undermine your credibility — even when your ideas are strong and your intent is clear.',
    color: '#6D3FC8',
    bg: '#F8F4FF',
    border: '#E4D6FC',
    stat: '69%',
    statLabel: 'struggle with precision daily',
  },
]

const pillars = [
  { label: 'Clear', icon: '◎', desc: 'Every sentence lands with precision' },
  { label: 'Natural', icon: '∿', desc: 'Rhythm that flows without effort' },
  { label: 'Professional', icon: '⊞', desc: 'Structured for global business standards' },
]

function Card({ item, isActive, isHovered, onClick, onMouseEnter, onMouseLeave, compact }) {
  const lifted = isActive || isHovered
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        textAlign: 'left',
        padding: compact ? '18px' : '24px',
        borderRadius: compact ? '16px' : '20px',
        border: `1.5px solid ${lifted ? item.color : '#E8E0D8'}`,
        background: isActive ? item.bg : isHovered ? `${item.bg}99` : '#FFFFFF',
        transform: compact
          ? isActive ? 'translateY(-2px)' : 'none'
          : isActive ? 'scale(1.03) translateY(-4px)'
          : isHovered ? 'translateY(-3px)' : 'scale(1)',
        boxShadow: isActive
          ? `0 16px 48px ${item.color}28, 0 4px 16px ${item.color}18`
          : isHovered
          ? `0 8px 28px ${item.color}18`
          : '0 2px 12px rgba(0,0,0,0.06)',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow streak */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '2px',
        background: `linear-gradient(to right, transparent, ${item.color}, transparent)`,
        opacity: lifted ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{
          fontSize: compact ? '20px' : '24px',
          color: item.color,
          display: 'inline-block',
          transform: lifted ? 'rotate(20deg) scale(1.2)' : 'rotate(0deg) scale(1)',
          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}>
          {item.icon}
        </span>
        <div style={{ flex: 1 }}>
          <p style={{
            fontWeight: 700,
            fontSize: compact ? '16px' : '17px',
            marginBottom: '4px',
            color: isActive ? item.color : '#2C2620',
            fontFamily: "'Georgia', serif",
            transition: 'color 0.2s',
          }}>
            {item.label}
          </p>

          {/* Detail expand */}
          <div style={{
            maxHeight: isActive ? (compact ? '240px' : '160px') : '0px',
            opacity: isActive ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.5s ease, opacity 0.4s ease',
          }}>
            <p style={{ fontSize: compact ? '13px' : '14px', lineHeight: 1.7, paddingTop: '8px', color: '#5A5048' }}>
              {item.detail}
            </p>
            <div style={{ marginTop: '12px', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: compact ? '24px' : '28px', fontWeight: 800, color: item.color, fontFamily: "'Georgia', serif" }}>
                {item.stat}
              </span>
              <span style={{ fontSize: '12px', color: '#8A7F76' }}>{item.statLabel}</span>
            </div>
          </div>

          {!isActive && (
            <p style={{
              fontSize: compact ? '10px' : '11px',
              marginTop: '4px',
              color: isHovered ? item.color : '#B0A89E',
              fontFamily: 'monospace',
              transition: 'color 0.2s',
            }}>
              {isHovered ? 'click to explore →' : 'tap to expand →'}
            </p>
          )}
        </div>
      </div>
    </button>
  )
}

export default function PainPoints() {
  const [activeCard, setActiveCard] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [hoveredBtn, setHoveredBtn] = useState(false)
  const [hoveredPillar, setHoveredPillar] = useState(null)
  const [quoteHovered, setQuoteHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionMaxWidth = '960px'

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth < 768)
    updateViewport()
    window.addEventListener('resize', updateViewport)
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: 'linear-gradient(160deg, #FDF8F3 0%, #F5EFE8 60%, #EEF6F4 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 'clamp(40px, 6vw, 72px) clamp(20px, 4vw, 40px)',
    }}>

      {/* Header */}
      <div style={{ maxWidth: sectionMaxWidth, width: '100%', marginBottom: 'clamp(32px, 5vw, 48px)', textAlign: 'center' }}>
        <h2 style={{
          fontSize: 'clamp(28px, 4.2vw, 40px)',
          fontWeight: 800,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: '#1C1A17',
          marginBottom: '20px',
        }}>
          Why Taiwanese Learners
          <br />
          <span style={{ color: '#E8490F', fontStyle: 'italic' }}>Choose Brighture</span>
        </h2>
        <div style={{
          height: '1px', width: '96px', margin: '0 auto 22px',
          background: 'linear-gradient(to right, #E8490F, transparent)',
        }} />
        <p style={{ fontSize: isMobile ? '16px' : '18px', lineHeight: 1.75, color: '#6B6259' }}>
          Many Taiwanese professionals can speak English — but still struggle with pronunciation clarity, sentence structure, expressing ideas professionally, and precision in grammar and word choice.
        </p>
      </div>

      {/* Cards Grid */}
      <div style={{
        maxWidth: sectionMaxWidth, width: '100%',
        display: 'grid',
        gridTemplateColumns: isMobile ? 'minmax(0, 1fr)' : 'repeat(2, minmax(0, 1fr))',
        gap: isMobile ? '12px' : '16px',
        marginBottom: 'clamp(32px, 5vw, 48px)',
      }}>
        {struggles.map((item) => (
          <Card
            key={item.id}
            item={item}
            isActive={activeCard === item.id}
            isHovered={hoveredCard === item.id && activeCard !== item.id}
            compact={isMobile}
            onClick={() => setActiveCard(activeCard === item.id ? null : item.id)}
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
          />
        ))}
      </div>

      {/* Quote Block */}
      <div
        onMouseEnter={() => setQuoteHovered(true)}
        onMouseLeave={() => setQuoteHovered(false)}
        style={{
          maxWidth: sectionMaxWidth, width: '100%',
          padding: isMobile ? '24px 16px' : 'clamp(32px, 4vw, 48px) clamp(24px, 5vw, 48px)',
          marginBottom: 'clamp(28px, 4vw, 40px)',
          position: 'relative',
          overflow: 'hidden',
          background: 'transparent',
          transition: 'all 0.4s ease',
          cursor: 'default',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Left background quote mark */}
        <span style={{
          position: 'absolute',
          top: isMobile ? '-24px' : '-40px',
          left: isMobile ? '8px' : '24px',
          fontSize: isMobile ? '140px' : '220px',
          lineHeight: 1,
          color: quoteHovered ? 'rgba(232, 73, 15, 0.08)' : 'rgba(28, 26, 23, 0.05)',
          fontFamily: "'Georgia', serif",
          transition: 'color 0.4s',
          userSelect: 'none',
          pointerEvents: 'none',
          fontWeight: 800,
        }}>
          "
        </span>

        {/* Right background quote mark */}
        <span style={{
          position: 'absolute',
          bottom: isMobile ? '-70px' : '-120px',
          right: isMobile ? '8px' : '24px',
          fontSize: isMobile ? '140px' : '220px',
          lineHeight: 1,
          color: quoteHovered ? 'rgba(232, 73, 15, 0.08)' : 'rgba(28, 26, 23, 0.05)',
          fontFamily: "'Georgia', serif",
          transition: 'color 0.4s',
          userSelect: 'none',
          pointerEvents: 'none',
          fontWeight: 800,
        }}>
          "
        </span>

        <style>{`
          @keyframes quoteDropFast {
            0%, 5% { transform: translateY(-120%); opacity: 0; animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1); }
            20%, 85% { transform: translateY(0); opacity: 1; animation-timing-function: cubic-bezier(0.6, 0, 0.8, 0.2); }
            95%, 100% { transform: translateY(120%); opacity: 0; }
          }
          @keyframes quoteGlowWell {
            0%, 100% { transform: scale(1); color: #1C1A17; text-shadow: 0 0 0 transparent; }
            50% { transform: scale(1.05); color: #008F77; text-shadow: 0 4px 16px rgba(0,143,119,0.3); }
          }
        `}</style>

        <p style={{
          position: 'relative',
          zIndex: 1,
          fontSize: isMobile ? 'clamp(18px, 5.5vw, 22px)' : 'clamp(22px, 2.5vw, 30px)',
          fontWeight: 400,
          lineHeight: 1.5,
          color: '#6B6259',
          fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          maxWidth: '800px',
        }}>
          Speaking <span style={{
            position: 'relative',
            display: 'inline-block',
            fontWeight: 800,
            color: '#E8490F',
          }}>
            <span style={{ visibility: 'hidden' }}>fast</span>
            <span style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              <span style={{
                display: 'inline-block',
                animation: 'quoteDropFast 3s infinite',
                willChange: 'transform, opacity',
              }}>fast</span>
            </span>
          </span> does not always mean speaking <span style={{
            display: 'inline-block',
            fontWeight: 800,
            color: '#1C1A17',
            transformOrigin: 'bottom center',
            animation: 'quoteGlowWell 2.5s infinite alternate ease-in-out',
          }}>well.</span>
        </p>
      </div>

      {/* CTA Button */}
      <div style={{ maxWidth: sectionMaxWidth, width: '100%', textAlign: 'center' }}>
        <button
          onClick={() => setRevealed(!revealed)}
          onMouseEnter={() => setHoveredBtn(true)}
          onMouseLeave={() => setHoveredBtn(false)}
          style={{
            padding: isMobile ? '13px 20px' : '14px 32px',
            borderRadius: '12px',
            fontSize: isMobile ? '15px' : '16px',
            fontWeight: 700,
            letterSpacing: '0.02em',
            fontFamily: 'inherit',
            cursor: 'pointer',
            border: 'none',
            background: 'linear-gradient(to right, #e8400a, #ff6a3d)',
            color: '#fff',
            boxShadow: hoveredBtn
              ? '0 12px 30px -5px rgba(232,64,10,0.6)'
              : '0 8px 25px -5px rgba(232,64,10,0.5)',
            transform: hoveredBtn ? 'scale(1.02)' : 'scale(1)',
            transition: 'all 0.3s',
            marginBottom: '28px',
            position: 'relative',
            overflow: 'hidden',
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '360px' : 'none',
          }}
        >
          <span style={{
            position: 'absolute',
            inset: 0,
            transform: hoveredBtn ? 'translateX(200%) skewX(-20deg)' : 'translateX(-100%) skewX(-20deg)',
            background: 'rgba(255,255,255,0.2)',
            transition: 'transform 0.7s',
            pointerEvents: 'none',
          }} />
          <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            {revealed ? 'The Brighture Promise' : 'What We Do Differently'}
            <svg
              style={{ width: '16px', height: '16px', transform: hoveredBtn ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.3s' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </button>

        {/* Reveal Panel */}
        <div style={{
          overflow: 'hidden',
          maxHeight: revealed ? (isMobile ? '760px' : '600px') : '0px',
          opacity: revealed ? 1 : 0,
          transition: 'max-height 0.7s ease, opacity 0.5s ease',
        }}>
          <div style={{
            borderRadius: '20px',
            padding: isMobile ? '22px' : '32px',
            textAlign: 'left',
            background: '#F0FDFB',
            border: '1.5px solid #C5F0E8',
            boxShadow: '0 4px 24px #008F7711',
          }}>
            <p style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#008F77',
              fontFamily: 'monospace',
              marginBottom: '16px',
            }}>At Brighture</p>
            <p style={{
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              fontWeight: 700,
              lineHeight: 1.65,
              color: '#1C1A17',
              fontFamily: "'Georgia', serif",
              marginBottom: '24px',
            }}>
              We focus on{' '}
              <span style={{ color: '#008F77', fontStyle: 'italic' }}>proper fluency</span>{' '}
              — speaking clearly, naturally, and with the right structure so your message
              is understood{' '}
              <span style={{ borderBottom: '2px solid #C48A00' }}>the first time.</span>
            </p>

            {/* Pillars */}
            <div style={{ display: isMobile ? 'grid' : 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {pillars.map((p) => (
                <div
                  key={p.label}
                  onMouseEnter={() => setHoveredPillar(p.label)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '12px',
                    background: hoveredPillar === p.label ? '#008F77' : '#FFFFFF',
                    border: '1.5px solid #C5F0E8',
                    cursor: 'default',
                    transition: 'all 0.25s ease',
                    transform: hoveredPillar === p.label ? 'translateY(-2px)' : 'none',
                    boxShadow: hoveredPillar === p.label ? '0 6px 20px #008F7733' : 'none',
                    width: isMobile ? '100%' : 'auto',
                  }}
                >
                  <p style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: hoveredPillar === p.label ? '#fff' : '#008F77',
                    fontFamily: 'monospace',
                    marginBottom: '2px',
                    transition: 'color 0.2s',
                  }}>
                    {p.icon} {p.label}
                  </p>
                  <p style={{
                    fontSize: '11px',
                    color: hoveredPillar === p.label ? '#C5F0E8' : '#7ABFB5',
                    transition: 'color 0.2s',
                  }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
