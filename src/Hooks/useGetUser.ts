import { useState } from "react";
import { User } from "../Pages/User/UserInterface";
import { getUserService } from "../Services/getUserService";

export function useGetUser () {
    const [user, setUser] = useState<User>()

    const getUser = async (query: string) => {
        getUserService(query).then(user => setUser(user))
    }

    return { user, getUser }
}