import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import ButtonsFilter from "../../src/components/ButtonsFilter";
import { butttonsFilterProps } from "../../src/types/all";

describe("ButtonsFilters component", () => {
  it("should render component", () => {
    const props: butttonsFilterProps = {
      currentValue: "option 2",
      action: vi.fn(),
      options: ["option 1", "option 2", ""],
      title: "title",
    };

    render(<ButtonsFilter {...props} />);
    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(3);
  });
});
