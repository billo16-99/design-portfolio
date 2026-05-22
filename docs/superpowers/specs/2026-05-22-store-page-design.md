# Store Page — Digital Products

## Overview
A single `/store` page that catalogs digital products (guides, software, designs, prompts) for sale via WhatsApp-based ordering. Follows the existing Cinematic Dark Luxury design system.

## Route
- `/store` — new page at `src/app/store/page.tsx`
- Navbar gets a `Store` link inserted between "Work" and "Order"

## Data
- `src/data/products.ts` exports `Product[]`
- Fields: `id`, `name`, `description`, `price`, `category`, `image`
- Category enum: `"guide" | "software" | "design" | "prompt"`

## Layout
- Page title "Store" centered at top
- 4 vertical sections, one per category, in order: Guides, Software, Pro Designs, Prompts
- Each section: category heading (h2, left-aligned) + responsive card grid
- Grid: 2 cols on mobile, 3 cols on desktop (`grid-cols-2 md:grid-cols-3`)
- Same gap/spacing as the deliverables section on the homepage

## Product Card
- `src/components/ProductCard.tsx` — reusable, receives a `Product` prop
- Border card: `bg-surface-card border border-border-subtle rounded-[16px] p-6`
- Optional thumbnail image or gradient placeholder (280×280)
- Product name (`font-headings font-medium`)
- Description (`text-sm text-text-secondary`)
- Price (`text-lg font-bold`)
- "Buy on WhatsApp" button at bottom
  - Opens `https://wa.me/233206560380?text=Hi%2C%20I'm%20interested%20in%20[product name]%20-%20%24[price]`
  - Styled like the existing order-page CTA: `bg-primary-accent text-black px-6 py-2 rounded-full text-sm font-medium`

## Placeholder Data

| Category | ID | Name | Price |
|----------|----|------|-------|
| guide | prompt-mastery | "AI Prompt Mastery Guide" | $29 |
| guide | cinema-handbook | "Cinematic Design Handbook" | $39 |
| software | lr-presets | "Pro Lightroom Presets" | $19 |
| software | ps-actions | "Photoshop Actions Pack" | $24 |
| design | social-bundle | "Social Media Mega Bundle" | $49 |
| design | poster-kit | "Poster Template Kit" | $34 |
| prompt | 100-prompts | "100 Premium Midjourney Prompts" | $14 |
| prompt | cinema-prompts | "Cinematic AI Prompt Pack" | $19 |

All placeholder images use a consistent gradient placeholder: `bg-gradient-to-br from-primary-accent/20 to-surface-elevated`

## Navbar Updates
- Desktop: insert `<Link href="/store">Store</Link>` between "Work" and "Order"
- Mobile: same insertion between "Work" and "Order"
- The Navbar component (`src/components/Navbar.tsx`) is a client component, no structural changes needed

## No Payment Integration
- WhatsApp-only ordering flow
- No cart, no checkout, no payment forms
- Same pattern as existing `/order` page

## Out of Scope
- Payment gateway integration
- User accounts / order history
- Cart system
- Search/filter
