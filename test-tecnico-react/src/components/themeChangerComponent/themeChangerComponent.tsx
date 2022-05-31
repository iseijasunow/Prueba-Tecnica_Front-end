import { useContext } from "react";
import { ThemeContext } from "../../context/themecontext";
import { BsSunFill,BsFillMoonFill } from "react-icons/bs";
import styles from "./themeChangerComponent.module.scss"
const ThemeChangerComponent = () => {
const { actualTheme, setLgTheme } = useContext(ThemeContext);
const handleThemeChange = () => {
      setLgTheme((prev: boolean) => !prev)
    }
  return (
        <button className={`${styles.mainContainer}`} onClick={()=>handleThemeChange()}>
            {
                actualTheme.style==="dark"?
                <BsSunFill color="#fff"/>
                : 
                <BsFillMoonFill color="#fff"/>
            }
            
        </button>
  )
}

export default ThemeChangerComponent