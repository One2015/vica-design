import Image from 'next/image'
import { ImageParallax } from './ImageParallax'
import { FadeInSection } from './FadeInSection'
import { ImageWithHover } from './ImageWithHover'

// ─── Types ────────────────────────────────────────────────────────────────────

export type GalleryItem =
  | {
      type: 'single'
      image: string
      alt?: string
      caption?: string
      /** Use parallax scroll on this image */
      parallax?: boolean
      /** Image quality (1-100), defaults to 95 */
      quality?: number
    }
  | {
      type: 'double'
      images: [{ src: string; alt?: string }, { src: string; alt?: string }]
      /** Image quality (1-100), defaults to 95 */
      quality?: number
    }
  | {
      type: 'doubleWithText'
      image: { src: string; alt?: string }
      text: string
      /** Which side the image sits on */
      imagePosition: 'left' | 'right'
      /** Image quality (1-100), defaults to 95 */
      quality?: number
    }
  | {
      type: 'carousel'
      images: Array<{ src: string; alt?: string }>
      /** Image quality (1-100), defaults to 95 */
      quality?: number
    }

interface GallerySectionProps {
  items: GalleryItem[]
}

// ─── Component ────────────────────────────────────────────────────────────────

export function GallerySection({ items }: GallerySectionProps) {
  return (
    <div className="space-y-[5.6rem] lg:space-y-[8rem]">
      {items.map((item, index) => {
        const delay = index * 0.1
        switch (item.type) {
          case 'single':
            return (
              <FadeInSection key={index} delay={delay}>
                <SingleRow item={item} />
              </FadeInSection>
            )
          case 'double':
            return (
              <FadeInSection key={index} delay={delay}>
                <DoubleRow item={item} />
              </FadeInSection>
            )
          case 'doubleWithText':
            return (
              <FadeInSection key={index} delay={delay}>
                <DoubleWithTextRow item={item} />
              </FadeInSection>
            )
          case 'carousel':
            return (
              <FadeInSection key={index} delay={delay}>
                <CarouselRow item={item} />
              </FadeInSection>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

// ─── Single ───────────────────────────────────────────────────────────────────

function SingleRow({ item }: { item: Extract<GalleryItem, { type: 'single' }> }) {
  const imageQuality = item.quality ?? 95
  return (
    <figure>
      {item.parallax ? (
        <ImageParallax src={item.image} alt={item.alt ?? ''} aspectClass="aspect-video" quality={imageQuality} />
      ) : (
        <div className="relative aspect-video overflow-hidden bg-stone-200 project-image">
          <Image
            src={item.image}
            alt={item.alt ?? ''}
            fill
            sizes="100vw"
            quality={imageQuality}
            className="object-cover"
          />
        </div>
      )}
      {item.caption && (
        <figcaption className="mt-[2rem] text-secondary text-[1.5rem] leading-[1.6] max-w-[52rem]">
          {item.caption}
        </figcaption>
      )}
    </figure>
  )
}

// ─── Double ───────────────────────────────────────────────────────────────────

function DoubleRow({ item }: { item: Extract<GalleryItem, { type: 'double' }> }) {
  const imageQuality = item.quality ?? 95
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] lg:gap-[3.5rem] image-grid">
      {item.images.map((img, i) => (
        <ImageWithHover
          key={i}
          src={img.src}
          alt={img.alt ?? ''}
          quality={imageQuality}
          delay={i * 0.1}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="relative aspect-[3/4]"
        />
      ))}
    </div>
  )
}

// ─── Double with text ─────────────────────────────────────────────────────────

function DoubleWithTextRow({
  item,
}: {
  item: Extract<GalleryItem, { type: 'doubleWithText' }>
}) {
  const imageFirst = item.imagePosition === 'left'
  const imageQuality = item.quality ?? 95

  return (
    <div
      className={[
        'grid grid-cols-1 lg:grid-cols-2 gap-[2rem] lg:gap-[3.5rem] items-center',
        !imageFirst ? 'lg:[&>*:first-child]:order-2' : '',
      ].join(' ')}
    >
      {/* Image */}
      <ImageWithHover
        src={item.image.src}
        alt={item.image.alt ?? ''}
        quality={imageQuality}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="relative aspect-[3/4]"
      />

      {/* Text */}
      <div className={imageFirst ? 'lg:pl-[3rem]' : 'lg:pr-[3rem]'}>
        <blockquote
          className="font-serif text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.5] lg:indent-[12rem] design-narrative"
        >
          {item.text}
        </blockquote>
      </div>
    </div>
  )
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

function CarouselRow({ item }: { item: Extract<GalleryItem, { type: 'carousel' }> }) {
  const imageQuality = item.quality ?? 95
  return (
    <div className="relative">
      {/* Horizontal scroll container */}
      <div className="flex gap-[2rem] overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        {item.images.map((img, i) => (
          <ImageWithHover
            key={i}
            src={img.src}
            alt={img.alt ?? ''}
            quality={imageQuality}
            delay={i * 0.1}
            sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 33vw"
            className="flex-none w-[80vw] md:w-[50vw] lg:w-[33vw] snap-start relative aspect-[3/4]"
          />
        ))}
      </div>

      {/* Scroll hint gradient */}
      <div className="absolute top-0 right-0 bottom-4 w-16 bg-gradient-to-l from-accent to-transparent pointer-events-none" />
    </div>
  )
}
