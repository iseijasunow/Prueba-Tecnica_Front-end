import { User } from "../../../types";

export interface UsersContextStructure {
  users: User[];
  loadUsers: (wordToSearch: string) => Promise<void>;
  loadUsersFollowers: () => Promise<void>;
  usersFollowersList: (UserFollowersData | undefined)[];
}

export interface UserFollowersData {
  login: string;
  followers: number;
}
