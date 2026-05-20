export default function OrderPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 py-12 max-w-xl mx-auto">
      <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] mb-6">Place an Order</h1>
      <p className="text-text-secondary mb-8 leading-relaxed">
        Interested in a custom AI poster? Send me a message on WhatsApp with your idea and I&apos;ll get back to you.
      </p>

      <a
        href="https://wa.me/233206560380"
        target="_blank"
        className="inline-flex items-center gap-2 bg-primary-accent text-black px-8 py-3 rounded-full font-medium text-sm hover:bg-primary-accent-hover transition-all shadow-[0_0_20px_rgba(194,255,15,0.2)]"
      >
        Contact on WhatsApp
      </a>

      <p className="text-xs text-text-secondary mt-4">
        Or email: esselabdulghafar@gmail.com
      </p>
    </div>
  )
}
