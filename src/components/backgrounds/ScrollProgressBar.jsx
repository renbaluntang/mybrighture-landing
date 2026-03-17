import { useState, useEffect } from 'react'

/**
 * ScrollProgressBar
 * A fixed, top-of-page scroll progress indicator.
 * Adapts to the brand orange colour (#f15a22) with a subtle tinted track.
 */
function ScrollProgressBar() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement
      setPct((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: 3,
        background: 'rgba(241,90,34,0.15)',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${pct}%`,
          background: 'linear-gradient(to right, #e8400a, #f15a22)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  )
}

export default ScrollProgressBar
