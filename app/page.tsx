import Link from 'next/link'
import { ContactForm } from '@/components/ContactForm'

// Placeholder project data — replace with real data/CMS later
const featuredProjects = [
  {
    slug: 'hawthorn-house',
    title: 'Hawthorn House',
    role: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'landscape' as const,
    image: '/images/placeholder-landscape.jpg',
    imageMobile: '/images/placeholder-portrait.jpg',
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
      <div className="px-page py-[5.6rem]">
        <p className="text-[20px] leading-[1.6] max-w-[60rem] ml-auto md:indent-[12rem]">
          Our approach to designing interiors is to listen and understand what
          matters to you and learn how daily life unfolds within your world. We
          enjoy the process of helping you articulate your own taste and vision
          and through our breadth of industry knowledge breathe new life into
          your space.
        </p>
      </div>

      {/* ═══ Services 服务列表 - 15px ═══ */}
      <div className="px-page pb-[5.6rem]">
        <div className="space-y-[2rem]">
          <ServiceGroup
            title="Interior Design"
            items={[
              'New Build — working with clients & architects to create beautiful spaces',
              'Renovation — working with clients or architects to redesign interior spaces',
              'Selection of materials & finishes, such as flooring, tiles, paint etc',
              'Custom design kitchens & bathrooms including structural & cosmetic changes',
              'Custom design of wardrobes & built-in joinery such as cabinets',
            ]}
          />
          <ServiceGroup
            title="Interior Decoration"
            items={[
              'Selection of furniture, lighting, rugs & accessories',
              'Design of window treatments appropriate to interior & environmental factors',
              'Design & management of bespoke upholstery and cushions',
              'Curation, expansion & exhibition of artworks',
              'Refreshing & rethinking heritage interiors',
            ]}
          />
        </div>
      </div>

      {/* ═══ 后 3 个项目 ═══ */}
      <ProjectGrid projects={featuredProjects.slice(3, 6)} />

      {/* ═══ Contact Us + Footer ═══ */}
      <footer className="bg-[#BD7D31] text-white">

        {/* Contact 表单区 */}
        <div className="py-[10rem] px-page text-center">
          <h2 className="font-serif text-[4.8rem] md:text-[6rem] mb-[2rem]">
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
            <p className="uppercase tracking-wide text-white mb-[0.5rem]">TORONTO</p>
            <p>450 Matheson Blvd E, unit 59, 67-70</p>
            <p>Mississauga, ON L4Z 1P1</p>
            <p>+1 437-999-1137</p>
          </div>
          <div className="mt-[3rem] md:mt-0 text-left md:text-right">
            <p className="uppercase tracking-wide text-white mb-[0.5rem]">SOCIAL</p>
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
          <figure
            className={[
              'relative overflow-hidden bg-stone-200',
              project.layout === 'landscape' ? 'h-[80vw] md:h-[80vh]' : 'h-[128vw] md:h-[80vh]',
            ].join(' ')}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
          </figure>
          <Link
            href={`/projects/${project.slug}`}
            className="absolute bottom-0 left-0 right-0 text-center text-white pb-[5.6rem] pt-[5.6rem]"
          >
            <h2 className="text-[14px] leading-[16px] uppercase tracking-normal font-serif m-0 p-0 relative z-10">
              {project.title}
            </h2>
            <p className="text-[14px] leading-[16px] italic font-serif m-0 mt-[2px] p-0 relative z-10 opacity-90">
              {project.role}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function ServiceGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[16px] uppercase tracking-[0.1em] border-t border-border pt-[2rem]">
        {title}
      </h3>
      <ul className="mt-[1.5rem] space-y-[0.5rem]">
        {items.map((item) => (
          <li key={item} className="text-[16px] leading-[1.5] text-secondary">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
