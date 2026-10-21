import { afterEach, describe, expect, it, vi } from "vitest";
import { staticRoutes } from "@/config/site";
import type { SiteUrlEnv } from "@/config/site-url";

async function loadRoutes(env: SiteUrlEnv) {
  vi.resetModules();
  vi.stubEnv("SITE_URL", env.SITE_URL ?? "");
  vi.stubEnv("VERCEL_ENV", env.VERCEL_ENV ?? "");
  vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", env.VERCEL_PROJECT_PRODUCTION_URL ?? "");
  const [{ default: robots }, { default: sitemap }] = await Promise.all([
    import("./robots"),
    import("./sitemap"),
  ]);
  return { robots, sitemap };
}

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("robots.txt", () => {
  it("bloqueia rastreamento sem endereço público, como no CI", async () => {
    // Arrange
    const { robots } = await loadRoutes({});

    // Assert
    expect(robots().rules).toEqual({ userAgent: "*", disallow: "/" });
  });

  it("libera rastreamento com SITE_URL configurada", async () => {
    // Arrange
    const { robots } = await loadRoutes({ SITE_URL: "https://alexfagundes.example" });

    // Assert
    expect(robots().sitemap).toBe("https://alexfagundes.example/sitemap.xml");
  });

  it("libera rastreamento na produção da Vercel sem configuração manual", async () => {
    // Arrange
    const { robots } = await loadRoutes({
      VERCEL_ENV: "production",
      VERCEL_PROJECT_PRODUCTION_URL: "portfolio-web.vercel.app",
    });

    // Assert
    expect(robots().sitemap).toBe("https://portfolio-web.vercel.app/sitemap.xml");
  });

  it("bloqueia rastreamento em um preview da Vercel", async () => {
    // Arrange
    const { robots } = await loadRoutes({
      VERCEL_ENV: "preview",
      VERCEL_PROJECT_PRODUCTION_URL: "portfolio-web.vercel.app",
    });

    // Assert
    expect(robots().rules).toEqual({ userAgent: "*", disallow: "/" });
  });
});

describe("sitemap.xml", () => {
  it("lista somente rotas públicas na origem configurada", async () => {
    // Arrange
    const { sitemap } = await loadRoutes({ SITE_URL: "https://alexfagundes.example" });

    // Act
    const result = sitemap();

    // Assert
    expect(result.map((entry) => new URL(entry.url).pathname)).toEqual(staticRoutes);
    expect(result.every((entry) => entry.url.startsWith("https://alexfagundes.example/"))).toBe(
      true,
    );
  });
});
