import type { Metadata } from "next";
import { ogSize, siteOgAlt } from "@/components/og-card";
import { site } from "@/config/site";

type PageMetadataInput = {
  title: string;
  description: string;
  /** Caminho canônico da página; a origem vem de `metadataBase` no layout raiz. */
  path: `/${string}`;
  /** Usa o título sem o sufixo do template (home). */
  absoluteTitle?: boolean;
};

const siteOgImage = { url: "/opengraph-image", ...ogSize, alt: siteOgAlt, type: "image/png" };

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataInput): Metadata {
  const openGraph = {
    title,
    description,
    url: path,
    siteName: site.name,
    locale: "pt_BR",
    type: "website" as const,
    images: [siteOgImage],
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph,
    twitter: { card: "summary_large_image", title, description, images: [siteOgImage] },
  };
}
