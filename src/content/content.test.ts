import { describe, expect, it } from "vitest";
import { portfolioProjects } from "./projects";
import { stackGroups } from "./stack";

describe("conteúdo do portfólio", () => {
  it("não repete ids de grupos de competências", () => {
    // Arrange
    const ids = stackGroups.map((group) => group.id);

    // Assert
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("inclui tecnologias e áreas do currículo", () => {
    // Arrange
    const items = stackGroups.flatMap((group) => group.items);

    // Assert
    expect(items).toContain("C#");
    expect(items).toContain("Node.js");
    expect(items).toContain("TypeScript");
    expect(items).toContain("BFF");
    expect(items).toContain("Mini-FIX");
  });

  it("lista projetos distintos com links para os repositórios do GitHub", () => {
    // Arrange
    const names = portfolioProjects.map((project) => project.name);

    // Assert
    expect(new Set(names).size).toBe(names.length);
    for (const project of portfolioProjects) {
      expect(project.href).toMatch(/^https:\/\/github\.com\/alexsandrofagundes\//);
    }
  });
});
