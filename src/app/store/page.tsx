import { products, categories } from "@/data/products"
import ProductCard from "@/components/ProductCard"

export default function StorePage() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-12 max-w-6xl mx-auto">
      <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] mb-12 text-center">Store</h1>

      {categories.map((cat) => {
        const catProducts = products.filter((p) => p.category === cat.key)
        if (catProducts.length === 0) return null
        return (
          <section key={cat.key} className="mb-12">
            <h2 className="text-[clamp(1.2rem,3vw,1.8rem)] font-bold font-headings leading-[1.1] mb-6">{cat.label}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
              {catProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
