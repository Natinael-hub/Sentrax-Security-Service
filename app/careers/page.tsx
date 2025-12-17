import Section from "@/components/Section";
import Link from "next/link";
import { site } from "@/app/metadata";

const roles = [
  {
    title: "Security Officer (Unarmed)",
    details:
      "Professional presence, patrols, access control, and incident reporting. Prior customer service experience is a plus.",
  },
  {
    title: "Security Officer (Armed)",
    details:
      "Licensed armed officer role for higher-risk environments. Strong de-escalation and report writing required.",
  },
  {
    title: "Mobile Patrol Officer",
    details:
      "Vehicle-based patrols, documented checks, and rapid response posture. Must be dependable and detail-oriented.",
  },
];

export default function CareersPage() {
  return (
    <div>
      <Section eyebrow="Careers" title="Join a team built on professionalism">
        <p className="max-w-3xl">
          We’re building a disciplined security team nationwide. If you take pride in showing up on
          time, communicating clearly, and keeping standards high—Sentrax may be a fit.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {roles.map((r) => (
            <div key={r.title} className="card p-6">
              <div className="text-base font-semibold">{r.title}</div>
              <p className="mt-2 text-sm text-steel leading-relaxed">{r.details}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 card p-6 md:p-8">
          <div className="text-base font-semibold">How to apply</div>
          <p className="mt-2 text-sm text-steel">
            Email your resume and availability, and include the role you’re applying for in the subject line.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${site.email}?subject=Sentrax%20Careers%20Application`} className="btn btn-primary">
              Apply via Email
            </a>
            <Link href="/contact" className="btn btn-ghost">
              Ask a question
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
