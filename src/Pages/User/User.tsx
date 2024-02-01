import { useParams } from "react-router-dom"
import UserDetail from "../../Components/User/UserDetail"



function User() {
    const { login } = useParams()

    return (
        <UserDetail login={login??''} />
    )
}

export default User