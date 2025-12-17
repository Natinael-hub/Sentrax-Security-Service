import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Link from "next/link";

const services = [
  {
    title: "Unarmed Security",
    desc: "Uniformed officers for access control, patrols, visitor management, and a consistent professional presence.",
  },
  {
    title: "Armed Security",
    desc: "Licensed armed coverage for higher-risk environments, aligned to post orders, escalation protocols, and compliance.",
  },
  {
    title: "Mobile Patrol",
    desc: "Scheduled or randomized patrol routes, site checks, and documented reports for visibility and accountability.",
  },
  {
    title: "Access Control & Screening",
    desc: "Badge/credential checks, vendor verification, and entry screening designed around your facility policies.",
  },
  {
    title: "Incident Response & Reporting",
    desc: "Structured documentation, evidence capture, and timely updates to support internal stakeholders and property teams.",
  },
  {
    title: "Site-Specific Post Orders",
    desc: "We align staffing, procedures, and reporting expectations to your operational reality—site by site.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <Section eyebrow="Services" title="Security coverage designed for corporate environments">
        <p className="max-w-3xl">
          Sentrax provides scalable security services nationwide. Whether you need consistent
          coverage for a single site or multiple locations, we build an operational plan with clear
          expectations, measurable reporting, and professional presence.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <FeatureCard key={s.title} title={s.title} desc={s.desc} />
          ))}
        </div>

        <div className="mt-10 card p-6 md:p-8">
          <div className="text-base font-semibold">Need a quote?</div>
          <p className="mt-2 text-sm text-steel max-w-3xl">
            Share your location(s), coverage type (unarmed/armed/mobile), desired schedule, and start
            date. We’ll respond with questions and next steps.
          </p>
          <div className="mt-5">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
