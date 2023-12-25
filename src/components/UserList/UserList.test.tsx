import { render, screen } from "@testing-library/react";
import UsersContext from "../../store/users/context/UsersContext";
import UserList from "./UserList";
import { usersMock } from "../../mocks/usersMock";
import { UsersContextStructure } from "../../store/users/context/types";

describe("Given a VideogamesList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of games", async () => {
      const textToShow = "user1";
      const contextValue: UsersContextStructure = {
        loadUsers: vi.fn(),
        users: [usersMock[0]],
      };

      render(
        <UsersContext.Provider value={contextValue}>
          <UserList />
        </UsersContext.Provider>,
      );

      const heading = screen.getByRole("heading", { name: textToShow });

      expect(heading).toBeInTheDocument();
    });
  });
});
