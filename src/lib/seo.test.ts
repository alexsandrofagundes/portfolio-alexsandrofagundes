import { describe, expect, it } from "vitest";
import { buildRobots, buildSitemap } from "./seo";

describe("buildRobots", () => {
  it("bloqueia rastreamento fora da produção", () => {
    // Act
    const robots = buildRobots({ url: new URL("http://localhost:3000"), indexable: false });

    // Assert
    expect(robots).toEqual({ rules: { userAgent: "*", disallow: "/" } });
  });

  it("libera rastreamento e aponta o sitemap em produção", () => {
    // Act
    const robots = buildRobots({ url: new URL("https://alexfagundes.example"), indexable: true });

    // Assert
    expect(robots.rules).toEqual({ userAgent: "*", allow: "/" });
    expect(robots.sitemap).toBe("https://alexfagundes.example/sitemap.xml");
  });
});

describe("buildSitemap", () => {
  it("gera URLs absolutas apenas para rotas públicas", () => {
    // Act
    const sitemap = buildSitemap(new URL("https://alexfagundes.example"), ["/", "/sobre"]);

    // Assert
    expect(sitemap.map((entry) => entry.url)).toEqual([
      "https://alexfagundes.example/",
      "https://alexfagundes.example/sobre",
    ]);
  });
});
