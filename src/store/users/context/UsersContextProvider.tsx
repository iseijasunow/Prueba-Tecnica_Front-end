import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import UsersContext from "./UsersContext";
import { UsersContextStructure } from "./types";
import { User } from "../../../types";
import useUsersApi from "../../../hook/useUsersApi";

const UsersContextProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState<User[]>([]);

  const { getUsersByWordApi } = useUsersApi();

  const loadUsers = useCallback(
    async (wordToSearch: string) => {
      const apiUsers = await getUsersByWordApi(wordToSearch);

      setUsers(apiUsers);
    },
    [getUsersByWordApi],
  );

  const usersContextValue = useMemo(
    (): UsersContextStructure => ({ loadUsers, users }),
    [loadUsers, users],
  );

  return (
    <UsersContext.Provider value={usersContextValue}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
