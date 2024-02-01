import { UserList } from "../types"

const ENDPOINT = 'https://api.github.com/search/users'
const RESULTS_PER_PAGE = 10

export const searchUsersService = async (query: string): Promise<UserList[]> => {
    if (query === '') return []

    const response = await fetch(`${ENDPOINT}?q=${query}&per_page=${RESULTS_PER_PAGE}`)
    const data = await response.json()

    console.log(data.items)
    return data.items?.map((user: UserList) => ({
        login: user.login,
        id: user.id
    }))
}