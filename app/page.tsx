import Image from 'next/image'
import Link from 'next/link'
import { ContactForm } from '@/components/ContactForm'

// Placeholder project data — replace with real data/CMS later
const featuredProjects = [
  {
    slug: 'hawthorn-house',
    title: 'Hawthorn House',
    role: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'landscape' as const,
    image: '/images/hero.png',
    imageMobile: '/images/hero.png',
  },
  {
    slug: 'golden-light',
    title: 'Golden Light',
    role: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'portrait' as const,
    image: '/images/placeholder-portrait.jpg',
    imageMobile: '/images/placeholder-portrait.jpg',
  },
  {
    slug: 'bradleys-head',
    title: 'Bradleys Head House',
    role: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'portrait' as const,
    image: '/images/placeholder-portrait.jpg',
    imageMobile: '/images/placeholder-portrait.jpg',
  },
  {
    slug: 'mosman-residence',
    title: 'Mosman Residence',
    role: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'landscape' as const,
    image: '/images/placeholder-landscape.jpg',
    imageMobile: '/images/placeholder-portrait.jpg',
  },
  {
    slug: 'paddington-terrace',
    title: 'Paddington Terrace',
    role: 'Interior Decoration, Furniture Selection and Art Curation',
    layout: 'portrait' as const,
    image: '/images/placeholder-portrait.jpg',
    imageMobile: '/images/placeholder-portrait.jpg',
  },
  {
    slug: 'bondi-beach-house',
    title: 'Bondi Beach House',
    role: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'portrait' as const,
    image: '/images/placeholder-portrait.jpg',
    imageMobile: '/images/placeholder-portrait.jpg',
  },
]

export default function HomePage() {
  return (
    <div className="overflow-hidden">

      {/* ═══ 前 3 个项目 ═══ */}
      <ProjectGrid projects={featuredProjects.slice(0, 3)} />

      {/* ═══ Introduction 文字 - 20px ═══ */}
      <div className="px-page py-[12rem]">
        <p className="font-serif text-[20px] leading-[32px] max-w-[60rem] ml-auto text-right">
          At VICA DESIGN, space is not merely functional — it is a reflection of identity.
          We design and craft high-end custom kitchens and fully integrated millwork systems
          for discerning homeowners and builders. Every project begins with proportion and
          ends in precision. Guided by design and elevated by craftsmanship, we bring together
          form, material, light, and balance to create spaces defined by quiet sophistication.
        </p>
      </div>

      {/* ═══ Services 服务列表 ═══ */}
      <div className="px-page pb-[16rem]">
        <div className="flex flex-col md:flex-row gap-[2rem]">
          <div className="md:w-1/2 flex gap-[2rem]">
            <ServiceGroup
              title="Custom Millwork"
              items={[
                'High-end custom kitchens',
                'Architectural millwork systems',
                'Wine rooms & storage',
                'Wardrobes & closet systems',
                'Fireplace features',
              ]}
            />
            <ServiceGroup
              title="Design & Craft"
              items={[
                'Spatial planning & design',
                'Material selection',
                'Hardware refinement',
                '100% Canadian-made',
                'Full project management',
              ]}
            />
          </div>
        </div>
      </div>

      {/* ═══ 后 3 个项目 ═══ */}
      <ProjectGrid projects={featuredProjects.slice(3, 6)} />

      {/* ═══ Contact Us + Footer ═══ */}
      <footer className="bg-[#2f3532] text-white">

        {/* Contact 表单区 */}
        <div className="py-[10rem] px-page text-center">
          <h2 className="font-serif text-[6rem] mb-[2rem]">
            Contact us
          </h2>
          <p className="text-[1.6rem] text-white/80 mb-[5rem]">
            Thank you for your enquiry to VICA design.
          </p>
          <ContactForm />
        </div>

        {/* Footer 信息栏 */}
        <div className="px-page pb-[4rem] flex flex-col md:flex-row justify-between items-start text-[1.3rem] leading-[1.9] text-white/80">
          <div>
            <p className="uppercase tracking-[0.325px] text-white mb-[0.5rem]">TORONTO</p>
            <p>450 Matheson Blvd E, unit 59, 67-70</p>
            <p>Mississauga, ON L4Z 1P1</p>
            <p>+1 437-999-1137</p>
          </div>
          <div className="mt-[3rem] md:mt-0 text-left md:text-right">
            <p className="uppercase tracking-[0.325px] text-white mb-[0.5rem]">SOCIAL</p>
            <a href="https://instagram.com/vicadesign" target="_blank" rel="noopener noreferrer" className="block hover:opacity-60 transition-opacity">Instagram</a>
            <a href="https://youtube.com/@vicadesign" target="_blank" rel="noopener noreferrer" className="block hover:opacity-60 transition-opacity">YouTube</a>
            <a href="https://linkedin.com/company/vicadesign" target="_blank" rel="noopener noreferrer" className="block hover:opacity-60 transition-opacity">LinkedIn</a>
          </div>
        </div>

      </footer>

    </div>
  )
}

function ProjectGrid({ projects }: { projects: typeof featuredProjects }) {
  return (
    <ul className="flex flex-wrap gap-[0.4rem]">
      {projects.map((project) => (
        <li
          key={project.slug}
          className={[
            'relative',
            project.layout === 'landscape'
              ? 'w-full'
              : 'w-full md:w-[calc(50%-0.2rem)]',
          ].join(' ')}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="block relative group"
          >
            <figure
              className={[
                'relative overflow-hidden bg-stone-200',
                project.layout === 'landscape' ? 'h-[80vw] md:h-[80vh]' : 'h-[128vw] md:h-[80vh]',
              ].join(' ')}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 100vw"
                quality={95}
                unoptimized
                className="object-cover"
                priority={true}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
              {/* Hover overlay - 10% black */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </figure>
            <div className="absolute bottom-0 left-0 right-0 text-center text-white pb-[5.6rem] pt-[5.6rem]">
              <h2 className="text-[14px] leading-[16px] uppercase tracking-normal font-serif m-0 p-0 relative z-10">
                {project.title}
              </h2>
              <p className="text-[14px] leading-[16px] italic font-serif m-0 mt-[2px] p-0 relative z-10 opacity-90">
                {project.role}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function ServiceGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex-1">
      <h3 className="font-serif text-[15px] uppercase tracking-[1.5px] border-t border-[#1a1a1a]/20 pt-[2rem] mb-[1.5rem]">
        {title}
      </h3>
      <ul className="space-y-[0.5rem] list-none">
        {items.map((item) => (
          <li key={item} className="font-serif text-[15px] leading-[22.5px] text-[#1a1a1a]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
