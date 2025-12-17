# Sentrax Security Service — Website (Next.js + Tailwind)

Production-ready corporate website for **Sentrax Security Service**.

## Quick start (local)

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Deploy to Vercel (recommended)

1. Push this folder to a GitHub repo.
2. In Vercel: **New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected)
4. Click **Deploy**.

## Domain

Target domain:
- sentrax-security-service is configured for metadata base: `https://www.sentraxsecurityservice.com`

In Vercel: Project → Settings → Domains → add `sentraxsecurityservice.com` and `www.sentraxsecurityservice.com`
and follow the DNS instructions.

## Contact form (production upgrade)

The contact form currently uses `mailto:` (works without any backend).
To make it submit directly (recommended), use one of these options:

**Option A: Resend (simple)**
- Create a Resend account and an API key
- Add env var in Vercel: `RESEND_API_KEY=...`
- Create an API route to send mail (stub can be added on request)

**Option B: Formspree**
- Create a Formspree form endpoint
- Replace the form action in `app/contact/page.tsx`

## Update content

- Home: `app/page.tsx`
- Services: `app/services/page.tsx`
- About: `app/about/page.tsx`
- Careers: `app/careers/page.tsx`
- Contact: `app/contact/page.tsx`

## Assets

- Logo: `public/logo.png`
- OpenGraph image: `public/og.png`
- Favicon: `public/favicon.png`
