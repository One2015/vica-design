'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Image from 'next/image'

interface ImageParallaxProps {
  src: string
  alt: string
  /** Aspect ratio class, e.g. "aspect-video" or "aspect-[4/3]". Defaults to aspect-video. */
  aspectClass?: string
  priority?: boolean
  quality?: number
}

export function ImageParallax({
  src,
  alt,
  aspectClass = 'aspect-video',
  priority = false,
  quality = 95,
}: ImageParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Image moves -10% → +10% relative to its container as it scrolls through viewport
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <div ref={ref} className={`relative overflow-hidden ${aspectClass}`}>
      {/* Scale up to 120% so the parallax shift never exposes edges */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-[1.2]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={quality}
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
    </div>
  )
}
