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
