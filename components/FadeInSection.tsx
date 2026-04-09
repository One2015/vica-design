'use client'
import { useEffect, useRef, ReactNode } from 'react'

interface FadeInSectionProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeInSection({ children, delay = 0, className = '' }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible')
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`fade-in ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
