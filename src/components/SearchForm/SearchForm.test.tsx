import { render, screen } from "@testing-library/react";
import SearchForm from "./SearchForm";
import userEvent from "@testing-library/user-event";

describe("Given a SearchForm component", () => {
  const labelText = "User to search:";

  describe("When it is rendered", () => {
    test("Then it should show an input for the search text with label 'User to search: '", () => {
      render(<SearchForm />);

      const input = screen.getByLabelText(labelText);

      expect(input).toBeInTheDocument();
    });
  });

  describe("When the user types 'user1'", () => {
    test("Then the input should show 'user1'", async () => {
      const userToSearch = "user1";
      render(<SearchForm />);

      const input = screen.getByLabelText(labelText);
      await userEvent.type(input, userToSearch);

      expect(input).toHaveValue(userToSearch);
    });
  });
});
