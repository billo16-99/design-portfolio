import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-12 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] mb-6">About</h1>
          <p className="text-text-secondary leading-relaxed mb-4">
            Specializing in AI-generated poster design with a cinematic edge. Every project is crafted
            using advanced prompting, compositing, and editing workflows to deliver gallery-quality results.
          </p>
          <p className="text-text-secondary leading-relaxed mb-8">
            Whether you need a music poster, branding assets, or social media visuals — I bring your vision to life.
          </p>
          <Link
            href="/order"
            className="inline-flex items-center gap-2 bg-primary-accent text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-accent-hover transition-all shadow-[0_0_20px_rgba(194,255,15,0.2)]"
          >
            Get Started
          </Link>
        </div>
        <div className="bg-surface-card border border-border-subtle rounded-[16px] aspect-square flex items-center justify-center">
          <span className="text-6xl">🎨</span>
        </div>
      </div>
    </div>
  )
}
