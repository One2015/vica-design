import type { Metadata } from 'next'
import { projects } from '@/lib/sample-data'
import { ProjectCard } from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected interior design and decoration projects.',
}

export default function ProjectsPage() {
  return (
    <div className="px-page pt-[4rem] pb-[12rem]">
      <div className="max-w-wide mx-auto">

        {/* Page title */}
        <h1 className="font-serif text-[16px] uppercase tracking-[0.15em] mb-[10rem]">
          Projects
        </h1>

        {/* Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[3rem] gap-y-[8rem]">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <ProjectCard
                slug={project.slug}
                title={project.title}
                role={project.studioRole}
                image={project.cardImage}
                layout={project.layout}
                priority={i < 3}
              />
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}
