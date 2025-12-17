import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";

const pillars = [
  {
    title: "Professional Presence",
    desc: "Officers and supervisors that represent your property standards with discipline, respect, and consistency.",
  },
  {
    title: "Operational Readiness",
    desc: "Post orders, escalation paths, and clear communication—so expectations are never ambiguous.",
  },
  {
    title: "Accountability",
    desc: "Documented patrols, incident reporting, and management follow-up to support continuous improvement.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <Section eyebrow="About" title="A security partner built for reliability">
        <p className="max-w-3xl">
          Sentrax Security Service is focused on delivering corporate-level security operations with a
          simple standard: professional execution every shift. We design coverage that fits your site,
          your policies, and your risk profile—then we manage performance through communication and
          accountability.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <FeatureCard key={p.title} title={p.title} desc={p.desc} />
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="card p-6 md:p-8">
            <div className="text-base font-semibold">What we can support</div>
            <ul className="mt-3 space-y-2 text-sm text-steel">
              <li>• Corporate offices, commercial buildings, and mixed-use properties</li>
              <li>• Residential communities and HOA environments</li>
              <li>• Construction sites and temporary coverage</li>
              <li>• Special events and scheduled patrols</li>
            </ul>
          </div>

          <div className="card p-6 md:p-8">
            <div className="text-base font-semibold">Nationwide coverage</div>
            <p className="mt-2 text-sm text-steel">
              We support clients across the United States with scalable staffing options. If you
              manage multiple sites, we can standardize reporting and operational expectations across
              your portfolio.
            </p>
            <div className="mt-5">
              <Link href="/contact" className="btn btn-primary">
                Start a conversation
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
