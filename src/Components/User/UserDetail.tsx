import { useEffect } from "react"
import { useGetUser } from "../../Hooks/useGetUser"
import './UserDetail.scss'


function UserDetail({login}: {login:string}) {

    const { user, getUser } = useGetUser()

    useEffect(() => {
        getUser(login ?? '')
    }, [])

    return (
        <>
            {user ? <div className="user-details">
                <header>
                    <img src={user.avatar_url} alt={user.login} />
                    <h1>{user.login}</h1>
                </header>
                
                <span>Web: {user.blog ? <a href={user.blog}> {user.blog}</a> : 'No tiene web'}</span>
                <span>Followers: {user.followers ?? 0}</span>
            </div>
                : 'No se encuentra ningun usuario'}
        </>
    )
}

export default UserDetail