import { renderHook } from "@testing-library/react";
import { PropsWithChildren } from "react";
import useUsersApi from "./useUsersApi";
import UsersContextProvider from "../store/users/context/UsersContextProvider";
import { usersMock } from "../mocks/usersMock";
import { server } from "../mocks/server";
import { errorHandlers } from "../mocks/handlers";

describe("Given a useUsersApi custom hook", () => {
  describe("When calling a getUsersByWordApi", () => {
    const wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
      return <UsersContextProvider>{children}</UsersContextProvider>;
    };

    const wordToSearch = "user1";

    test("Then you will receive a list of users", async () => {
      const { result } = renderHook(() => useUsersApi(), { wrapper });
      const { getUsersByWordApi } = result.current;

      const users = await getUsersByWordApi(wordToSearch);

      expect(users).toStrictEqual(usersMock);
    });

    test("Then you will get an error 'Could not find the user'", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedError = new Error("Could not find the user");
      const { result } = renderHook(() => useUsersApi(), { wrapper });
      const { getUsersByWordApi } = result.current;

      const error = getUsersByWordApi(wordToSearch);

      expect(error).rejects.toThrowError(expectedError);
    });
  });
});
