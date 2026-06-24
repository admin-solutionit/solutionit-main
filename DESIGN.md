# SolutionIT — Design System

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `navy` / `#0073D6` | Primary blue | CTAs, eyebrows, active states, links |
| `deep-blue` / `#041E42` | Dark navy | Headings, body text on light |
| `beige` / `#F2F2F2` | Off-white | Alternating section backgrounds |
| `grey-1` / `#74767C` | Mid grey | Body text, captions, labels |
| `grey-2` / `#D6D6D6` | Light grey | Borders, dividers |
| `spark-yellow` / `#FFC000` | Brand yellow | Arc gradient, accent blobs, highlights |

## Typography

- **Font:** System stack via Tailwind (Inter/system-ui)
- **Hero h1:** `text-[clamp(2rem,5vw,3rem)] leading-[1.15] tracking-tight font-medium`
- **Section h2:** `text-2xl md:text-3xl font-semibold text-deep-blue tracking-tight`
- **Sub-heading h3:** `text-lg font-semibold`
- **Body:** `text-base leading-relaxed text-grey-1`
- **Caption/label:** `text-xs font-semibold uppercase tracking-widest`

## Spacing & Layout

- Container: `container-site` custom class
- Section padding: `py-16 md:py-24`
- Hero padding: `pt-32 pb-20 md:pt-44 md:pb-28`
- Card radius: `rounded-2xl`

## Components

### Buttons
- **Primary:** `bg-navy text-white px-7 py-3.5 rounded-full font-semibold` + ArrowRight icon
- **Secondary:** `border border-navy text-navy px-7 py-3.5 rounded-full font-semibold`
- **CTA small:** `bg-[#0073D6] text-white px-5 py-2.5 rounded-full font-medium text-[13px]`

### Cards
- **Bordered:** `rounded-2xl border border-grey-2 bg-white`
- **Shadow/gradient:** `rounded-2xl` with radial gradient bg + `boxShadow: '0 4px 20px rgba(0,0,0,0.07)'`
- **Tinted:** `rounded-2xl` with `backgroundColor: 'rgba(0,115,214,0.08)'`
- **Navy highlight:** `rounded-2xl bg-navy text-white`

### Section backgrounds
Alternate between `bg-white` and `bg-beige`.

## Motion

- Library: Framer Motion
- Scroll reveals: `whileInView` with `viewport={{ once: true, margin: '-60px' }}`
- Entrance: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- Stagger delay: `i * 0.08`
- Duration: `0.5s` for content, `0.6s` for heroes
- Easing: `easeOut`
- Count-up: custom `useCountUp` hook with cubic-out easing, IntersectionObserver trigger

## Gradient System
- **Hero arc (Homepage/Technology):** Yellow arc `linear-gradient(to top, #FFC000, #FFFFFF)` ellipse blob
- **Oracle ERP Hero:** Multi-blob mesh gradient using yellow `rgba(255,192,0, 0.65-0.75)` blobs with heavy blur
- **Functional card:** `radial-gradient(ellipse at top left, rgba(253,199,35,0.18), white)`
- **Technical card:** `radial-gradient(ellipse at top left, rgba(0,115,214,0.14), white)`
