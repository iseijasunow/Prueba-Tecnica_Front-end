import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGetUser } from "../../Hooks/useGetUser"



function User() {
    const { login } = useParams()

    const { user, getUser } = useGetUser()

    useEffect(() => {
        getUser(login ?? '')
    }, [])

    return (
        <div>
            {user ? <>
                <img src={user.avatar_url} alt={user.login} />
                <h1>{user.login}</h1>
                Web: {user.blog ? <a href={user.blog}> {user.blog}</a> : 'No tiene web'}
            </>
                : 'No se encuentra ningun usuario'}

        </div>
    )
}

export default User