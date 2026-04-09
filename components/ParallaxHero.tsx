'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface ParallaxHeroProps {
  src: string
  alt: string
  quality?: number
}

export function ParallaxHero({ src, alt, quality = 100 }: ParallaxHeroProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.5)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="hero-container">
      <Image
        src={src}
        alt={alt}
        fill
        quality={quality}
        priority
        sizes="100vw"
        style={{ transform: `translateY(${offset}px)` }}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>
  )
}
