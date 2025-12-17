import Link from "next/link";
import { site } from "@/app/metadata";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-slateink">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-base font-semibold">Sentrax Security Service</div>
          <p className="mt-2 text-sm text-steel">
            Corporate-level security coverage nationwide, built on professionalism, readiness, and
            accountability.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="link" href="/services">Services</Link></li>
            <li><Link className="link" href="/about">About</Link></li>
            <li><Link className="link" href="/careers">Careers</Link></li>
            <li><Link className="link" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Contact</div>
          <ul className="mt-3 space-y-2 text-sm text-steel">
            <li>
              Email:{" "}
              <a className="link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>Coverage: Nationwide (USA)</li>
          </ul>

          <div className="mt-5">
            <Link href="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container py-5 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-fog">
            © {new Date().getFullYear()} Sentrax Security Service. All rights reserved.
          </p>
          <p className="text-xs text-fog">
            <span className="text-steel">info@sentraxsecurity.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
