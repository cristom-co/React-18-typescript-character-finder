import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import Modal from "../../src/components/Modal/Modal";

describe("Modal", () => {
  it("should show modal's content ", async () =>  {

    const text = "Hello world!"
    render(
      <Modal title="comments">
        <span>{text}</span>
      </Modal>
    );

    const button = screen.getByRole("button", { name: /comments/i });
    const user = userEvent.setup();

    await user.click(button)

    expect(screen.getByText(text)).toBeInTheDocument()
  });
});
