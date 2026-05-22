export type ProductCategory = "guide" | "software" | "design" | "prompt"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: ProductCategory
  image?: string
}

export const products: Product[] = [
  { id: "prompt-mastery", name: "AI Prompt Mastery Guide", description: "Learn to craft stunning AI prompts for any platform.", price: 29, category: "guide" },
  { id: "cinema-handbook", name: "Cinematic Design Handbook", description: "Master cinematic composition and color theory.", price: 39, category: "guide" },
  { id: "lr-presets", name: "Pro Lightroom Presets", description: "Cinematic color grading presets for any photo.", price: 19, category: "software" },
  { id: "ps-actions", name: "Photoshop Actions Pack", description: "One-click actions for pro retouching workflow.", price: 24, category: "software" },
  { id: "social-bundle", name: "Social Media Mega Bundle", description: "50+ ready-to-use social media design templates.", price: 49, category: "design" },
  { id: "poster-kit", name: "Poster Template Kit", description: "Customizable AI poster templates for any occasion.", price: 34, category: "design" },
  { id: "100-prompts", name: "100 Premium Midjourney Prompts", description: "Curated prompts for breathtaking AI imagery.", price: 14, category: "prompt" },
  { id: "cinema-prompts", name: "Cinematic AI Prompt Pack", description: "Film-grade AI prompts for cinematic visuals.", price: 19, category: "prompt" },
]

export const categories: { key: ProductCategory; label: string }[] = [
  { key: "guide", label: "Guides" },
  { key: "software", label: "Software" },
  { key: "design", label: "Pro Designs" },
  { key: "prompt", label: "AI Prompts" },
]
