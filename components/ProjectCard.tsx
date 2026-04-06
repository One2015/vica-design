'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  role: string
  slug: string
  image: string
  layout: 'landscape' | 'portrait'
  priority?: boolean
}

export function ProjectCard({ title, role, slug, image, layout, priority = false }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block group relative overflow-hidden">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.6, 0.01, 0.05, 0.95] }}
      >
        {/* Image container */}
        <div
          className={[
            'relative overflow-hidden bg-stone-200',
            layout === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]',
          ].join(' ')}
        >
          <Image
            src={image}
            alt={title}
            fill
            priority={priority}
            sizes={layout === 'landscape' ? '100vw' : '(max-width: 768px) 100vw, 50vw'}
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.6,0.01,0.05,0.95)] group-hover:scale-105"
          />

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-black/60 flex items-end justify-start p-[3rem]"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            <div className="text-white">
              <h3 className="font-serif text-[clamp(1.8rem,3vw,3.2rem)] leading-tight mb-2">
                {title}
              </h3>
              <p className="text-[1.3rem] uppercase tracking-[0.12em] opacity-80">
                {role}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Below-image meta (visible always, mobile-friendly) */}
        <div className="pt-[1.5rem] pb-[2rem]">
          <h3 className="font-serif text-[1.3rem] uppercase tracking-[0.08em]">{title}</h3>
          <p className="text-[1.3rem] text-secondary mt-[0.3rem] font-serif italic">{role}</p>
        </div>
      </motion.div>
    </Link>
  )
}
