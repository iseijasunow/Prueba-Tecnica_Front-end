import { User } from "../../../types";

export interface UsersContextStructure {
  users: User[];
  loadUsers: (wordToSearch: string) => Promise<void>;
}
