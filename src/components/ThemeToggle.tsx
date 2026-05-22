"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [light, setLight] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    const isLight = stored === "light"
    setLight(isLight)
    document.documentElement.classList.toggle("light", isLight)
  }, [])

  function toggle() {
    const next = !light
    setLight(next)
    document.documentElement.classList.toggle("light", next)
    localStorage.setItem("theme", next ? "light" : "dark")
  }

  return (
    <button
      onClick={toggle}
      className="relative w-[52px] h-[26px] rounded-full bg-surface-elevated border border-border-subtle transition-colors shrink-0"
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span className="absolute left-1.5 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
        <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <circle cx="12" cy="12" r="5" />
          <path strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </span>
      <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none">
        <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </span>
      <span
        className={`absolute top-[3px] w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
          light ? "translate-x-1" : "translate-x-[27px]"
        }`}
      />
    </button>
  )
}
