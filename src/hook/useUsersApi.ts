import axios from "axios";
import { ApiData } from "../types";
import { useCallback } from "react";

const useUsersApi = () => {
  const apiBaseUrl = import.meta.env.VITE_USER_SEARCH_API_URL;

  const getUsersByWordApi = useCallback(
    async (wordToSearch: string) => {
      try {
        const response = await axios.get<ApiData>(
          `${apiBaseUrl}?q=${wordToSearch}`,
        );
        const users = response.data.items;

        return users;
      } catch {
        throw new Error("Could not find the user");
      }
    },
    [apiBaseUrl],
  );

  return { getUsersByWordApi };
};

export default useUsersApi;
