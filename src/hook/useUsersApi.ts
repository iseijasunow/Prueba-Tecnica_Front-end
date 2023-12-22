import axios from "axios";
import { ApiData } from "../types";

const useUsersApi = () => {
  const apiBaseUrl = import.meta.env.VITE_USER_SEARCH_API_URL;

  const getUsersByWordApi = async (wordToSearch: string) => {
    try {
      const response = await axios.get<ApiData>(
        `${apiBaseUrl}?q=${wordToSearch}`,
      );
      const users = response.data.items;

      if (!users) {
        throw new Error("No users found");
      }

      return users;
    } catch {
      throw new Error("Could not find the user");
    }
  };

  return { getUsersByWordApi };
};

export default useUsersApi;
