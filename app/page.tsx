import Image from 'next/image'
import Link from 'next/link'
import { ContactForm } from '@/components/ContactForm'

// Project data based on Figma design
const featuredProjects = [
  {
    slug: 'hawthorn-house',
    title: 'Hawthorn House',
    role: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'landscape' as const,
    image: '/images/hawthorn-house.jpg',
  },
  {
    slug: 'golden-light',
    title: 'Golden Light',
    role: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'portrait' as const,
    image: '/images/golden-light.jpg',
  },
  {
    slug: 'bradleys-head',
    title: 'Bradleys Head House',
    role: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'portrait' as const,
    image: '/images/bradleys-head.jpg',
  },
  {
    slug: 'mosman-residence',
    title: 'Mosman Residence',
    role: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'landscape' as const,
    image: '/images/mosman-residence.jpg',
  },
  {
    slug: 'paddington-terrace',
    title: 'Paddington Terrace',
    role: 'Interior Decoration, Furniture Selection and Art Curation',
    layout: 'portrait' as const,
    image: '/images/paddington-terrace.jpg',
  },
  {
    slug: 'bondi-beach-house',
    title: 'Bondi Beach House',
    role: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'portrait' as const,
    image: '/images/mosman-residence.jpg',
  },
]

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-[#fcf6eb]">

      {/* ═══ Hero Project (Hawthorn House) ═══ */}
      <ProjectCard project={featuredProjects[0]} priority />

      {/* ═══ Two Portrait Projects (Golden Light + Bradleys Head) ═══ */}
      <div className="flex gap-[4px]">
        <ProjectCard project={featuredProjects[2]} className="w-1/2" priority />
        <ProjectCard project={featuredProjects[1]} className="w-1/2" priority />
      </div>

      {/* ═══ Introduction + Services ═══ */}
      <div className="max-w-[1392px] mx-auto px-page">

        {/* Introduction - Right aligned */}
        <div className="pt-[120px] pb-[100px] flex justify-end">
          <p className="font-serif text-[20px] leading-[32px] text-[#1a1a1a] max-w-[600px]">
            At VICA DESIGN, space is not merely functional — it is a reflection of identity.
            We design and craft high-end custom kitchens and fully integrated millwork systems
            for discerning homeowners and builders. Every project begins with proportion and
            ends in precision. Guided by design and elevated by craftsmanship, we bring together
            form, material, light, and balance to create spaces defined by quiet sophistication.
          </p>
        </div>

        {/* Services - Two columns */}
        <div className="flex gap-[20px] max-w-[676px]">
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

      {/* ═══ Spacing before more projects ═══ */}
      <div className="h-[160px]" />

      {/* ═══ More Projects ═══ */}
      <ProjectCard project={featuredProjects[3]} />

      <div className="flex gap-[4px] mt-[4px]">
        <ProjectCard project={featuredProjects[4]} className="w-1/2" />
        <ProjectCard project={featuredProjects[5]} className="w-1/2" />
      </div>

      {/* ═══ Contact Us + Footer ═══ */}
      <footer className="bg-[#2f3532] text-white mt-[4px]">

        {/* Contact form section - More spacing */}
        <div className="pt-[177px] pb-[80px] px-page">
          <div className="max-w-[1392px] mx-auto flex flex-col items-center gap-[80px]">

            {/* Title and subtitle */}
            <div className="text-center">
              <h2 className="font-serif text-[60px] leading-[90px] mb-0">
                Contact us
              </h2>
              <p className="text-[16px] leading-[24px] text-white/80">
                Thank you for your enquiry to VICA design.
              </p>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>

        {/* Footer info bar */}
        <div className="px-page pb-[40px] flex justify-between items-start text-[13px] leading-[24.7px] text-white/80">
          <div>
            <p className="uppercase tracking-[0.325px] text-white mb-0">TORONTO</p>
            <p className="mt-[5px]">450 Matheson Blvd E, unit 59, 67-70</p>
            <p>Mississauga, ON L4Z 1P1</p>
            <p>+1 437-999-1137</p>
          </div>
          <div className="text-right">
            <p className="uppercase tracking-[0.325px] text-white mb-0">SOCIAL</p>
            <a href="https://instagram.com/vicadesign" target="_blank" rel="noopener noreferrer"
               className="block mt-[5px] hover:opacity-60 transition-opacity">Instagram</a>
            <a href="https://youtube.com/@vicadesign" target="_blank" rel="noopener noreferrer"
               className="block hover:opacity-60 transition-opacity">YouTube</a>
            <a href="https://linkedin.com/company/vicadesign" target="_blank" rel="noopener noreferrer"
               className="block hover:opacity-60 transition-opacity">LinkedIn</a>
          </div>
        </div>

      </footer>

    </div>
  )
}

// Project Card Component
function ProjectCard({
  project,
  priority = false,
  className = ""
}: {
  project: typeof featuredProjects[0]
  priority?: boolean
  className?: string
}) {
  const isLandscape = project.layout === 'landscape'
  // Landscape: 1512:738 ratio = 48.8% height
  // Portrait: 754:624.797 ratio = 82.9% height
  const aspectRatio = isLandscape ? '48.8%' : '82.9%'

  return (
    <div className={`relative ${className}`}>
      <figure className="relative w-full overflow-hidden bg-stone-200" style={{ paddingBottom: aspectRatio }}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={isLandscape ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
          quality={100}
          priority={priority}
          className="absolute inset-0 object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

        {/* Text overlay */}
        <Link
          href={`/projects/${project.slug}`}
          className="absolute bottom-0 left-0 right-0 text-center text-white pt-[56px] pb-[56px]"
        >
          <h2 className="font-serif text-[14px] leading-[16px] uppercase mb-[2px]">
            {project.title}
          </h2>
          <p className="font-serif italic text-[14px] leading-[16px] opacity-90">
            {project.role}
          </p>
        </Link>
      </figure>
    </div>
  )
}

// Service Group Component
function ServiceGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex-1">
      <div className="h-[43px] border-t border-[#1a1a1a]/20 pt-[20px]">
        <h3 className="font-serif text-[15px] leading-[22.5px] uppercase tracking-[1.5px] text-[#1a1a1a]">
          {title}
        </h3>
      </div>
      <ul className="mt-[15px] space-y-[5px] list-none">
        {items.map((item) => (
          <li key={item} className="font-serif text-[15px] leading-[22.5px] text-[#1a1a1a]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
