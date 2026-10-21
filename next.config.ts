import type { NextConfig } from "next";
import { buildSecurityHeaders } from "./src/config/security-headers";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async headers() {
    const securityHeaders = buildSecurityHeaders({
      isDevelopment: process.env.NODE_ENV === "development",
    });
    return [{ source: "/:path*", headers: [...securityHeaders] }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
