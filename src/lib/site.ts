import type { Metadata } from "next";

// Domain für absolute URLs (OG, Canonical, Sitemap). Vor Live-Gang prüfen.
export const SITE_URL = "https://www.hsf-gebaeudereinigung.de";
export const SITE_NAME = "HSF-Gebäudereinigung GmbH";

// Generiertes Share-Vorschaubild (siehe app/opengraph-image.tsx).
export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} · Gebäudereinigung in Dresden`,
};

/**
 * Baut konsistente Seiten-Metadaten: Canonical-Link, Open-Graph- und
 * Twitter-Vorschau sowie optionales noindex. Texte bleiben unverändert,
 * dies betrifft nur die SEO-/Share-Ebene.
 */
export function buildMetadata({
  title,
  description,
  path,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
}): Metadata {
  const fullTitle = `${title} · ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: index ? undefined : { index: false, follow: true },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: path,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
