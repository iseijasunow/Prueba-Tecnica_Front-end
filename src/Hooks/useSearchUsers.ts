import { useState } from "react";
import { User } from "../Pages/User/UserInterface";
import { searchUsersService } from "../Services/SearchUsersService";

export function useSearchUsers () {
    const [users, setUsers] = useState<User[]>()

    const searchUsers = async (query: string) => {
        searchUsersService(query).then(users => setUsers(users))
    }

    return { users, searchUsers }
}