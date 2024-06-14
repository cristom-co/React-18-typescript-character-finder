import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import DropdownButton from "../../src/components/Search/DropdownButton";
import { butttonsFilterProps } from "../../src/types/all";

describe("DropdownButton component", () => {
  it("should render component", () => {
    const props: butttonsFilterProps = {
      currentValue: "option 2",
      action: vi.fn(),
      options: ["option 1", "option 2", ""],
      title: "title",
    };

    render(<DropdownButton {...props} />);
    const buttons = screen.getAllByRole("button");

    expect(buttons.length).toBe(3);
  });
});
