import type { GalleryItem } from '@/components/GallerySection'

export interface Project {
  slug: string
  title: string
  location: string
  year: string
  studioRole: string
  intro: string
  heroImage: string
  heroImageAlt: string
  layout: 'landscape' | 'portrait'
  /** shown on listing page */
  cardImage: string
  gallery: GalleryItem[]
  /** slugs of related projects */
  related: string[]
}

// ─── Unsplash images ─────────────────────────────────────────────────────────
// All 1200-wide crops so Next.js <Image> stays fast in dev.

const IMGS = {
  // Interiors & architecture
  living1:  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
  living2:  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
  living3:  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
  kitchen1: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=80',
  kitchen2: 'https://images.unsplash.com/photo-1556909045-b6960f7ac5c4?w=1200&q=80',
  bedroom1: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
  bedroom2: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&q=80',
  bathroom1:'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
  dining1:  'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=80',
  dining2:  'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=1200&q=80',
  exterior1:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
  exterior2:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80',
  detail1:  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
  detail2:  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  study1:   'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=1200&q=80',
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: 'hawthorn-house',
    title: 'Hawthorn House',
    location: 'Melbourne, VIC',
    year: '2024',
    studioRole: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'landscape',
    cardImage: IMGS.living1,
    heroImage: IMGS.living1,
    heroImageAlt: 'Hawthorn House living room',
    intro:
      'A mid-century terrace transformed through the layering of warm materials, custom joinery and a considered art collection. The brief was to create a home that felt lived-in from the first day — generous, unhurried, and deeply personal.',
    gallery: [
      {
        type: 'single',
        image: IMGS.dining1,
        alt: 'Dining room',
        caption: 'The dining room anchors the ground floor with a bespoke oval table in oiled oak.',
        parallax: true,
      },
      {
        type: 'double',
        images: [
          { src: IMGS.kitchen1, alt: 'Kitchen detail' },
          { src: IMGS.detail1, alt: 'Joinery detail' },
        ],
      },
      {
        type: 'doubleWithText',
        image: { src: IMGS.bedroom1, alt: 'Master bedroom' },
        text: 'Every room carries a quiet conversation between old and new — antique finds set against freshly plastered walls, rough linen against polished stone.',
        imagePosition: 'left',
      },
      {
        type: 'single',
        image: IMGS.bathroom1,
        alt: 'Ensuite bathroom',
        parallax: false,
      },
      {
        type: 'carousel',
        images: [
          { src: IMGS.detail2, alt: 'Detail 1' },
          { src: IMGS.study1, alt: 'Study nook' },
          { src: IMGS.living2, alt: 'Living corner' },
          { src: IMGS.dining2, alt: 'Dining nook' },
        ],
      },
    ] satisfies GalleryItem[],
    related: ['golden-light', 'bradleys-head-house'],
  },

  {
    slug: 'golden-light',
    title: 'Golden Light',
    location: 'Sydney, NSW',
    year: '2023',
    studioRole: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'portrait',
    cardImage: IMGS.living2,
    heroImage: IMGS.living2,
    heroImageAlt: 'Golden Light apartment',
    intro:
      'A north-facing harbour apartment filled with the amber light that inspired its name. The palette — aged brass, sandy limestone and sun-washed linen — amplifies the natural warmth that floods the space from dawn to dusk.',
    gallery: [
      {
        type: 'single',
        image: IMGS.living3,
        alt: 'Open-plan living',
        parallax: true,
      },
      {
        type: 'doubleWithText',
        image: { src: IMGS.kitchen2, alt: 'Kitchen' },
        text: 'Aged brass tapware and hand-thrown ceramics reinforce the sensory warmth throughout.',
        imagePosition: 'right',
      },
      {
        type: 'double',
        images: [
          { src: IMGS.bedroom2, alt: 'Bedroom' },
          { src: IMGS.detail2, alt: 'Bedside detail' },
        ],
      },
      {
        type: 'single',
        image: IMGS.dining2,
        alt: 'Dining',
      },
    ] satisfies GalleryItem[],
    related: ['hawthorn-house', 'speargrass-house'],
  },

  {
    slug: 'bradleys-head-house',
    title: 'Bradleys Head House',
    location: 'Mosman, NSW',
    year: '2023',
    studioRole: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'portrait',
    cardImage: IMGS.exterior1,
    heroImage: IMGS.exterior1,
    heroImageAlt: 'Bradleys Head House exterior',
    intro:
      'Set on a north-facing escarpment with views to the harbour, this house called for an interior that dissolved the boundary between inside and out. Local sandstone, raw timber and hand-woven textiles echo the harbour landscape.',
    gallery: [
      {
        type: 'single',
        image: IMGS.living1,
        alt: 'Main living area',
        parallax: true,
      },
      {
        type: 'double',
        images: [
          { src: IMGS.detail1, alt: 'Stone detail' },
          { src: IMGS.dining1, alt: 'Dining' },
        ],
      },
      {
        type: 'doubleWithText',
        image: { src: IMGS.bedroom1, alt: 'Master suite' },
        text: 'Materials were chosen for the way they age — the stone darkens with moisture, the timber softens with sun, the linen grows only more beautiful with use.',
        imagePosition: 'left',
      },
      {
        type: 'carousel',
        images: [
          { src: IMGS.bathroom1, alt: 'Bathroom' },
          { src: IMGS.kitchen1, alt: 'Kitchen' },
          { src: IMGS.study1, alt: 'Study' },
          { src: IMGS.exterior2, alt: 'Garden' },
        ],
      },
    ] satisfies GalleryItem[],
    related: ['golden-light', 'speargrass-house'],
  },

  {
    slug: 'speargrass-house',
    title: 'Speargrass House',
    location: 'Byron Bay, NSW',
    year: '2022',
    studioRole: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'landscape',
    cardImage: IMGS.exterior2,
    heroImage: IMGS.exterior2,
    heroImageAlt: 'Speargrass House exterior',
    intro:
      'A hinterland retreat designed around the idea of productive idleness — a home that makes it easy to do nothing. Rammed earth walls, wide verandahs, and furniture scaled for long afternoons define the spirit of the project.',
    gallery: [
      {
        type: 'single',
        image: IMGS.living2,
        alt: 'Living room',
        parallax: true,
      },
      {
        type: 'doubleWithText',
        image: { src: IMGS.dining2, alt: 'Dining' },
        text: 'Scale and proportion were the primary tools — oversized sofas, low tables, and ceilings that breathe.',
        imagePosition: 'right',
      },
      {
        type: 'double',
        images: [
          { src: IMGS.bedroom2, alt: 'Guest bedroom' },
          { src: IMGS.bathroom1, alt: 'Outdoor shower' },
        ],
      },
    ] satisfies GalleryItem[],
    related: ['hawthorn-house', 'bradleys-head-house'],
  },

  {
    slug: 'garden-house',
    title: 'Garden House',
    location: 'Toorak, VIC',
    year: '2022',
    studioRole: 'Full Interior Design, Custom Fabrication, Furnishing and Art',
    layout: 'portrait',
    cardImage: IMGS.living3,
    heroImage: IMGS.living3,
    heroImageAlt: 'Garden House living',
    intro:
      'A family home in the garden suburbs of Melbourne, where every room opens generously to the landscape beyond. The interior palette — sage, clay and bleached oak — was drawn directly from the garden itself.',
    gallery: [
      {
        type: 'single',
        image: IMGS.kitchen2,
        alt: 'Kitchen',
        parallax: true,
      },
      {
        type: 'double',
        images: [
          { src: IMGS.detail1, alt: 'Detail' },
          { src: IMGS.detail2, alt: 'Fabric detail' },
        ],
      },
      {
        type: 'doubleWithText',
        image: { src: IMGS.dining1, alt: 'Dining room' },
        text: 'The garden was treated as another room — furniture, lighting and planting all considered together.',
        imagePosition: 'left',
      },
      {
        type: 'single',
        image: IMGS.bedroom1,
        alt: 'Master bedroom',
      },
    ] satisfies GalleryItem[],
    related: ['speargrass-house', 'hawthorn-house'],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getRelatedProjects(slugs: string[]): Project[] {
  return slugs
    .map((s) => projects.find((p) => p.slug === s))
    .filter(Boolean) as Project[]
}
