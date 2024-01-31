import { useEffect } from "react"
import { useGetUser } from "../../Hooks/useGetUser"



function UserDetail({login}: {login:string}) {

    const { user, getUser } = useGetUser()

    useEffect(() => {
        getUser(login ?? '')
    }, [])

    return (
        <>
            {user ? <>
                <img src={user.avatar_url} alt={user.login} />
                <h1>{user.login}</h1>
                Web: {user.blog ? <a href={user.blog}> {user.blog}</a> : 'No tiene web'}
            </>
                : 'No se encuentra ningun usuario'}
        </>
    )
}

export default UserDetail