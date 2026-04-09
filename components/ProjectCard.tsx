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
    <Link href={`/projects/${slug}`} className="block group relative overflow-hidden cursor-pointer">
      <div>
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
            className="object-cover"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/60 flex items-end justify-start p-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms]">
            <div className="text-white">
              <h3 className="font-serif text-[20px] leading-tight mb-2">
                {title}
              </h3>
              <p className="text-[14px] uppercase tracking-[0.12em] opacity-80">
                {role}
              </p>
            </div>
          </div>
        </div>

        {/* Below-image meta (visible always, mobile-friendly) */}
        <div className="pt-[1.5rem] pb-[2rem]">
          <h3 className="font-serif text-[14px] leading-[16px] uppercase tracking-[0.08em]">{title}</h3>
          <p className="text-[14px] leading-[16px] text-secondary mt-[0.3rem] font-serif italic">{role}</p>
        </div>
      </div>
    </Link>
  )
}
