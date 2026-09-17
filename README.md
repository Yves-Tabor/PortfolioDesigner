# Yves Tabor — Personal Portfolio

A minimal, high-conviction personal portfolio website designed like a slide deck / presentation rather than a traditional scrolling page. Built with **React**, **Tailwind CSS**, **TypeScript**, and **Vite**.

---

## 🎨 Design System & Aesthetics

### Color Palette (Strict Tri-Color Family)
- **Primary Background**: White (`#FFFFFF`)
- **Primary Text & Dark Accents**: Black (`#0A0A0A`)
- **Accent Family (Emerald)**:
  - Base Accent: Emerald 500 (`#10B981`)
  - Hover / Dark Accent: Emerald 600 (`#059669`) / Emerald 700 (`#047857`)
  - Subtle Tint: Emerald 50 (`#ECFDF5`) & Emerald 100 (`#D1FAE5`)
  - Border Accents: Emerald 200 (`#A7F3D0`)

### Typography
- **Primary Font**: `Inter` (clean geometric sans-serif for UI layout & body copy)
- **Secondary Font**: `Lora` (editorial serif for subtitles, highlights, and secondary headings)
- **Technical / Mono Font**: `JetBrains Mono` (for section indices, stat labels, PGP keys, and code tags)

---

## ⚡ Key Design Features

### 1. Animations & Motion Design
- **Sticky-Stack Scroll Behavior (Desktop)**: Center sections are full-height (`100vh`) and sticky-positioned (`position: sticky`), creating a card-stacking effect as the user scrolls.
- **Dynamic Content Crossfade**: The right-column tracker card updates with a smooth crossfade and vertical translation (`translateY(10px)` over `450ms`) as new sections enter the viewport.
- **Micro-Interactions & Hover States**: Buttons, cards, and navigation dots feature snappy scale transitions (`scale(1.03)` / `scale(1.08)` over `150ms`) with emerald fill shifts.
- **Scroll Reveal Animations**: Elements use CSS class `.reveal` triggered by an `IntersectionObserver` to animate into view with opacity and subtle upward translation (`translateY(24px)`).

### 2. Routing & Navigations
- **Single-Page Smooth Scrolling**: Programmatic navigation via `scrollIntoView({ behavior: 'smooth' })` triggered across:
  - Left Sidebar CTA ("Get in touch")
  - Right Tracker dynamic dots (`01` - `04`)
  - Mobile bottom navigation bar
  - Contact section ("Return to top" button)
- **IntersectionObserver Active Tracking**: Viewport center detection (`rootMargin: '-45% 0px -45% 0px'`) automatically updates the active section index (`01` to `04`) and progress fill bar (`25%` to `100%`).
- **Interactive Modals & Case Studies**:
  - **`ProjectDetailModal`**: Clicking any project card opens a backdrop-blurred modal detailing project scope, metrics, tech stack, and links.
  - **PGP Public Key Window**: Interactive drawer modal in the contact box for security-conscious communication.
  - **Email Copy Toast**: Copy-to-clipboard functionality with instant feedback toast notification.

### 3. Component Reusability & Architecture
- **`LeftSidebar.tsx`**: Pinned identity sidebar housing profile avatar image, status badge, title, bio, and social links.
- **`RightTracker.tsx`**: Pinned status column tracking progress percentage, section numbers, context labels, and navigation dots.
- **`MobileNav.tsx`**: Fixed mobile bottom navigation bar replacing the right tracker on smaller viewports.
- **`SectionHeader.tsx`**: Reusable section title component supporting light and dark background variants.
- **`StatCard.tsx`**: Reusable metric card with customizable accent styling.
- **`SkillCategoryCard.tsx`**: Modular skill column card for grouping product and engineering capabilities.
- **`ProjectCard.tsx`**: Reusable project card with hover elevations and meta badges.
- **`ContactBox.tsx`**: Reusable inbox container with copy-to-clipboard functionality and PGP viewer.

### 4. Code Quality & Standards
- **Decoupled Data Layer**: All profile metadata, section descriptions, skills, and projects reside in [`src/data/portfolioData.ts`](file:///c:/Users/user/Desktop/My%20Apps/PortfolioDesigner/src/data/portfolioData.ts), allowing easy content updates without modifying UI components.
- **Strict TypeScript Types**: Fully typed interfaces in [`src/types/portfolio.ts`](file:///c:/Users/user/Desktop/My%20Apps/PortfolioDesigner/src/types/portfolio.ts).
- **Responsive Engineering**: Seamless breakpoint transition from a 3-column grid (`1024px+`) to a mobile layout with fixed bottom navigation bar.
- **Clean Code Practices**: Zero unused variables, self-documenting prop interfaces, strict accessibility (`aria-label`, `role="button"`), and zero build warnings.

---

## 🛠️ Project Setup & Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
