import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import SearchDropdown from "../../src/components/Search/SearchDropdown";

describe("SearchDropdown component", () => {
  it("should render Dropdown component", () => {
    render(<SearchDropdown />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should show the dropdown content when it's clicked", async () => {
    render(<SearchDropdown />);

    const user = userEvent.setup();
    const button = screen.getByRole('button')

    await user.click(button)

    expect(screen.getByTestId("boxDropdown")).toBeInTheDocument

  });
});
