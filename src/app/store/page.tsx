"use client"

import { useState, useEffect } from "react"
import { products, categories } from "@/data/products"
import { exchangeRates, countryCurrency, currencySymbols, currencyLocales } from "@/data/currencies"
import type { CurrencyInfo } from "@/data/currencies"
import ProductCard from "@/components/ProductCard"

export default function StorePage() {
  const [currency, setCurrency] = useState<CurrencyInfo>({ code: "USD", symbol: "$", rate: 1 })
  const [detected, setDetected] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 5000)

    fetch("https://ipapi.co/json/", { signal: controller.signal })
      .then((r) => r.json())
      .then((data) => {
        const code = countryCurrency[data.country_code] || "USD"
        const rate = exchangeRates[code] || 1
        const symbol = currencySymbols[code] || "$"
        setCurrency({ code, symbol, rate })
      })
      .catch(() => {
        setCurrency({ code: "USD", symbol: "$", rate: 1 })
      })
      .finally(() => {
        clearTimeout(timeout)
        setDetected(true)
      })
  }, [])

  function formatPrice(usdPrice: number) {
    const localPrice = usdPrice * currency.rate
    const locale = currencyLocales[currency.code] || "en-US"
    try {
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency.code,
        minimumFractionDigits: 0,
        maximumFractionDigits: localPrice % 1 === 0 ? 0 : 2,
      }).format(localPrice)
    } catch {
      return `${currency.symbol}${localPrice.toFixed(0)}`
    }
  }

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-12 max-w-6xl mx-auto">
      <div className="flex items-center justify-center gap-3 mb-12">
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] text-center">Store</h1>
      </div>

      {detected && currency.code !== "USD" && (
        <p className="text-xs text-text-secondary text-center -mt-10 mb-10">
          Prices shown in {currency.code} —&nbsp;{currency.symbol}
        </p>
      )}

      {categories.map((cat) => {
        const catProducts = products.filter((p) => p.category === cat.key)
        if (catProducts.length === 0) return null
        return (
          <section key={cat.key} className="mb-12">
            <h2 className="text-[clamp(1.2rem,3vw,1.8rem)] font-bold font-headings leading-[1.1] mb-6">{cat.label}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
              {catProducts.map((product) => (
                <ProductCard key={product.id} product={product} formatPrice={formatPrice} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
