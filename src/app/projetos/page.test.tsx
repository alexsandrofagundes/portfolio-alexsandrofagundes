import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { portfolioProjects } from "@/content/projects";
import ProjetosPage, { metadata } from "./page";

describe("ProjetosPage", () => {
  it("lista os projetos públicos e aponta para seus repositórios", () => {
    // Act
    render(<ProjetosPage />);

    // Assert
    for (const project of portfolioProjects) {
      expect(screen.getByRole("heading", { name: project.name })).toBeInTheDocument();
    }
    expect(
      screen
        .getAllByRole("link", { name: "Explorar repositório" })
        .map((link) => link.getAttribute("href")),
    ).toEqual(portfolioProjects.map((project) => project.href));
  });

  it("exibe os projetos Chanfana e WorkFlows com os links informados", () => {
    // Act
    render(<ProjetosPage />);

    // Assert
    expect(screen.queryByRole("heading", { name: "DomBosco" })).not.toBeInTheDocument();
    expect(
      screen
        .getAllByRole("link", { name: "Acessar projeto" })
        .map((link) => link.getAttribute("href")),
    ).toEqual([
      "https://chanfana-openapi-template.clubemobile.workers.dev/",
      "https://chanfana-openapi-template.clubemobile.workers.dev/",
    ]);
    expect(
      screen
        .getAllByRole("link", { name: "Explorar repositório" })
        .map((link) => link.getAttribute("href")),
    ).toContain("https://github.com/alexsandrofagundes/chanfana-openapi-template");
    expect(
      screen
        .getAllByRole("link", { name: "Explorar repositório" })
        .map((link) => link.getAttribute("href")),
    ).toContain("https://github.com/alexsandrofagundes/workflows-starter-template");
  });

  it("distingue projetos públicos da experiência em sistemas corporativos", () => {
    // Act
    render(<ProjetosPage />);

    // Assert
    expect(screen.getByRole("note")).toHaveTextContent(/sistemas corporativos/);
  });

  it("usa /projetos como URL canônica", () => {
    // Assert
    expect(metadata.alternates?.canonical).toBe("/projetos");
  });
});
