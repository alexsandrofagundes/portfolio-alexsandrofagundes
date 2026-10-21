import { describe, expect, it } from "vitest";
import { siteOgAlt } from "@/components/og-card";
import { site } from "@/config/site";
import { pageMetadata } from "./metadata";

describe("pageMetadata", () => {
  it("define título, descrição e URL canônica", () => {
    // Act
    const metadata = pageMetadata({ title: "Sobre", description: "Quem sou", path: "/sobre" });

    // Assert
    expect(metadata.title).toBe("Sobre");
    expect(metadata.description).toBe("Quem sou");
    expect(metadata.alternates?.canonical).toBe("/sobre");
  });

  it("publica os mesmos campos de Open Graph e Twitter em cada página", () => {
    // Act
    const metadata = pageMetadata({ title: "Stack", description: "Ferramentas", path: "/stack" });

    // Assert
    expect(metadata.openGraph).toMatchObject({
      type: "website",
      url: "/stack",
      siteName: site.name,
      locale: "pt_BR",
      title: "Stack",
      images: [{ url: "/opengraph-image", alt: siteOgAlt }],
    });
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      images: [{ url: "/opengraph-image", alt: siteOgAlt }],
    });
  });

  it("usa título absoluto quando pedido", () => {
    // Act
    const metadata = pageMetadata({
      title: "Alex Sandro Fagundes",
      description: "Home",
      path: "/",
      absoluteTitle: true,
    });

    // Assert
    expect(metadata.title).toEqual({ absolute: "Alex Sandro Fagundes" });
  });
});
