"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 lg:py-6 relative z-50">
      <Link href="/" className="flex items-center gap-2">
        <span className="size-8 rounded-lg bg-primary-accent flex items-center justify-center">
          <span className="text-sm font-bold text-black">DA</span>
        </span>
        <span className="font-headings font-bold text-sm hidden sm:inline">AI D.A</span>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-1 bg-surface-elevated border border-border-subtle rounded-full px-2 py-1">
        <Link href="/portfolio" className="px-4 py-2 text-sm text-text-secondary hover:text-white transition-colors">Work</Link>
        <Link href="/order" className="px-4 py-2 text-sm text-text-secondary hover:text-white transition-colors">Order</Link>
        <Link href="/about" className="px-4 py-2 text-sm text-text-secondary hover:text-white transition-colors">About</Link>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href="/order"
          className="bg-primary-accent text-black px-4 lg:px-5 py-2 rounded-full text-sm font-medium hover:bg-primary-accent-hover transition-all shadow-[0_0_20px_rgba(194,255,15,0.2)]"
        >
          Order Now
        </Link>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden size-8 flex flex-col gap-1.5 items-center justify-center">
          <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? "rotate-45 translate-y-1" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-1" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 mx-4 bg-surface-elevated border border-border-subtle rounded-[16px] p-4 flex flex-col gap-2 md:hidden">
          <Link href="/portfolio" onClick={() => setOpen(false)} className="px-4 py-3 text-sm text-text-secondary hover:text-white rounded-full hover:bg-white/5">Work</Link>
          <Link href="/order" onClick={() => setOpen(false)} className="px-4 py-3 text-sm text-text-secondary hover:text-white rounded-full hover:bg-white/5">Order</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="px-4 py-3 text-sm text-text-secondary hover:text-white rounded-full hover:bg-white/5">About</Link>
        </div>
      )}
    </nav>
  )
}
