# Vica Design — Figma MCP Design System Rules

Project: Interior design studio portfolio
Stack: Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · Cormorant Garamond + DM Sans
Base rem: `html { font-size: 62.5% }` → **1rem = 10px**

## Font Pairing
- **Serif**: Cormorant Garamond (300, 400, 500, 600) — for headings, titles, project names
- **Sans**: DM Sans (300, 400, 500) — for body text, navigation, labels

---

## Figma Implementation Flow (Required — Do Not Skip)

1. Run `get_design_context` for the target node(s) first
2. Run `get_screenshot` for visual reference
3. Translate output into this project's conventions (see below)
4. Validate 1:1 visual parity against the Figma screenshot before marking complete

---

## Component Organization

- UI components → `components/` (root level)
- Pages → `app/[route]/page.tsx`
- Client components must include `'use client'` at top
- Named exports preferred: `export function Header()`

---

## Styling Rules

- **IMPORTANT**: Use Tailwind utility classes for all styling
- **IMPORTANT**: Never hardcode colors — use tokens from `tailwind.config.ts`
- Custom spacing via Tailwind arbitrary values: `px-[Xrem]`, `py-[Xrem]`
- All pixel-based values use explicit `px`: `text-[14px]`, `text-[20px]`
- All rem-based values rely on 62.5% base: `text-[1.5rem]` = 15px

### Design Tokens (from `tailwind.config.ts`)

```
colors.warm     = #BD7D31   ← Footer/Contact背景、强调色
colors.accent   = #fcf6eb   ← 页面背景、Header背景
colors.primary  = #1a1a1a   ← 主文字色
colors.secondary= #666666   ← 次要文字
colors.border   = #e3e2e2   ← 分隔线
spacing.page    = clamp(15px, 5vw, 60px)  ← 全站水平padding
```

Use Tailwind color names: `bg-warm`, `bg-accent`, `text-primary`, `text-secondary`, `border-border`

---

## Typography Rules

- **IMPORTANT**: Never hardcode font families — use `font-serif` (Playfair Display) or default sans
- `font-serif` = Playfair Display — used for: Logo, headings, project titles, Contact Us title
- All text sizes use explicit px values:

| Use | Class | Computed |
|-----|-------|---------|
| Footer info | `text-[13px]` | 13px |
| ProjectCard title/subtitle | `text-[14px] leading-[16px]` | 14px |
| Form inputs | `text-[1.5rem]` | 15px |
| Services / Header Contact Us | `text-[16px]` | 16px |
| Introduction paragraph | `text-[20px]` | 20px |
| Contact Us heading mobile | `text-[4.8rem]` | 48px |
| Contact Us heading desktop | `md:text-[6rem]` | 60px |

---

## Layout & Spacing

- Header height: `h-[7rem]` = 70px, fixed position
- Section padding: `py-[5.6rem]` = 56px (Introduction/Services)
- Contact section: `py-[10rem]` = 100px
- ProjectCard gap: `gap-[0.4rem]` = 4px
- Always add `<div className="h-[7rem]" />` spacer after fixed Header

### ProjectCard Layouts

```tsx
// Landscape: full width
'w-full'
'h-[80vw] md:h-[80vh]'

// Portrait: half width on desktop
'w-full md:w-[calc(50%-0.2rem)]'
'h-[128vw] md:h-[80vh]'
```

---

## Component Patterns

### ProjectGrid
- Renders `<ul className="flex flex-wrap gap-[0.4rem]">`
- Each card: `<figure>` (image) + `<Link>` overlay (title + role)
- Gradient overlay: `bg-gradient-to-b from-transparent via-transparent to-black/50`
- Text: `text-[14px] leading-[16px]`, white, centered, `pb-[5.6rem]`

### ServiceGroup
- Title: `text-[16px] uppercase tracking-[0.1em] border-t border-border pt-[2rem]`
- List items: `text-[16px] leading-[1.5] text-secondary`

### ContactForm (Client Component)
- Three states: `idle | loading | success`
- SUBMIT button: `bg-[#fcf6eb] text-[#1a1a1a]` → hover: `bg-[#1a1a1a] text-[#fcf6eb]`
- Success state shows "Thanks for subscribing!" + "Submit a new message" link

### Header
- Fixed, `z-50`, `bg-accent`, `border-b border-[#1a1a1a]/10`
- Logo: `font-serif text-[20px]` href="/"
- Right link: `text-[16px] uppercase tracking-[0.15em]` href="/contact"

---

## Asset Handling

- **IMPORTANT**: If Figma MCP returns a localhost image source, use it directly — do not replace with placeholders
- Static images → `public/images/`
- Real project images replace placeholder paths in `featuredProjects` array in `app/page.tsx`
- Use Next.js `<Image>` with `fill` + `sizes` props for responsive images

---

## Data Structure

```typescript
// Project data shape (app/page.tsx)
{
  slug: string           // URL: /projects/[slug]
  title: string          // Card title (14px uppercase)
  role: string           // Card subtitle (14px italic)
  layout: 'landscape' | 'portrait'
  image: string          // Desktop image path
  imageMobile: string    // Mobile image path
}
```

---

## Responsive Breakpoints

- Primary breakpoint: `md` = 768px
- Mobile-first: default styles are mobile, `md:` overrides for desktop
- Portrait cards: full width mobile → 50% desktop
- Services: single column → can expand as needed
- Footer info bar: stacked mobile → row desktop

---

## Do Not

- **IMPORTANT**: Do not install new icon packages — use inline SVG
- Do not use `useState`/`useEffect` in Server Components
- Do not hardcode hex colors — use Tailwind color tokens
- Do not use `text-base`, `text-xl` etc — use explicit px values
- Do not add `border-radius` — this project uses sharp corners throughout
- Do not modify `html { font-size: 62.5% }` in `globals.css`
