import { useContext } from "react"
import { ThemeContext } from "../../context/themecontext"
import { IformComponent } from "../../interfaces/formComponentInterface"
import styles from "./formComponent.module.scss"
const FormComponent = ({handleForm,setUsername,username}:IformComponent) => {
  const {actualTheme} = useContext(ThemeContext)
  return (
    <div className={`${styles.mainContainer}`}>
        <form>
            <input style={{color:actualTheme.colorText}} value={username} onChange={(e)=>setUsername(e.target.value)}  type="text" placeholder="Enter a User" />
            <button onClick={(e)=>handleForm(e)}>Search</button>
        </form>
    </div>
  )
}

export default FormComponent