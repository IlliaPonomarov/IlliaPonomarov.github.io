# Portfolio — UI Kit

A high-fidelity, single-page personal portfolio for **Illia Ponomarov**
(Java/Kotlin Software Engineer), built on the root design system
(`../../colors_and_type.css`). Aesthetic: dark engineering/terminal with an
orange signal color. Audience: recruiters and engineering hiring managers.

## Run it
Open `index.html`. It's a React (inline JSX via Babel) single page. All copy
lives in `data.js` — edit that to update content; no component changes needed.

## Files
| File | Role |
|---|---|
| `index.html` | Entry point — loads tokens, styles, React/Babel, and all scripts |
| `portfolio.css` | All site styling, built on the design-system tokens |
| `data.js` | **All content** (from the CV) — name, links, experience, projects, metrics, writing, certs, languages |
| `ui.jsx` | Primitives: `Ico` (Lucide), `Reveal` + `useReveal` (scroll-in), `useCountUp` (metric count animation) |
| `sections-a.jsx` | `Nav`, `Hero`, `About`, `Experience` (timeline) |
| `sections-b.jsx` | `Skills`, `Projects`, `Metrics`, `Writing`, `Certifications`, `Contact` (+ footer) |
| `App.jsx` | Composition, scroll-progress bar, Lucide init |

## Sections (in order)
Hero → About → Experience (timeline) → Skills/stack → Featured projects →
Impact metrics (count-up) → Writing (Medium) → Certifications + languages →
Contact + footer.

## Interaction / motion notes
- **Staggered load reveal** on the hero; **scroll-in reveals** elsewhere via
  IntersectionObserver. Both have deterministic fallbacks so content always
  shows even if IO doesn't fire (e.g. headless capture). Honors
  `prefers-reduced-motion`.
- **Metric count-up** animates 0 → value when scrolled into view (with a safety
  fallback to the final value).
- **Hover language:** cards shift border to tinted orange + lift; links/arrows
  turn orange and nudge; writing rows indent on hover.
- Sticky blurred nav; thin orange scroll-progress bar at the very top.

## Component coverage
Nav (logo + mono links + CTA), hero with status pill + meta + buttons, fact
table, experience timeline node, skill column with icon + pill tags, project
card (index + domain badge + tech), metric stat, writing list row,
certification card, language chips, contact CTA block, footer with social.

## Known gaps / to replace
- **LinkedIn & Medium URLs** in `data.js` are placeholders (not in the CV).
- Writing article titles are representative examples — swap for real Medium
  post titles/links.
- No portrait photo (none provided); the hero is intentionally type-led.
- Icons load from the Lucide CDN; LinkedIn/Medium glyphs are inlined SVGs
  (Lucide dropped brand icons).
