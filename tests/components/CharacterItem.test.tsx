import { screen } from "@testing-library/react";
import { vi } from "vitest";

import renderWithRouter from "../renderWithRouter";
import { characterData } from "../mockData";
import CharacterItem from "../../src/components/Character/CharacterItem";

describe("CharacterItem component", () => {
  const propsListCharacters = {
    result: characterData,
    addStarred: vi.fn(),
  };

  it("should show the details of the character and painted background", () => {
    renderWithRouter(<CharacterItem {...propsListCharacters} />, {
      route: "/character/1",
    });

    expect(screen.getByText("Rick")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
    expect(screen.getByRole("listitem")).toHaveClass("bg-primary100");
  });

  it("should show unselected items with transparent background  ", () => {
    renderWithRouter(<CharacterItem {...propsListCharacters} />, {
      route: "/character/2",
    });

    expect(screen.getByRole("listitem")).toHaveClass("bg-transparent");
  });

  it('should cut off the name when its greater than 16 characters', () => {
    const propsModified = {...propsListCharacters, result: {
      ...propsListCharacters.result,
      name: "a".repeat(17)
    }}
    renderWithRouter(<CharacterItem {...propsModified} />, {
      route: "/character/1",
    });

    expect(screen.getByText("a".repeat(15)+ "..."))   
  })
});
