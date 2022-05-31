import { IUserComponent } from "../../interfaces/userComponentInterface"
import styles from "./userComponent.module.scss"
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../context/themecontext";
const UserComponent = ({ user }: IUserComponent) => {
  const { actualTheme } = useContext(ThemeContext);
  return (
    <div style={{background:actualTheme.mainPageBackgroundColor}} className={`${styles.mainContainer} animate__animated animate__fadeInUp`}>
      <img src={user.avatar_url} alt={user.login} />
      <div className={`${styles.infoContainer}`}>
        <h1 style={{color:actualTheme.colorText}}>{user.login} </h1>
        {
          user.name?
          <h2 style={{color:actualTheme.colorText}}>
            ({user.name})
          </h2>
          :null
        }
        {
          user.location ?
            <div className={`${styles.iconsContainer}`}>
              <FaLocationArrow color={actualTheme.colorText} />
              <span style={{color:actualTheme.colorText}}> {user.location} </span>
            </div>
            : null
        }
        {
          user.bio ?
            <p style={{color:actualTheme.colorText}}>
              
              {
                `"${user.bio}"`
              }
              
            </p>
            :
            null
        }
        <h3 style={{color:actualTheme.colorText}}>Public repos: {user.public_repos}</h3>
        {
          user.email ?
            <div className={`${styles.iconsContainer}`}>
              <a target="_blank" href={`mailto:${user.email}`}>
                <AiOutlineMail color={actualTheme.colorText} />
              </a>
            </div>
            : null
        }
        <h3 style={{color:actualTheme.colorText}}>Followers: {user.followers}</h3>
        <h3 style={{color:actualTheme.colorText}}>Following: {user.following}</h3>
        <div className={`${styles.urlContainer}`}>
          <a style={{color:actualTheme.colorText}} target="_blank" href={user.html_url}>Go to Github profile</a>
        </div>
      </div>
    </div>
  )
}

export default UserComponent