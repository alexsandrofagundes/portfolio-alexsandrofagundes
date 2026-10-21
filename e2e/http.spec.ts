import { expect, test } from "./fixtures";
import { allPages } from "./routes";

test.describe("cabeçalhos de segurança", () => {
  test("a resposta HTML traz CSP, HSTS e demais proteções, sem X-Powered-By", async ({
    request,
  }) => {
    // Act
    const response = await request.get("/");
    const headers = response.headers();

    // Assert
    expect(headers["content-security-policy"]).toContain("default-src 'self'");
    expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
    expect(headers["content-security-policy"]).not.toContain("unsafe-eval");
    expect(headers["content-security-policy"]).toContain("connect-src 'self'");
    expect(headers["strict-transport-security"]).toContain("max-age=63072000");
    expect(headers["x-content-type-options"]).toBe("nosniff");
    expect(headers["x-frame-options"]).toBe("DENY");
    expect(headers["x-powered-by"]).toBeUndefined();
  });
});

test.describe("páginas inexistentes", () => {
  test.use({ allowedBrowserErrors: [/status of 404 \(Not Found\)/] });

  test("uma rota desconhecida responde 404 com a página do site", async ({ page }) => {
    // Act
    const response = await page.goto("/rota-que-nao-existe");

    // Assert
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("link", { name: "Ir para a página inicial" })).toBeVisible();
  });

  for (const path of ["/diario", "/projetos/careflow"]) {
    test(`${path} não expõe mais conteúdo do portfólio anterior`, async ({ page }) => {
      // Act
      const response = await page.goto(path);

      // Assert
      expect(response?.status()).toBe(404);
      await expect(page.getByRole("heading", { level: 1 })).toHaveText("Página não encontrada");
    });
  }
});

test.describe("SEO", () => {
  test("robots.txt bloqueia rastreamento fora da produção", async ({ request }) => {
    // Act
    const body = await (await request.get("/robots.txt")).text();

    // Assert
    expect(body).toContain("Disallow: /");
  });

  test("sitemap.xml lista as páginas públicas do portfólio", async ({ request }) => {
    // Act
    const response = await request.get("/sitemap.xml");
    const body = await response.text();

    // Assert
    expect(response.headers()["content-type"]).toContain("xml");
    expect(body).toContain("/projetos</loc>");
    expect(body).toContain("/sobre</loc>");
    expect(body).not.toContain("/diario");
    expect(body).not.toContain("careflow");
  });

  for (const path of allPages) {
    test(`${path} publica uma imagem Open Graph que existe`, async ({ page, request }) => {
      // Act
      await page.goto(path);
      const ogImage = await page.locator('meta[property="og:image"]').getAttribute("content");
      const image = await request.get(new URL(ogImage ?? "", page.url()).pathname);

      // Assert
      expect(ogImage).toBeTruthy();
      expect(image.status()).toBe(200);
      expect(image.headers()["content-type"]).toBe("image/png");
    });
  }

  test("Sobre publica dados estruturados da pessoa", async ({ page }) => {
    // Act
    await page.goto("/sobre");
    const json = await page.locator('script[type="application/ld+json"]').textContent();

    // Assert
    expect(JSON.parse(json ?? "{}")).toMatchObject({
      "@type": "Person",
      name: "Alex Sandro Fagundes",
    });
  });
});
