import { User } from "../Pages/User/UserInterface"

const ENDPOINT = 'https://api.github.com/users'

export const getUserService = async (login: string): Promise<User> => {

    const response = await fetch(`${ENDPOINT}/${login}`)
    const data = await response.json()

    return {
        login: data.login,
        id: data.id,
        avatar_url: data.avatar_url,
        blog: data.blog,
    }
}