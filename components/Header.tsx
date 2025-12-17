"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/70 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="focus:outline-none" aria-label="Go to homepage">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((n) => (
            <NavLink key={n.href} href={n.href} label={n.label} />
          ))}
          <Link href="/contact" className="btn btn-primary ml-2">
            Request a Quote
          </Link>
        </nav>

        <button
          className="md:hidden btn btn-ghost"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-ink/90">
          <div className="container py-3 flex flex-col gap-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 bg-white/5 hover:bg-white/10 text-steel hover:text-white transition"
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
