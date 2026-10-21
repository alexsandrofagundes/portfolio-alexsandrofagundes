import type { MetadataRoute } from "next";
import type { SiteUrl } from "@/config/site-url";

/**
 * Fora da produção (previews, CI, máquina local), o site pede para não ser rastreado:
 * melhor não indexar do que indexar cópias ou URLs canônicas apontando para localhost.
 */
export function buildRobots({ url, indexable }: SiteUrl): MetadataRoute.Robots {
  if (!indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: new URL("/sitemap.xml", url).href,
  };
}

export function buildSitemap(base: URL, routes: readonly string[]): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: new URL(route, base).href }));
}
