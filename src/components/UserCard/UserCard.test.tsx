import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";
import { usersMock } from "../../mocks/usersMock";

describe("Given a UserCard component", () => {
  describe("When it is rendered with user1", () => {
    test("Then it should show 'user1' inside a heading", () => {
      const headingText = "user1";

      render(<UserCard user={usersMock[0]} />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
