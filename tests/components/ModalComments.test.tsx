import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import ModalComments from "../../src/components/ModalComments";

describe("ModalComments", () => {
  it("should render modalComment component", async () =>  {

    const text = "Hello world!"
    render(
      <ModalComments>
        <span>{text}</span>
      </ModalComments>
    );

    const button = screen.getByRole("button", { name: /comments/i });
    const user = userEvent.setup();

    await user.click(button)

    expect(screen.getByText(text)).toBeInTheDocument()
  });
});
