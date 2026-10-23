# Design Spec — kloudera.ai style reference (for the Cloud9 rebuild)

Reference studied: https://www.kloudera.ai/ (Vite + React SPA, TanStack Router, Tailwind v4, motion, OGL/WebGL2), inspected 2026-10-23.
We recreate the **design language and interaction patterns** with our own code and Cloud9's own content — no copying of KloudEra text, logos, images or source.

---

## 1. Visual identity

| Aspect | Value |
|---|---|
| Mood | Dark, monochrome, "glass command-center" — premium enterprise / cyber |
| Theme | Dark only. Near-black background, white foreground, greys for hierarchy |
| Accent colour | Essentially none: primary = white. Colour appears only in tiny status dots (emerald) and a soft blue glow on the floating CTA |
| Material | Glassmorphism everywhere: translucent white fill + 24–40px backdrop blur + 1px light border + gradient rim highlight |
| Shape | Very round: radius 20px base; cards 24px (`rounded-3xl`), big panels 32px (`rounded-[2rem]`), buttons/nav/pills fully round |

### Colour tokens (oklch)
```
--background        oklch(10% 0 0)         /* #0d0d0d-ish */
--card / popover    oklch(14% 0 0)
--muted / secondary oklch(20% 0 0)
--foreground        oklch(98% 0 0)
--muted-foreground  oklch(65% 0 0)
--primary           oklch(98% 0 0)  (fg on primary: oklch(10% 0 0))
--border            oklch(100% 0 0 / .12)
--glass-bg          oklch(100% 0 0 / .06)
--glass-bg-strong   oklch(100% 0 0 / .10)
--glass-border      oklch(100% 0 0 / .16)
--glass-highlight   oklch(100% 0 0 / .45)
--shadow-glass      0 24px 60px -24px oklch(0% 0 0 / .65)
--shadow-glow       0 0 60px -12px <primary 55%>
--gradient-text     linear-gradient(100deg, white, primary-ish, accent-ish)  → silver sheen on headings
status dot          emerald-500  oklch(69.6% .17 162.48)
```

### Typography
- **Sora** (300–700): everything. Headings semibold (600), tight tracking (-0.025em), `text-balance`.
- **JetBrains Mono** (400–500): eyebrows/labels, numbering (`// 01`), tags. Uppercase, very wide tracking (0.24–0.32em), 10–12px, 90% opacity.
- Scale: hero H1 48px → 72px (sm+), line-height 1.02. Page H1 36 → 60px. Section H2 30 → 36px. Card H3 18px. Body 16–18px muted.
- Brand wordmark: uppercase, 0.18em tracking, second half of name in a different tone.

### Layout
- Container max-width 80rem (1280px), side padding 20px / 32px.
- Sections `py-20` (80px). Hero `pt-36/48` to clear the floating nav.
- Section header pattern: mono eyebrow → H2 → optional muted paragraph, with an optional glass pill "Explore More →" aligned right (`flex justify-between items-end`).
- Grids: 1 → 2 (md) → 4 (xl) for feature cards; 2-column split panels `1.1fr / 1fr` on lg.

---

## 2. Components

1. **Floating pill navbar** — fixed, inset 12–20px from top, `glass-strong`, rounded-full. Left: round logo (rotates 12° on hover) + uppercase wordmark. Right: solid white "Book a Consultation" pill (glow on hover) + round hamburger button. Menu opens as a **glass-strong dropdown panel** under the nav with a 2-column grid of links, active link highlighted `bg-white/10`.
2. **Eyebrow chip** (hero) — glass rounded-full pill with icon, mono uppercase tiny text.
3. **Buttons** — Primary: solid white pill, dark text, arrow icon, sheen sweep + glow on hover. Secondary: glass pill, lifts on hover.
4. **Glass card** — `glass sheen-on-hover glass-hover rounded-3xl p-6`; content: mono label or `// 01` number, H3, muted text, optional link with arrow.
5. **Tabbed showcase** — glass pill tab bar (active tab = solid white), below a large glass panel with a 2-col layout (description + list of glass-strong chips).
6. **Service rows** (inner page) — big glass card per service, `// 01` number, title, paragraph on the left; on the right a 2-col grid of `glass-strong` chips with check icon that nudge right (`translate-x-1`) on hover.
7. **Infinite marquee strip** — glass panel `rounded-[2rem] py-8`, inner track `w-max flex gap-4` duplicated, each tile `glass-strong rounded-2xl` (logo or name + mono tag pill). 48s linear loop (100s for long lists).
8. **Numbered principle list** — glass-strong boxes inside a card: "1. Title" + muted text.
9. **Contact section** — glass panel with form (glass inputs) + contact info.
10. **Footer** — a glass panel `rounded-[2rem] p-8/12`, 3 columns (brand + blurb + email/phone + social squircle icons | mono "Navigate" + 2-col links | CTA/contact), then a copyright line.
11. **Floating chat/CTA button** — fixed bottom-right, rounded-full, blurred dark bg, primary border, blue shadow, icon with **pinging emerald dot**; scales 1.05 on hover, 0.95 on press.

