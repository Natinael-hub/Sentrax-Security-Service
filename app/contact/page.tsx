import Section from "@/components/Section";
import { site } from "@/app/metadata";

export default function ContactPage() {
  return (
    <div>
      <Section eyebrow="Contact" title="Request a quote or ask a question">
        <p className="max-w-3xl">
          For fastest response, send the basics: coverage type (unarmed/armed/mobile), location, schedule, and desired start date.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="card p-6 md:p-8">
            <div className="text-base font-semibold">Email</div>
            <p className="mt-2 text-sm text-steel">
              <a className="link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>

            <div className="mt-7 text-sm text-steel">
              <div className="font-semibold text-white">What to include</div>
              <ul className="mt-2 space-y-2">
                <li>• City / State (or multiple locations)</li>
                <li>• Coverage type: Unarmed / Armed / Mobile Patrol</li>
                <li>• Schedule: days, hours, 24/7, weekends, etc.</li>
                <li>• Start date and expected duration</li>
              </ul>
            </div>
          </div>

          <div className="card p-6 md:p-8">
            <div className="text-base font-semibold">Quick form</div>
            <p className="mt-2 text-sm text-steel">
              This form is ready for production once you connect an email provider (Resend/SendGrid) or Formspree.
              For now, it will open your email client with the details.
            </p>

            <form
              className="mt-6 space-y-4"
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
            >
              <div>
                <label className="text-xs text-fog">Full name</label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-xs text-fog">Company (optional)</label>
                <input
                  name="company"
                  className="mt-2 w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="text-xs text-fog">Email</label>
                <input
                  name="reply_to"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
                  placeholder="you@company.com"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs text-fog">Coverage type</label>
                  <select
                    name="coverage"
                    className="mt-2 w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
                    defaultValue="Unarmed"
                  >
                    <option>Unarmed</option>
                    <option>Armed</option>
                    <option>Mobile Patrol</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-fog">Start date</label>
                  <input
                    name="start_date"
                    className="mt-2 w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
                    placeholder="MM/DD/YYYY"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-fog">Location(s)</label>
                <input
                  name="locations"
                  required
                  className="mt-2 w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
                  placeholder="City, State (or multiple locations)"
                />
              </div>

              <div>
                <label className="text-xs text-fog">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-sm outline-none focus:border-white/20"
                  placeholder="Tell us the schedule, hours, and any special requirements."
                />
              </div>

              <button className="btn btn-primary w-full" type="submit">
                Send
              </button>

              <p className="text-xs text-fog">
                Want this form to submit without opening email? See README for the 2-minute Resend setup.
              </p>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
