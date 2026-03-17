import { useEffect, useRef, useState } from 'react'

/**
 * Detects once whether the primary input is a coarse pointer (touch) device.
 * `(hover: none)` covers phones, tablets, and any device without a true hover capability.
 */
function isTouchDevice() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches
}

/**
 * useCardReveal
 *
 * Returns [ref, isActive, isVisible].
 *
 * - `isVisible`  — true once the element has entered the viewport (scroll-reveal entry)
 * - `isActive`   — on touch devices: same as isVisible (auto-activates on scroll)
 *                  on pointer devices: always false (left to CSS :hover / group-hover)
 *
 * Usage: attach `ref` to the card element.
 * Use `isActive` to drive JS-controlled "hover-like" styles on mobile/tablet.
 * Use `isVisible` for the fade-in / slide-up entrance animation.
 */
export function useCardReveal({ threshold = 0.3, rootMargin = '0px 0px -40px 0px' } = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const touch = useRef(isTouchDevice())

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const isActive = touch.current ? isVisible : false

  return [ref, isActive, isVisible]
}
