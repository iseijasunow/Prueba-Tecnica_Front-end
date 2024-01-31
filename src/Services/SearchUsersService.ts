import { User } from "../Pages/User/UserInterface"

const ENDPOINT = 'https://api.github.com/search/users'
const RESULTS_PER_PAGE = 10

export const searchUsersService = async (query: string): Promise<User[]> => {
    if (query === '') return []

    const response = await fetch(`${ENDPOINT}?q=${query}&per_page=${RESULTS_PER_PAGE}`)
    const data = await response.json()

    return data.items?.map((user: User) => ({
        login: user.login,
        id: user.id,
        avatar_url: user.avatar_url,
        blog: user.blog,
    }))
}