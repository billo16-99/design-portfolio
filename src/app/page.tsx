"use client"

import { useState } from "react"
import Link from "next/link"
import { projects } from "@/data/projects"
import FeaturedWork from "@/components/FeaturedWork"

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div>
      <section className="min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-[800px] animate-reveal">
          <h1 className="text-[clamp(3rem,8vw,5rem)] font-bold font-headings leading-[1.05] tracking-[-0.04em] mb-6">
            Cinematic AI Posters for Brands, Artists & Creators.
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-[600px] mx-auto mb-8">
            Premium AI-generated poster designs. Hyper-realistic, cinematic quality delivered fast.
          </p>
          <Link
            href="/order"
            className="inline-block bg-primary-accent text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-primary-accent-hover transition-all shadow-[0_0_30px_rgba(194,255,15,0.2)]"
          >
            Order Now
          </Link>
        </div>
      </section>

      <FeaturedWork />

      {/* Section 3: Pricing */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10 max-w-6xl mx-auto">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] mb-8 lg:mb-12 text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Poster", price: "$50", desc: "Single AI-generated poster", popular: false, features: ["HD Resolution", "1 Revision", "Commercial Use"] },
            { name: "Pro", price: "$150", desc: "Poster + banner set", popular: true, features: ["4K Resolution", "3 Revisions", "Commercial Use", "Source Files"] },
            { name: "Branding", price: "$300", desc: "Full visual identity", popular: false, features: ["5+ Assets", "Unlimited Revisions", "Full License", "Source Files", "Priority Support"] },
          ].map((tier) => (
            <div
              key={tier.name}
              className={`rounded-[16px] p-8 border ${
                tier.popular
                  ? "bg-surface-card border-primary-accent/50 shadow-[0_0_30px_rgba(194,255,15,0.25),0_0_60px_rgba(194,255,15,0.1)]"
                  : "bg-surface-card border-border-subtle"
              }`}
            >
              {tier.popular && <span className="text-[11px] font-semibold text-primary-accent mb-4 block">POPULAR</span>}
              <h3 className="text-2xl font-headings font-bold mb-1">{tier.name}</h3>
              <p className="text-4xl font-bold mb-2">{tier.price}</p>
              <p className="text-sm text-text-secondary mb-6">{tier.desc}</p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span className="text-primary-accent">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/order"
                className={`block text-center rounded-full py-3 text-sm font-medium ${
                  tier.popular
                    ? "bg-primary-accent text-black"
                    : "bg-surface-elevated text-white border border-border-subtle"
                }`}
              >
                Select {tier.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Deliverables */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10 max-w-4xl mx-auto">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] mb-8 lg:mb-12 text-center">What You Get</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-6">
          {[
            { title: "4K Resolution", desc: "Crisp, print-ready files", icon: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10m4 0 2 2-10 10M11 9h4" },
            { title: "Commercial Use", desc: "Full licensing included", icon: "M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" },
            { title: "Fast Delivery", desc: "48h turnaround typical", icon: "M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" },
            { title: "Source Files", desc: "PSD, PNG, SVG formats", icon: "M5 8h14M5 8a2 2 0 1 1 0-4h14a2 2 0 1 1 0 4M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8m-9 4h4" },
            { title: "Revisions", desc: "Free adjustments", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 0 1 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15" },
            { title: "Custom Sizes", desc: "Any format you need", icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" },
          ].map((item) => (
            <div key={item.title} className="bg-surface-card border border-border-subtle rounded-[16px] p-6 text-center">
              <div className="size-10 rounded-full bg-primary-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg className="size-5 text-primary-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
              </div>
              <h3 className="font-headings font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10 max-w-4xl mx-auto">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] mb-8 lg:mb-12 text-center">How It Works</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {[
            { step: "01", title: "Brief", desc: "Tell me what you need — style, mood, references." },
            { step: "02", title: "Create", desc: "I generate your poster using advanced AI workflows." },
            { step: "03", title: "Deliver", desc: "You get final files. Revisions included." },
          ].map((item) => (
            <div key={item.step} className="relative bg-surface-card border border-border-subtle rounded-[16px] p-8 flex-1 text-center">
              <span className="text-6xl font-bold font-headings text-primary-accent/20 absolute top-2 right-4">{item.step}</span>
              <h3 className="text-xl font-headings font-medium mb-2 relative z-10">{item.title}</h3>
              <p className="text-sm text-text-secondary relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] mb-8 lg:mb-12 text-center">Clients</h2>
        <div className="flex gap-3 lg:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 sm:-mx-6 lg:-mx-10 px-4 sm:px-6 lg:px-10">
          {[
            { name: "Alex M.", role: "Musician", text: "The poster captured exactly what I envisioned. Incredible attention to detail." },
            { name: "Sarah K.", role: "Brand Owner", text: "Fast turnaround and the quality blew me away. Will definitely order again." },
            { name: "James R.", role: "Content Creator", text: "Best AI poster work I've seen. The cinematic style is unmatched." },
          ].map((t) => (
            <div key={t.name} className="snap-start shrink-0 w-[280px] sm:w-[300px] bg-[#0A0A0A] border border-border-subtle rounded-[16px] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => <span key={i} className="text-primary-accent text-sm">★</span>)}
              </div>
              <p className="text-sm text-text-secondary mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-surface-elevated flex items-center justify-center text-xs font-medium">{t.name[0]}</div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7: About */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] mb-6">About</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Specializing in AI-generated poster design with a cinematic edge. Every project is crafted
              using advanced prompting, compositing, and editing workflows to deliver gallery-quality results.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Whether you need a music poster, branding assets, or social media visuals — I bring your vision to life.
            </p>
          </div>
          <div className="bg-surface-card border border-border-subtle rounded-[16px] aspect-square flex items-center justify-center">
            <div className="size-20 rounded-full bg-primary-accent/10 border border-primary-accent/30 flex items-center justify-center">
              <span className="text-2xl font-bold font-headings text-primary-accent">AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10 max-w-[700px] mx-auto">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] mb-8 lg:mb-12 text-center">FAQ</h2>
        <div className="space-y-4">
          {[
            { q: "How fast do you deliver?", a: "Most posters delivered within 48 hours." },
            { q: "Can I get revisions?", a: "Yes — each tier includes revisions." },
            { q: "What formats do I get?", a: "PNG, JPG, and source PSD files." },
            { q: "Do I own the rights?", a: "Full commercial use included with all tiers." },
          ].map((faq, i) => (
            <div key={i} className="bg-surface-card border border-border-subtle rounded-[16px]">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex items-center justify-between w-full p-6 text-left font-headings font-medium"
              >
                {faq.q}
                <span className={`text-primary-accent text-xl transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-sm text-text-secondary">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 9: Contact / Footer */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-10 text-center">
        <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] mb-4">Ready to Order?</h2>
        <p className="text-text-secondary mb-8">Let&apos;s create something cinematic.</p>
        <Link
          href="/order"
          className="inline-block bg-primary-accent text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-primary-accent-hover transition-all shadow-[0_0_30px_rgba(194,255,15,0.2)]"
        >
          Get Started
        </Link>
      </section>

      <footer className="border-t border-border-subtle py-6 lg:py-8 px-4 sm:px-6 lg:px-10 text-center text-sm text-text-secondary">
        © {new Date().getFullYear()} AI Design Academy. All rights reserved.
      </footer>
    </div>
  )
}
