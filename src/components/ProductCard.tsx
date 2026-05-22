import type { Product } from "@/data/products"

export default function ProductCard({
  product,
  formatPrice,
}: {
  product: Product
  formatPrice: (usdPrice: number) => string
}) {
  const waMessage = `Hi, I'm interested in ${product.name} - ${formatPrice(product.price)}`
  const waUrl = `https://wa.me/233206560380?text=${encodeURIComponent(waMessage)}`

  return (
    <div className="bg-surface-card border border-border-subtle rounded-[16px] p-4 sm:p-6 flex flex-col">
      <div className="aspect-square rounded-[12px] bg-gradient-to-br from-primary-accent/20 to-surface-elevated mb-3 sm:mb-4" />
      <h3 className="font-headings font-medium text-sm sm:text-base mb-1">{product.name}</h3>
      <p className="text-xs sm:text-sm text-text-secondary mb-3 flex-1 leading-relaxed">{product.description}</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
        <span className="text-base sm:text-lg font-bold text-center sm:text-left">{formatPrice(product.price)}</span>
        <a
          href={waUrl}
          target="_blank"
          className="bg-primary-accent text-black px-4 sm:px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-accent-hover transition-all shadow-[0_0_20px_rgba(194,255,15,0.2)] text-center"
        >
          Buy
        </a>
      </div>
    </div>
  )
}
