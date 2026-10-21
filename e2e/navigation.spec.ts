import { expect, test } from "./fixtures";

test("o link de pular conteúdo é o primeiro foco e leva ao conteúdo principal", async ({
  page,
  browserName,
}, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "Navegação por teclado é testada no desktop.");
  test.skip(browserName !== "chromium");

  // Arrange
  await page.goto("/");

  // Act
  await page.keyboard.press("Tab");
  const skipLink = page.getByRole("link", { name: "Pular para o conteúdo" });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeVisible();
  await page.keyboard.press("Enter");

  // Assert
  await expect(page.locator("main")).toBeFocused();
});

test("a navegação marca a seção atual", async ({ page }) => {
  // Arrange
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Principal" });

  // Act
  await nav.getByRole("link", { name: "Projetos" }).click();

  // Assert
  await expect(page).toHaveURL(/\/projetos$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Projetos");
  await expect(nav.getByRole("link", { name: "Projetos" })).toHaveAttribute("aria-current", "page");
  await expect(nav.getByRole("link", { name: "Sobre" })).not.toHaveAttribute("aria-current");
});

test("a home leva à trajetória completa", async ({ page }) => {
  // Arrange
  await page.goto("/");

  // Act
  await page.getByRole("link", { name: "Ver a trajetória completa" }).click();

  // Assert
  await expect(page).toHaveURL(/\/sobre#experiencia$/);
  await expect(page.getByRole("heading", { level: 2, name: "Experiência" })).toBeInViewport();
});

test("links externos abrem em nova aba sem window.opener", async ({ page }) => {
  // Arrange
  await page.goto("/sobre");

  // Act
  const external = page.locator('a[target="_blank"]');

  // Assert
  expect(await external.count()).toBeGreaterThan(0);
  for (const link of await external.all()) {
    await expect(link).toHaveAttribute("rel", "noopener noreferrer");
    await expect(link).toHaveAttribute("href", /^https:\/\//);
  }
});
