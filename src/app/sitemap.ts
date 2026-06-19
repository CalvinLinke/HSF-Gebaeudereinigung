import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const ROUTES = [
  { path: "/startseite", priority: 1, changeFrequency: "monthly" },
  { path: "/leistungen", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ueber-uns", priority: 0.7, changeFrequency: "yearly" },
  { path: "/karriere", priority: 0.7, changeFrequency: "monthly" },
  { path: "/kontakt", priority: 0.8, changeFrequency: "yearly" },
  { path: "/impressum", priority: 0.3, changeFrequency: "yearly" },
  { path: "/datenschutz", priority: 0.3, changeFrequency: "yearly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
