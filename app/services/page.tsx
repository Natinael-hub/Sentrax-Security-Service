import Link from "next/link";

export const metadata = {
  title: "Security Services | Sentrax Security Service",
  description:
    "Sentrax Security Service provides nationwide unarmed, armed, and mobile patrol security solutions tailored for corporate, commercial, and high-risk environments.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      {/* Header */}
      <header className="mb-16 max-w-3xl">
        <h1 className="text-5xl font-semibold tracking-tight">
          Our Security Services
        </h1>
        <p className="mt-6 text-lg opacity-80">
          Sentrax Security Service delivers professional, reliable, and scalable
          security solutions nationwide. Our services are designed to meet the
          needs of commercial properties, corporate environments, and
          high-responsibility sites.
        </p>
      </header>

      {/* Services Grid */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          title="Unarmed Security Services"
          description="Highly trained, uniformed officers providing access control, patrols, incident reporting, and a professional on-site presence."
          items={[
            "Access control & front desk security",
            "Foot patrols & visibility deterrence",
            "Incident documentation & reporting",
            "Customer-service focused officers",
          ]}
        />

        <ServiceCard
          title="Armed Security Services"
          description="Licensed armed officers for higher-risk environments requiring enhanced protection and rapid response capabilities."
          items={[
            "Licensed & qualified armed officers",
            "Risk-based post assignments",
            "Coordination with local authorities",
            "Strict compliance & accountability",
          ]}
        />

        <ServiceCard
          title="Mobile Patrol Services"
          description="Marked patrol units providing randomized patrols, property checks, and rapid response across multiple locations."
          items={[
            "Randomized patrol scheduling",
            "Alarm response & lock checks",
            "Visible deterrence with patrol vehicles",
            "Detailed patrol activity reports",
          ]}
        />

        <ServiceCard
          title="Commercial & Corporate Security"
          description="Security solutions tailored for office buildings, corporate campuses, retail centers, and mixed-use properties."
          items={[
            "Corporate office security",
            "Retail & commercial properties",
            "Lobby & concierge services",
            "After-hours & weekend coverage",
          ]}
        />

        <ServiceCard
          title="Construction Site Security"
          description="Protect construction projects from theft, vandalism, and unauthorized access during all phases of development."
          items={[
            "24/7 site monitoring",
            "Material & equipment protection",
            "Perimeter control",
            "Incident prevention & reporting",
          ]}
        />

        <ServiceCard
          title="Special Assignments"
          description="Custom security solutions for events, short-term assignments, and unique client requirements."
          items={[
            "Event security & crowd management",
            "Temporary & emergency coverage",
            "Custom post instructions",
            "Flexible deployment options",
          ]}
        />
      </section>

      {/* CTA */}
      <section className="mt-20 rounded-2xl border border-white/10 bg-white/5 p-10 text-center">
        <h2 className="text-3xl font-semibold">
          Need a Security Solution Tailored to Your Site?
        </h2>
        <p className="mt-4 opacity-80 max-w-2xl mx-auto">
          Our team will work with you to design a security plan that aligns with
          your operational needs, risk profile, and budget.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black hover:opacity-90"
          >
            Request a Quote
          </Link>
          <Link
            href="/about"
            className="rounded-xl border border-white/20 px-6 py-3 text-sm hover:bg-white/10"
          >
            Learn About Sentrax
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ---------- Helper Component ---------- */

function ServiceCard({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm opacity-80">{description}</p>
      <ul className="mt-5 space-y-2 text-sm opacity-85">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
