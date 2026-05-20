import { notFound } from "next/navigation"
import Link from "next/link"
import { projects } from "@/data/projects"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-12 max-w-5xl mx-auto">
      <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white mb-8 transition-colors">
        ← Back
      </Link>

      <div className="rounded-[16px] overflow-hidden mb-8 border border-border-subtle">
        <img src={project.image} alt={project.title} className="w-full object-cover max-h-[500px]" />
      </div>

      <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] mb-2">{project.title}</h1>
      <p className="text-sm capitalize mb-6 text-text-secondary">{project.category}</p>
      <p className="text-base text-text-secondary mb-6 max-w-xl leading-relaxed">{project.description}</p>

      {project.tools && (
        <div className="mb-4">
          <h2 className="text-sm font-medium mb-2">Tools</h2>
          <div className="flex gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="bg-surface-card border border-border-subtle px-4 py-2 rounded-full text-sm text-text-secondary">{tool}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
