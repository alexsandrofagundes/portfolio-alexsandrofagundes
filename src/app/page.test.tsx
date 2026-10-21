import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { site } from "@/config/site";
import { portfolioProjects } from "@/content/projects";
import { careerYears, currentExperience, profile } from "@/content/profile";
import { stackGroups } from "@/content/stack";
import Home, { metadata } from "./page";

describe("Home", () => {
  it("apresenta nome, papel e resumo profissional", () => {
    // Act
    render(<Home />);

    // Assert
    expect(screen.getByRole("heading", { level: 1, name: site.name })).toBeInTheDocument();
    expect(screen.getByText(site.role)).toBeInTheDocument();
    expect(screen.getByText(/C#.*\.NET.*Node\.js.*TypeScript/)).toBeInTheDocument();
  });

  it("mostra as experiências mais recentes e um link para a trajetória completa", () => {
    // Act
    render(<Home />);

    // Assert
    const section = screen.getByRole("region", { name: "Trajetória" });
    const roles = within(section).getAllByRole("heading", { level: 3 });
    expect(roles).toHaveLength(4);
    expect(roles[0]).toHaveTextContent(profile.experiences[0].company);
    expect(
      within(section).getByRole("link", { name: "Ver a trajetória completa" }),
    ).toHaveAttribute("href", "/sobre#experiencia");
  });

  it("resume as competências por grupo da stack", () => {
    // Act
    render(<Home />);

    // Assert
    const section = screen.getByRole("region", { name: "Competências" });
    for (const group of stackGroups) {
      const list = within(section).getByRole("list", { name: group.title });
      expect(within(list).getAllByRole("listitem")).toHaveLength(group.items.length);
    }
  });

  it("leva para a trajetória, projetos, stack e LinkedIn", () => {
    // Act
    render(<Home />);

    // Assert
    expect(screen.getByRole("link", { name: "Conheça minha trajetória" })).toHaveAttribute(
      "href",
      "/sobre",
    );
    expect(screen.getByRole("link", { name: "Ver todos os projetos" })).toHaveAttribute(
      "href",
      "/projetos",
    );
    expect(screen.getByRole("link", { name: "Ver tecnologias e domínios" })).toHaveAttribute(
      "href",
      "/stack",
    );
    expect(screen.getByRole("link", { name: "Vamos conversar" })).toHaveAttribute(
      "href",
      site.links.linkedin,
    );
  });

  it("apresenta projetos públicos do GitHub", () => {
    // Act
    render(<Home />);

    // Assert
    const section = screen.getByRole("region", { name: "Projetos públicos" });
    for (const project of portfolioProjects.slice(0, 2)) {
      expect(within(section).getByRole("heading", { name: project.name })).toBeVisible();
    }
  });

  it("lista as áreas de atuação", () => {
    // Act
    render(<Home />);

    // Assert
    const list = screen.getByRole("list", { name: /Experiência em diferentes domínios/ });
    expect(within(list).getAllByRole("listitem")).toHaveLength(site.sectors.length);
  });

  it("deriva os indicadores da trajetória profissional", () => {
    // Act
    render(<Home />);

    // Assert
    expect(screen.getByText(`${Math.floor(careerYears() / 10) * 10}+`)).toBeInTheDocument();
    expect(screen.getByText(String(site.sectors.length))).toBeInTheDocument();
    expect(screen.getByText(String(profile.experiences.length))).toBeInTheDocument();
    expect(screen.getByText(String(portfolioProjects.length))).toBeInTheDocument();
  });

  it("mostra a posição atual informada no currículo", () => {
    // Act
    render(<Home />);

    // Assert
    expect(
      screen.getByText(new RegExp(`^Atualmente: .* na ${currentExperience?.company}`)),
    ).toBeInTheDocument();
  });

  it("usa a home como URL canônica", () => {
    // Assert
    expect(metadata.alternates?.canonical).toBe("/");
  });
});
