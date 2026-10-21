import type { MetadataRoute } from "next";
import { staticRoutes } from "@/config/site";
import { siteUrl } from "@/config/site-url";
import { buildSitemap } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return buildSitemap(siteUrl.url, staticRoutes);
}
