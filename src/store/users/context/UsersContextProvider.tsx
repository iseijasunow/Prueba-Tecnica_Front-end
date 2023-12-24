import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import UsersContext from "./UsersContext";
import { UserFollowersData, UsersContextStructure } from "./types";
import { User } from "../../../types";
import useUsersApi from "../../../hook/useUsersApi";

const UsersContextProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState<User[]>([]);
  const [usersFollowersList, setUsersFollowersList] = useState<
    (UserFollowersData | undefined)[]
  >([]);

  const { getUsersByWordApi, getUserByLoginApi } = useUsersApi();

  const loadUsers = useCallback(
    async (wordToSearch: string) => {
      if (wordToSearch === "") {
        setUsers([]);

        return;
      }

      const apiUsers = await getUsersByWordApi(wordToSearch);

      setUsers(apiUsers);
    },
    [getUsersByWordApi],
  );

  const loadUsersFollowers = useCallback(async () => {
    const usersFollowersApi = await Promise.all(
      users.map(async (user, index) => {
        if (index < 10) {
          const userApi = await getUserByLoginApi(user.login);

          if (!userApi) {
            return { login: "", followers: 0 };
          }

          return { login: userApi.login, followers: userApi.followers };
        }
      }),
    );

    setUsersFollowersList(usersFollowersApi);
  }, [getUserByLoginApi, users]);

  const usersContextValue = useMemo(
    (): UsersContextStructure => ({
      loadUsers,
      loadUsersFollowers,
      users,
      usersFollowersList,
    }),
    [loadUsers, loadUsersFollowers, users, usersFollowersList],
  );

  return (
    <UsersContext.Provider value={usersContextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
