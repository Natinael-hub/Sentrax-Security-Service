import Link from "next/link";
import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";
import Section from "@/components/Section";
import { site } from "./metadata";

const highlights = [
  {
    title: "Unarmed Security Officers",
    desc: "Professional presence, access control, patrols, and incident reporting for corporate and commercial sites.",
  },
  {
    title: "Armed Security Officers",
    desc: "Licensed armed coverage for higher-risk environments with strict SOPs, de-escalation, and rapid response posture.",
  },
  {
    title: "Mobile Patrol Services",
    desc: "Marked/unmarked vehicle patrol options, scheduled or randomized routes, and documented checks for accountability.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO (Image Background) */}
      <section
        className="relative overflow-hidden border-b border-line bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-sentrax.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 container py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7 text-white">
              <div className="badge bg-white/10 text-white">
                Nationwide Security Coverage
              </div>

              <h1 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight">
                Corporate-level security services—delivered with discipline.
              </h1>

              <p className="mt-5 text-base md:text-lg text-white/90 leading-relaxed">
                Sentrax Security Service provides professional unarmed, armed,
                and mobile patrol solutions across the United States—built for
                reliability, clear communication, and measurable accountability.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn btn-primary">
                  Request a Quote
                </Link>
                <Link
                  href="/services"
                  className="rounded-xl border border-white/30 px-5 py-3 text-white hover:bg-white/10"
                >
                  View Services
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                <div className="card bg-white/10 p-4">
                  <div className="text-lg font-semibold">24/7</div>
                  <div className="text-xs text-white/70 mt-1">
                    Coverage options
                  </div>
                </div>
                <div className="card bg-white/10 p-4">
                  <div className="text-lg font-semibold">SOP-led</div>
                  <div className="text-xs text-white/70 mt-1">
                    Operations
                  </div>
                </div>
                <div className="card bg-white/10 p-4">
                  <div className="text-lg font-semibold">Nationwide</div>
                  <div className="text-xs text-white/70 mt-1">
                    Deployment
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="card bg-black/40 p-8 md:p-10 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14">
                    <Image
                      src="/logo.png"
                      alt="Sentrax logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="text-white">
                    <div className="text-sm font-semibold">
                      Sentrax Security Service
                    </div>
                    <div className="text-xs text-white/70">
                      {site.domain}
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-3 text-sm text-white/85">
                  <div className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>
                      Uniformed guard services for corporate and commercial
                      environments
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>
                      Incident documentation and consistent communication
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>
                      Scalable coverage for single sites or multi-location
                      portfolios
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/contact" className="btn btn-primary w-full">
                    Contact: {site.email}
                  </Link>
                  <p className="mt-3 text-xs text-white/70">
                    Prefer a specific start date or scope? Use the form and we’ll
                    respond quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <Section
        eyebrow="Core Services"
        title="Security solutions built for modern operations"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((h) => (
            <FeatureCard key={h.title} title={h.title} desc={h.desc} />
          ))}
        </div>

        <div className="mt-8">
          <Link href="/services" className="btn btn-ghost">
            Explore all services
          </Link>
        </div>
      </Section>

      {/* TRUST */}
      <Section
        eyebrow="How we work"
        title="Professional. Accountable. Consistent."
      >
        <div className="grid gap-5 md:grid-cols-3">
          <FeatureCard
            title="SOPs & Post Orders"
            desc="Clear site instructions, escalation paths, and daily expectations—aligned with your property standards."
          />
          <FeatureCard
            title="Communication"
            desc="Professional updates, incident reporting, and a direct point of contact for operational clarity."
          />
          <FeatureCard
            title="Quality Control"
            desc="Performance check-ins, documentation standards, and continual improvement to protect your environment."
          />
        </div>
      </Section>

      {/* CTA */}
      <section className="py-14">
        <div className="container">
          <div className="card p-8 md:p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xl md:text-2xl font-semibold">
                Ready to secure your site?
              </div>
              <p className="mt-2 text-sm text-steel">
                Tell us what you need—coverage type, location, and schedule—and
                we’ll follow up with next steps.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/contact" className="btn btn-primary">
                Request a Quote
              </Link>
              <Link href="/about" className="btn btn-ghost">
                About Sentrax
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

