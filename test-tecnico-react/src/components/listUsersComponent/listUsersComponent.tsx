import { listUsersComponentInterface } from "../../interfaces/listUsersComponentInterface"
import UserCardComponent from "../userCardComponent/userCardComponent"
import styles from "./listUsersComponent.module.scss"
const ListUsersComponent = ({users}:listUsersComponentInterface) => {
  return (
    <div className={`${styles.mainContainer} animate__animated  animate__fadeIn`}>
        {
          users?.map((user)=>{
            return <UserCardComponent key={user.id} user={user} />
          })
        }
    </div>
  )
}

export default ListUsersComponent