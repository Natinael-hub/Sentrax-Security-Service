import type { Metadata } from "next";
import "./globals.css";
import { site } from "./metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Sentrax Security Service provides nationwide security coverage including unarmed guards, armed guards, and mobile patrol services. Request a quote today.",
  openGraph: {
    type: "website",
    url: `https://${site.domain}`,
    title: site.name,
    description:
      "Nationwide security coverage including unarmed guards, armed guards, and mobile patrol services.",
    siteName: site.name,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sentrax Security Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description:
      "Nationwide security coverage including unarmed guards, armed guards, and mobile patrol services.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
