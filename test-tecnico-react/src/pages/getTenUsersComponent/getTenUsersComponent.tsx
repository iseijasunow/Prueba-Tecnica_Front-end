import { useContext } from "react";
import ChartComponent from "../../components/chartComponent/chartComponent";
import FormComponent from "../../components/formComponent/formComponent"
import ListUsersComponent from "../../components/listUsersComponent/listUsersComponent";
import { ThemeContext } from "../../context/themecontext";
import useTenUsers from "../../hooks/useTenUsers"
import styles from "./getTenUsersComponent.module.scss"
const GetTenUsersComponent = () => {
  const {handleForm,setUsername,username,users,usersFollowers} = useTenUsers();
  const {actualTheme} = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: actualTheme.mainPageBackgroundColor }}  className={`${styles.mainContainer} page-main-container`}>
        <h1 style={{color:actualTheme.colorText}}>GitHub Users</h1>
       <FormComponent handleForm={handleForm} setUsername={setUsername} username={username}/>
       <ListUsersComponent users={users} />
       {
         usersFollowers?
         <ChartComponent userFollowersData={usersFollowers} />:
         null
       }
    </div>
  )
}

export default GetTenUsersComponent