import { render, screen } from "@testing-library/react";
import SearchPage from "./SearchPage";

describe("Given a SearchPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the heading 'User Search'", () => {
      const headingText = "User Search";

      render(<SearchPage></SearchPage>);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
