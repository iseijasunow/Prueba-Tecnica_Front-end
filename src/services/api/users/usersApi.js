import httpClient from "../httpClient"

export const getUsers = async (data) => {
    try {
        const res = await httpClient.get(`/search/users`, {params: {q: data}})
        return res.data 
    } catch (error) {
        return {error: error.response}
    }
}

export const getUser = async (data) => {
    try {
        const res = await httpClient.get(`/users/${data}`)
        return res.data
    } catch (error) {
        return {error: error.response}
    }
}

export const getUsersDetailed = async (data) => {
    const usersIndex = await getUsers(data)

    if (usersIndex.error) return {error: true}

    const usersIndexLimited = usersIndex.items.slice(0, 10)

    const promises = usersIndexLimited.map((i) => {
        return getUser(i.login)
    })

    const res = await Promise.all(promises)
    const error = res.filter((i) => {
        return !!i.error 
    }).length

    if (error) {
        return {error: true}
    }else{
        return res
    }
}

