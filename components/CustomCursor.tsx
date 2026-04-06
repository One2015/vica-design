'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Spring config: tight enough to feel responsive, loose enough to feel smooth
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      if (!isVisible) setIsVisible(true)
    },
    [cursorX, cursorY, isVisible],
  )

  const handleMouseEnter = useCallback(() => setIsHovering(true), [])
  const handleMouseLeave = useCallback(() => setIsHovering(false), [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    // Attach hover listeners to all interactive elements
    const attachListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })
    }

    attachListeners()

    // Re-attach when DOM changes (e.g. route transitions)
    const observer = new MutationObserver(attachListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave])

  return (
    <motion.div
      className="
        fixed top-0 left-0 z-[999]
        w-8 h-8 rounded-full
        pointer-events-none
        mix-blend-difference bg-white
        hidden md:block
      "
      style={{ x, y }}
      animate={{ scale: isHovering ? 1.75 : isVisible ? 1 : 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    />
  )
}
