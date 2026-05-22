"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import type { PhotoData } from "@/app/api/photos/route"

export default function FeaturedWork() {
  const [photos, setPhotos] = useState<PhotoData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/photos")
      .then((r) => r.json())
      .then((data) => {
        if (data.images?.length) setPhotos(data.images)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] mb-8 lg:mb-12">Featured Work</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="shrink-0 w-[260px] sm:w-[300px] aspect-[3/4] rounded-[16px] bg-surface-card animate-pulse" />
          ))}
        </div>
      </section>
    )
  }

  if (photos.length === 0) return null

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10">
      <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] mb-8 lg:mb-12">Featured Work</h2>
      <div className="flex gap-3 lg:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10 hide-scrollbar group/showcase">
        {photos.map((photo, i) => (
          <Link
            key={i}
            href="/portfolio"
            className="snap-start shrink-0 w-[260px] sm:w-[300px] aspect-[3/4] rounded-[16px] overflow-hidden relative group transition-opacity duration-300 group-hover/showcase:opacity-50 hover:!opacity-100"
          >
            <img
              src={photo.url}
              alt={`Work ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </Link>
        ))}
      </div>
    </section>
  )
}
