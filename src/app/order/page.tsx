"use client"

import { useActionState } from "react"
import { submitOrder } from "@/app/actions/submitOrder"

export default function OrderPage() {
  const [state, formAction, pending] = useActionState(submitOrder, null)

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-12 max-w-xl mx-auto">
      <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold font-headings leading-[1.1] mb-10">Place an Order</h1>

      <form action={formAction} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input id="name" name="name" required className="w-full bg-surface-card border border-border-subtle rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary-accent" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input id="email" name="email" type="email" required className="w-full bg-surface-card border border-border-subtle rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary-accent" />
        </div>

        <div>
          <label htmlFor="tier" className="block text-sm font-medium mb-1">Service Tier</label>
          <select id="tier" name="tier" required className="w-full bg-surface-card border border-border-subtle rounded-full px-5 py-3 text-sm focus:outline-none focus:border-primary-accent">
            <option value="">Select a tier</option>
            <option value="poster">Poster — $50</option>
            <option value="pro">Pro — $150</option>
            <option value="branding">Full Branding — $300</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1">Description</label>
          <textarea id="description" name="description" rows={4} required className="w-full bg-surface-card border border-border-subtle rounded-[16px] px-5 py-3 text-sm focus:outline-none focus:border-primary-accent" />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="bg-primary-accent text-black rounded-full px-8 py-3 text-sm font-medium hover:bg-primary-accent-hover transition-all shadow-[0_0_20px_rgba(194,255,15,0.2)] disabled:opacity-50"
        >
          {pending ? "Sending..." : "Send Order"}
        </button>

        {state?.success && !pending && (
          <p className="text-sm text-primary-accent">Order sent! I&apos;ll get back to you soon.</p>
        )}
        {state?.error && !pending && (
          <p className="text-sm text-red-500">{state.error}</p>
        )}
      </form>
    </div>
  )
}
