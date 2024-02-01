import { useState } from "react";
import { getUserService } from "../Services/getUserService";

export function useGetUsersFollowers () {
    const [followers, setFollowers] = useState<{login:string, followers: number}[]>()

    const getFollowers = async (usernames: string[]) => {
        setFollowers([])

        const newFollowers = await Promise.all(
            usernames.map(async (username) => {
                const user = await getUserService(username);
                return { login: user.login, followers: user.followers };
            })
        );

        setFollowers(newFollowers);
    };

    return { followers, getFollowers }
}