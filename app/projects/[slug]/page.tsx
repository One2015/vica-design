import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects, getProjectBySlug, getRelatedProjects } from '@/lib/sample-data'
import { GallerySection } from '@/components/GallerySection'
import { ProjectCard } from '@/components/ProjectCard'
import { ParallaxHero } from '@/components/ParallaxHero'
import { FadeInSection } from '@/components/FadeInSection'

// ─── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.intro,
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const related = getRelatedProjects(project.related)

  return (
    <article>

      {/* ── Hero image ── */}
      <div className="-mt-[7rem]">
        <ParallaxHero
          src={project.heroImage}
          alt={project.heroImageAlt}
          quality={100}
        />
      </div>

      {/* ── Body ── */}
      <div className="px-page max-w-content mx-auto hero-section">

        {/* Title + Intro (desktop: side by side) */}
        <div className="pt-[3.8rem] lg:pt-[6.5rem] lg:grid lg:grid-cols-2 lg:gap-[3rem] lg:items-start">

          {/* Title */}
          <h1 className="project-title font-serif text-[clamp(2.5rem,5vw,5.8rem)] leading-[1.05] mb-[4rem] lg:mb-0">
            {project.title}
          </h1>

          {/* Intro text */}
          <p className="font-serif text-[clamp(1.25rem,2vw,2.4rem)] leading-[1.5] lg:indent-[12rem]">
            {project.intro}
          </p>
        </div>

        {/* Specifications */}
        <FadeInSection delay={0.3}>
          <div className="mt-[3rem] lg:mt-[4rem] pb-[4rem] border-b border-border">
            <dl className="flex flex-wrap gap-x-[6rem] gap-y-[2rem]">
              <Spec label="Location" value={project.location} />
              <Spec label="Year" value={project.year} />
              <Spec label="Studio Role" value={project.studioRole} />
            </dl>
          </div>
        </FadeInSection>

        {/* Gallery */}
        <div className="py-[8rem]">
          <GallerySection items={project.gallery} />
        </div>

      </div>

      {/* ── Related projects ── */}
      {related.length > 0 && (
        <section className="px-page pb-[12rem]">
          <div className="max-w-content mx-auto">
            <h2 className="font-serif text-[1.5rem] uppercase tracking-[0.15em] mb-[6rem]">
              More Projects
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-[3rem] gap-y-[6rem]">
              {related.map((rel) => (
                <li key={rel.slug}>
                  <ProjectCard
                    slug={rel.slug}
                    title={rel.title}
                    role={rel.studioRole}
                    image={rel.cardImage}
                    layout={rel.layout}
                  />
                </li>
              ))}
            </ul>

            {/* Prev / Next navigation */}
            <RelatedNav currentSlug={project.slug} />
          </div>
        </section>
      )}

    </article>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[1.3rem] uppercase tracking-[0.1em] mb-[0.3rem] text-secondary">
        {label}
      </dt>
      <dd className="text-[1.5rem]">{value}</dd>
    </div>
  )
}

function RelatedNav({ currentSlug }: { currentSlug: string }) {
  const idx = projects.findIndex((p) => p.slug === currentSlug)
  const prev = projects[idx - 1]
  const next = projects[idx + 1]

  if (!prev && !next) return null

  return (
    <nav className="mt-[9rem] flex justify-between items-start border-t border-border pt-[4rem]">
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="nav-link text-left max-w-[45%]"
        >
          <span className="block text-[1.3rem] uppercase tracking-[0.1em] text-secondary mb-2">
            Previous
          </span>
          <span className="block font-serif text-[clamp(1.5rem,3vw,3rem)] leading-tight">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}

      {next && (
        <Link
          href={`/projects/${next.slug}`}
          className="nav-link text-right max-w-[45%]"
        >
          <span className="block text-[1.3rem] uppercase tracking-[0.1em] text-secondary mb-2">
            Next
          </span>
          <span className="block font-serif text-[clamp(1.5rem,3vw,3rem)] leading-tight">
            {next.title}
          </span>
        </Link>
      )}
    </nav>
  )
}
