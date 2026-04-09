import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Profile',
  description: 'About our interior design studio.',
}

const team = [
  {
    name: 'Sarah Arent',
    title: 'Director & Principal Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80',
    bio: 'Sarah brings over two decades of experience in residential interior design. Her approach centres on the relationship between people and their environment — the textures, light, and objects that make a house feel like a home.',
  },
  {
    name: 'Genevieve Pyke',
    title: 'Director & Creative Lead',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    bio: 'Genevieve trained in fine art before turning to interiors, and that background is evident in her instinct for art curation and custom fabrication. She has a particular interest in the way craft and industry intersect in contemporary residential design.',
  },
  {
    name: 'Marcus Webb',
    title: 'Senior Designer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
    bio: 'Marcus leads the studio\'s technical documentation and oversees construction administration. His background in architecture gives the team a rigorous understanding of building fabric and structural possibility.',
  },
]

const awards = [
  { year: '2024', award: 'IDEA Gold — Residential Single Dwelling' },
  { year: '2024', award: 'Houses Awards Finalist — Interiors' },
  { year: '2023', award: 'IDEA Silver — Kitchen Design' },
  { year: '2023', award: 'Belle Coco Republic Interior Design Awards — Residential' },
  { year: '2022', award: 'IDEA Gold — Residential Decoration' },
  { year: '2022', award: 'Houses Awards Shortlist — Renovation & Addition' },
]

export default function AboutPage() {
  return (
    <div className="overflow-hidden">

      {/* ── Intro ── */}
      <section className="px-page pt-[4rem] pb-[8rem]">
        <div className="max-w-content mx-auto">

          <h1 className="font-serif text-[1.5rem] uppercase tracking-[0.15em] mb-[10rem]">
            Profile
          </h1>

          <div className="lg:grid lg:grid-cols-2 lg:gap-[6rem] lg:items-end">

            {/* Portrait image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-200 mb-[4rem] lg:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
                alt="Studio interior"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="self-end pb-[2rem]">
              <p className="font-serif text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.5] lg:indent-[12rem] mb-[4rem]">
                We are an interior design and decoration studio working on residential and
                hospitality projects across Australia. Founded by Sarah Arent and Genevieve
                Pyke, the studio is known for its warm, considered approach — interiors that
                feel personal, layered, and made to last.
              </p>
              <p className="font-serif text-[clamp(1.25rem,2vw,2rem)] leading-[1.6] text-secondary">
                Every project begins with listening — to the client, the site, and the brief
                between the lines. From that foundation we build a design language that is
                entirely their own.
              </p>

              <Link href="/contact" className="btn-cta mt-[4rem] block w-fit">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Approach ── */}
      <section className="px-page py-[8rem] bg-stone-50">
        <div className="max-w-content mx-auto lg:grid lg:grid-cols-2 lg:gap-[6rem]">
          <div>
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] mb-[4rem]">
              Our Approach
            </h2>
            <div className="space-y-[2rem] font-serif text-[clamp(1.25rem,1.8vw,1.8rem)] leading-[1.6] text-secondary">
              <p>
                We believe that great interior design is born from restraint and intention —
                never from trend. Our process is deliberate: we take time to understand how
                you live, what you love, and what your home might become.
              </p>
              <p>
                We work alongside architects, builders, and specialist craftspeople to
                ensure that every detail — from the sweep of a handrail to the weight of
                a door handle — is considered in context.
              </p>
              <p>
                Our projects range from full-scope new builds and major renovations to
                focused decoration commissions. In each case, the measure of success is
                simple: does it feel like you?
              </p>
            </div>
          </div>

          <div className="mt-[6rem] lg:mt-0">
            <h2 className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] mb-[4rem]">
              Services
            </h2>
            <div className="space-y-[3rem]">
              {[
                {
                  title: 'Interior Design',
                  items: [
                    'New build & major renovation',
                    'Space planning & architectural detailing',
                    'Material, finish & fixture selection',
                    'Custom kitchen & bathroom design',
                    'Bespoke joinery & built-in design',
                  ],
                },
                {
                  title: 'Interior Decoration',
                  items: [
                    'Furniture selection & procurement',
                    'Lighting design & specification',
                    'Window treatments & soft furnishings',
                    'Art curation & acquisition',
                    'Styling & installation',
                  ],
                },
              ].map((group) => (
                <div key={group.title}>
                  <h3 className="text-[1.4rem] uppercase tracking-[0.12em] border-t border-border pt-[1.5rem] mb-[1.5rem]">
                    {group.title}
                  </h3>
                  <ul className="space-y-[0.5rem]">
                    {group.items.map((item) => (
                      <li key={item} className="text-[1.4rem] text-secondary leading-[1.5]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="px-page py-[8rem]">
        <div className="max-w-content mx-auto">
          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] mb-[5rem]">
            The Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
            {team.map((member) => (
              <div key={member.name} className="group relative overflow-hidden bg-stone-100">

                {/* Photo */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-opacity duration-300"
                  />
                  {/* Hover bio overlay */}
                  <div className="absolute inset-0 bg-stone-100 p-[3rem] flex flex-col justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[1.4rem] text-secondary leading-[1.6]">{member.bio}</p>
                  </div>
                </div>

                {/* Name */}
                <div className="p-[2rem]">
                  <p className="text-[1.4rem] uppercase tracking-[0.1em]">{member.name}</p>
                  <p className="font-serif italic text-[1.4rem] text-secondary mt-[0.3rem]">
                    {member.title}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards ── */}
      <section className="px-page py-[8rem] bg-stone-50">
        <div className="max-w-content mx-auto lg:grid lg:grid-cols-2 lg:gap-[6rem]">

          <h2 className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] mb-[6rem] lg:mb-0 self-start">
            Recognition
          </h2>

          <ul className="space-y-[1.5rem]">
            {awards.map((a) => (
              <li
                key={a.award}
                className="flex gap-[3rem] text-[1.4rem] pb-[1.5rem] border-b border-border"
              >
                <span className="text-secondary shrink-0 w-[4rem]">{a.year}</span>
                <span>{a.award}</span>
              </li>
            ))}
          </ul>

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-page py-[12rem] text-center">
        <p className="font-serif text-[clamp(1.5rem,3vw,2.4rem)] max-w-[50rem] mx-auto mb-[4rem]">
          If you have a project in mind, we&apos;d love to hear from you.
        </p>
        <Link href="/contact" className="btn-cta">
          Get in touch
        </Link>
      </section>

    </div>
  )
}
