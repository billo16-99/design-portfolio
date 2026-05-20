"use client"

import { useState } from "react"
import { projects } from "@/data/projects"
import ProjectCard from "@/components/ProjectCard"

const categories = ["all", "poster", "banner", "branding"] as const

export default function PortfolioPage() {
  const [active, setActive] = useState<string>("all")

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active)

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-12 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 lg:mb-10">
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1]">All Work</h1>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 lg:px-5 py-2 rounded-full text-sm capitalize ${
                active === cat ? "bg-primary-accent text-black" : "bg-surface-card text-text-secondary border border-border-subtle hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
