import { IUser } from "../../interfaces/userInterface"
import styles from "./userCardComponent.module.scss"
import { IUserCardComponent } from "../../interfaces/userCardComponent"
import { Link } from "react-router-dom"
const UserCardComponent = ({ user }: IUserCardComponent) => {
    return (
        <div className={`${styles.mainContainer}`}>
            <img src={user.avatar_url} alt="" />
                <div className={`${styles.infoContainer}`}>
                    <h3>{user.login}</h3>
                    <h4>{user.id}</h4>
                    <Link to={`user/${user.login}`}>See more</Link>
                </div>
        </div>
    )
}

export default UserCardComponent