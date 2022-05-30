import { useContext, useEffect } from "react";
import GoBackComponent from "../../components/goBackComponent/goBackComponent";
import UserComponent from "../../components/userComponent/userComponent";
import { ThemeContext } from "../../context/themecontext";
import useUser from "../../hooks/useUser";
import { IGetUserComponent } from "../../interfaces/getUserComponentInterface";
import styles from "./getUserComponent.module.scss";
const GetUserComponent = ({login}:IGetUserComponent) => {
  const {user,loading} = useUser(login);
  const { actualTheme } = useContext(ThemeContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div style={{background:actualTheme.secondPageBackgroundColor}} className={`${styles.mainContainer} page-main-container`}>
        {
          user?
          <UserComponent user={user}/>
          :
          null
        }
        <GoBackComponent/>
    </div>
  )
}

export default GetUserComponent