import Link from "next/link"
import type { Project } from "@/data/projects"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="aspect-[3/4] rounded-[16px] overflow-hidden relative group"
    >
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary-accent/20 text-primary-accent mb-2 inline-block">{project.category}</span>
        <h2 className="text-base font-headings font-medium text-white">{project.title}</h2>
      </div>
    </Link>
  )
}
