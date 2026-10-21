import { describe, expect, it } from "vitest";
import {
  careerYears,
  currentExperience,
  formatDuration,
  formatPeriod,
  formatYearMonth,
  monthsBetween,
  profile,
  type YearMonth,
} from "./profile";

describe("monthsBetween", () => {
  it.each([
    ["2023-10", "2023-10", 1],
    ["2022-12", "2023-10", 11],
    ["2020-02", "2021-06", 17],
    ["2011-06", "2012-01", 8],
  ] as const)("conta de %s a %s como %i meses, incluindo os dois", (start, end, months) => {
    // Assert
    expect(monthsBetween(start, end)).toBe(months);
  });
});

describe("formatDuration", () => {
  it.each([
    [1, "1 mês"],
    [4, "4 meses"],
    [12, "1 ano"],
    [13, "1 ano e 1 mês"],
    [17, "1 ano e 5 meses"],
  ])("escreve %i meses como '%s'", (months, text) => {
    // Assert
    expect(formatDuration(months)).toBe(text);
  });
});

describe("formatPeriod", () => {
  it("mostra o período informado e a duração para um cargo encerrado", () => {
    // Assert
    expect(formatPeriod({ start: "2020-02", end: "2021-06" })).toBe(
      "fev 2020 – jun 2021 · 1 ano e 5 meses",
    );
  });

  it("preserva intervalos informados apenas por ano", () => {
    // Assert
    expect(formatPeriod({ start: "1994-01", end: "2009-05", periodLabel: "1994–2009" })).toBe(
      "1994–2009",
    );
  });

  it("mostra 'atual' no cargo em andamento", () => {
    // Assert
    expect(formatPeriod({ start: "2023-10" })).toBe("out 2023 – atual");
  });

  it("formata o mês abreviado em português", () => {
    // Assert
    expect(formatYearMonth("2023-10")).toBe("out 2023");
    expect(formatYearMonth("2021-12")).toBe("dez 2021");
  });
});

describe("profile", () => {
  it("lista as experiências da mais recente para a mais antiga", () => {
    // Act
    const starts = profile.experiences.map((experience) => experience.start);

    // Assert
    expect(starts).toEqual([...starts].sort().reverse());
  });

  it("tem uma única experiência atual, a primeira da lista", () => {
    // Act
    const current = profile.experiences.filter((experience) => !("end" in experience));

    // Assert
    expect(current).toHaveLength(1);
    expect(currentExperience).toBe(profile.experiences[0]);
  });

  it("nunca termina uma experiência antes de começar", () => {
    // Assert
    for (const experience of profile.experiences) {
      const end: YearMonth | undefined = "end" in experience ? experience.end : undefined;
      if (end) {
        expect(monthsBetween(experience.start, end)).toBeGreaterThan(0);
      }
    }
  });

  it("conta os anos de experiência desde o início da carreira informado", () => {
    // Assert
    expect(profile.careerStart).toBe(profile.experiences.at(-1)?.start);
    expect(careerYears()).toBe(32);
  });
});
