import { render, screen } from "@testing-library/react";
import ListCharacters from "../../src/components/ListCharacters";

import { MemoryRouter } from "react-router-dom";

describe("ListCharacters component", () => {
  const propsListCharacters = {
    result: {
      id: "2",
      name: "Rick",
      image: "string",
      status: "string",
      species: "Human",
      type: "string",
      gender: "string",
      starred: false,
    },
    addStarred: (id: string) => console.log(id),
  };

  it("should show component with its attributes", () => {
    const route = "/character/1";
    render(
      <MemoryRouter initialEntries={[route]}>
        <ListCharacters {...propsListCharacters} />
      </MemoryRouter>
    );

    expect(screen.getByText("Rick")).toBeInTheDocument()
    expect(screen.getByText("Human")).toBeInTheDocument()
});
});
