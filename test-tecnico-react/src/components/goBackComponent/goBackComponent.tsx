import { Link } from "react-router-dom"
import { AiOutlineRollback } from "react-icons/ai";
import styles from "./goBackComponent.module.scss"
const GoBackComponent = () => {
  return (
    <div className={`${styles.mainContainer}`}>
        <Link to={`/`}>
            <AiOutlineRollback color="#fff" fontSize={20}/>
        </Link>
    </div>
  )
}

export default GoBackComponent