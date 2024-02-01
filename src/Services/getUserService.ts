import { UserDetail } from "../types"

const ENDPOINT = 'https://api.github.com/users'

export const getUserService = async (login: string): Promise<UserDetail> => {

    const response = await fetch(`${ENDPOINT}/${login}`)
    const data = await response.json()

    return {
        login: data.login,
        id: data.id,
        avatar_url: data.avatar_url,
        blog: data.blog,
        followers: data.followers,
    }
}