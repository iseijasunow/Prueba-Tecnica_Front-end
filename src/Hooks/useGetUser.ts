import { useState } from "react";
import { getUserService } from "../Services/getUserService";
import { UserDetail } from "../types";

export function useGetUser () {
    const [user, setUser] = useState<UserDetail>()

    const getUser = async (query: string) => {
        getUserService(query).then(user => setUser(user))
    }

    return { user, getUser }
}