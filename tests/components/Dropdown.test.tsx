import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import Dropdown from "../../src/components/Dropdown";

describe("Dropdown component", () => {
  it("should render Dropdown component", () => {
    render(<Dropdown />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should show the dropdown content when it's clicked", async () => {
    render(<Dropdown />);

    const user = userEvent.setup();
    const button = screen.getByRole('button')

    await user.click(button)

    expect(screen.getByTestId("boxDropdown")).toBeInTheDocument

  });
});