---

## 3. Animations & background (complete list)

### Background stack (fixed, behind everything)
| Layer | Implementation |
|---|---|
| `-z-20` **Ferrofluid WebGL2 canvas** | Full-screen fragment shader: two layers of value noise flow in opposite directions, are smooth-min blended, and only a thin "rim" band around one iso-level glows. Result: slowly drifting, glowing liquid-metal contour lines in white/grey. Props used: colours white/#ccc/#888, speed .15, scale 1.2, turbulence .5, fluidity .2, rim width .2, sharpness 2, shimmer .5, glow 1, flow down, **opacity .25**. **Mouse interaction**: a Gaussian "hole" around the cursor dims the lines (strength .5, radius .3), cursor position eased with exponential damping. Rendered with requestAnimationFrame, DPR-aware, resizes with ResizeObserver. |
| `-z-10` **Grid lines** | CSS: two 1px linear-gradients at `white / 4%`, 64px cells, layer opacity .6. |
| Aurora (token) | `--gradient-aurora`: 3 radial gradients (top-left, top-right, bottom) — used as soft glow fields. |
| Bottom **gradual blur** | Fixed 2.5rem strip at the viewport bottom: 5 stacked divs, each with increasing `backdrop-filter: blur()` and a banded mask-gradient, so content blurs progressively as it scrolls off the bottom edge. |

### Motion
| Name | Behaviour |
|---|---|
| **Blur-up reveal** (scroll) | Every section header, card and panel starts `opacity 0; filter blur(8px); translateY(24px)` and animates to clear when it enters the viewport (motion `whileInView`, once). Cards in a grid stagger. |
| Hero entrance | Eyebrow → H1 (with blur) → paragraph → buttons → cards, sequential stagger on load. |
| **Sheen sweep** (hover) | `::after` 45%-wide white/14% gradient bar sweeps from -120% → 220% in 1.1s on hover. |
| **Glass lift** (hover) | `translateY(-6px)` + stronger glass + glow shadow, 0.5s `cubic-bezier(.16,1,.3,1)`. |
| Chip nudge | `translate-x-1` on hover, 300ms. |
| **Marquee** | `translateX(0 → -50%)` 48s linear infinite (lists duplicated). |
| float-slow | `translateY(-28px) scale(1.06)` at 50%, for decorative orbs. |
| Ping / pulse | Live-status dot on floating button (Tailwind `ping`, `pulse`). |
| Logo hover | rotate 12°, 500ms. |
| Nav | transitions 500ms between `glass` and `glass-strong`; menu panel drops in. |
| Social icons | lift -2px, border/text go primary, soft glow. |

### Easing
Default `cubic-bezier(.4,0,.2,1)` 150ms; signature "expo-out" `cubic-bezier(.16,1,.3,1)` 500ms for hover lifts.

---

## 4. UX patterns
- One long, scannable home page that **previews every inner page** (each section ends in "Explore More →" to its own route).
- Inner pages share a hero header: mono eyebrow → aurora-gradient H1 → muted intro.
- Primary conversion is everywhere: nav CTA, hero CTA, contact section, footer, floating button.
- Minimal colour means hierarchy comes from glass depth (glass vs glass-strong), weight and the mono labels.
- Responsive: hamburger menu at every size; grids collapse to 1 column; marquees keep moving on mobile.

---

## 5. Mapping Cloud9 content onto this design

| Route | Content (from `scraped/SITE_CONTENT.md`) | Patterns |
|---|---|---|
| `/` Home | Hero (tagline + intro), 4→6 service cards, tabbed service showcase, values, clients marquee, about split, contact CTA | all of the above |
| `/about` | Who We Are text, Mission, Vision, core values (integrity, reliability, quality) | page hero, split cards, numbered principles |
| `/services` | 6 services with full bullet lists | service rows with chips |
| `/clients` | 8 client logos | marquee + logo grid |
| `/contact` | Noida address, phones, email, form | contact panel |
