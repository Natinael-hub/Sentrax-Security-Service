import { MetadataRoute } from "next";
import { site } from "./metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const routes = ["", "/services", "/about", "/careers", "/contact"];
  const now = new Date();
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
