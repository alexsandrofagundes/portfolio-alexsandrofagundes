import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { site } from "@/config/site";
import { profile } from "@/content/profile";
import SobrePage, { metadata } from "./page";

describe("SobrePage", () => {
  it("tem um único h1", () => {
    // Act
    render(<SobrePage />);

    // Assert
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("descreve práticas alinhadas à experiência profissional", () => {
    // Act
    render(<SobrePage />);

    // Assert
    expect(screen.getByText("Modernização de sistemas")).toBeInTheDocument();
    expect(screen.getByText(/SAP, Salesforce e sistemas mainframe/)).toBeInTheDocument();
  });

  it("cita as áreas de atuação do currículo", () => {
    // Act
    render(<SobrePage />);

    // Assert
    const section = screen.getByRole("region", { name: "Áreas de atuação" });
    expect(within(section).getByText(/mercado financeiro e de capitais/)).toBeInTheDocument();
  });

  it("publica dados estruturados de pessoa", () => {
    // Act
    const { container } = render(<SobrePage />);

    // Assert
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(JSON.parse(script?.textContent ?? "{}")).toMatchObject({
      "@type": "Person",
      name: site.name,
      sameAs: [site.links.linkedin, site.links.github],
      worksFor: { name: profile.experiences[0].company },
      alumniOf: { name: profile.education.institution },
    });
  });

  it("aponta para o LinkedIn e o GitHub", () => {
    // Act
    render(<SobrePage />);

    // Assert
    expect(screen.getByRole("link", { name: /^LinkedIn/ })).toHaveAttribute(
      "href",
      site.links.linkedin,
    );
    expect(screen.getByRole("link", { name: /^GitHub/ })).toHaveAttribute(
      "href",
      site.links.github,
    );
  });

  it("conta a trajetória inteira, da posição atual à experiência anterior", () => {
    // Act
    render(<SobrePage />);

    // Assert
    const section = screen.getByRole("region", { name: "Experiência" });
    const roles = within(section).getAllByRole("heading", { level: 3 });
    expect(roles).toHaveLength(profile.experiences.length);
    expect(roles.at(-1)).toHaveTextContent(profile.experiences.at(-1)?.company ?? "");
  });

  it("mostra a formação e as certificações do currículo", () => {
    // Act
    render(<SobrePage />);

    // Assert
    const section = screen.getByRole("region", { name: "Formação e certificações" });
    expect(within(section).getByText(profile.education.course)).toBeInTheDocument();
    for (const certification of profile.certifications) {
      expect(within(section).getByText(certification)).toBeInTheDocument();
    }
  });

  it("não publica endereço, telefone nem e-mail pessoal", () => {
    // Act
    const { container } = render(<SobrePage />);

    // Assert
    expect(container.textContent).not.toMatch(/@hotmail|@gmail|\(?\d{2}\)?\s?9\d{4}-?\d{4}|Rua /);
    expect(container.querySelector('a[href^="mailto:"], a[href^="tel:"]')).toBeNull();
  });

  it("usa /sobre como URL canônica", () => {
    // Assert
    expect(metadata.alternates?.canonical).toBe("/sobre");
  });
});
