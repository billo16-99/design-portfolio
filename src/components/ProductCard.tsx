import type { Product } from "@/data/products"

export default function ProductCard({ product }: { product: Product }) {
  const waMessage = `Hi, I'm interested in ${product.name} - $${product.price}`
  const waUrl = `https://wa.me/233206560380?text=${encodeURIComponent(waMessage)}`

  return (
    <div className="bg-surface-card border border-border-subtle rounded-[16px] p-6 flex flex-col">
      <div className="aspect-square rounded-[12px] bg-gradient-to-br from-primary-accent/20 to-surface-elevated mb-4" />
      <h3 className="font-headings font-medium mb-1">{product.name}</h3>
      <p className="text-sm text-text-secondary mb-3 flex-1">{product.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">${product.price}</span>
        <a
          href={waUrl}
          target="_blank"
          className="bg-primary-accent text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-accent-hover transition-all shadow-[0_0_20px_rgba(194,255,15,0.2)]"
        >
          Buy on WhatsApp
        </a>
      </div>
    </div>
  )
}
