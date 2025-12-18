"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Header */}
      <header className="mb-14 max-w-2xl">
        <h1 className="text-5xl font-semibold tracking-tight">Contact Us</h1>
        <p className="mt-6 text-lg opacity-80">
          Request a quote or ask a question. A Sentrax Security Service
          representative will respond promptly.
        </p>
      </header>

      {!submitted ? (
        <form
          action="https://formspree.io/f/XXXXXXXX"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="grid gap-6 max-w-3xl"
        >
          <input
            type="hidden"
            name="subject"
            value="New Sentrax Security Inquiry"
          />

          <div className="grid gap-2">
            <label className="text-sm">Full Name</label>
            <input
              name="name"
              required
              className="rounded-xl border border-line bg-white/5 px-4 py-3 outline-none focus:border-white/30"
              placeholder="John Doe"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm">Email</label>
            <input
              type="email"
              name="email"
              required
              className="rounded-xl border border-line bg-white/5 px-4 py-3 outline-none focus:border-white/30"
              placeholder="you@company.com"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm">Phone (optional)</label>
            <input
              name="phone"
              className="rounded-xl border border-line bg-white/5 px-4 py-3 outline-none focus:border-white/30"
              placeholder="(555) 555-5555"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm">Coverage Type</label>
            <select
              name="coverage"
              className="rounded-xl border border-line bg-white/5 px-4 py-3 outline-none focus:border-white/30"
            >
              <option>Unarmed Security</option>
              <option>Armed Security</option>
              <option>Mobile Patrol</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-sm">Location(s)</label>
            <input
              name="location"
              required
              className="rounded-xl border border-line bg-white/5 px-4 py-3 outline-none focus:border-white/30"
              placeholder="City, State (or multiple locations)"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              className="rounded-xl border border-line bg-white/5 px-4 py-3 outline-none focus:border-white/30"
              placeholder="Tell us about coverage hours, start date, and any special requirements."
            />
          </div>

          <button type="submit" className="btn btn-primary w-fit px-8 py-3">
            Send Message
          </button>
        </form>
      ) : (
        <div className="rounded-2xl border border-line bg-white/5 p-10 max-w-2xl">
          <h2 className="text-2xl font-semibold">Thank you</h2>
          <p className="mt-3 opacity-80">
            Your message has been received. We’ll be in touch shortly.
          </p>
        </div>
      )}
    </main>
  );
}
