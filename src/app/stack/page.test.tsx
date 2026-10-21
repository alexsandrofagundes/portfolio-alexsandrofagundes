import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { stackGroups } from "@/content/stack";
import StackPage, { metadata } from "./page";

describe("StackPage", () => {
  it.each(stackGroups)("mostra o grupo $title com todos os itens", (group) => {
    // Act
    render(<StackPage />);

    // Assert
    const section = screen.getByRole("region", { name: group.title });
    expect(within(section).getAllByRole("listitem")).toHaveLength(group.items.length);
  });

  it("usa /stack como URL canônica", () => {
    // Assert
    expect(metadata.alternates?.canonical).toBe("/stack");
  });
});
