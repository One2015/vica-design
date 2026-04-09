'use client'
import Image from 'next/image'

interface ImageWithHoverProps {
  src: string
  alt: string
  quality?: number
  delay?: number
  width?: number
  height?: number
  fill?: boolean
  sizes?: string
  className?: string
}

export function ImageWithHover({
  src,
  alt,
  quality = 95,
  delay = 0,
  fill = true,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  className = '',
}: ImageWithHoverProps) {
  return (
    <div
      className={`project-image image-item w-full ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        quality={quality}
        sizes={sizes}
        loading="lazy"
        className="object-cover w-full h-full"
      />
    </div>
  )
}
