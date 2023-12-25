import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useUsersApi from "../../hook/useUsersApi";
import paths from "../../paths/paths";
import { User } from "../../types";
import "./DetailPage.scss";

const DetailPage = () => {
  const [user, setUser] = useState<User>();
  const { login } = useParams();
  const { getUserByLoginApi } = useUsersApi();

  useEffect(() => {
    if (login) {
      (async () => {
        const userApi = await getUserByLoginApi(login);

        setUser(userApi);
      })();
    }
  }, [getUserByLoginApi, login]);

  return (
    <>
      <NavLink to={paths.search} className="back">
        <FontAwesomeIcon icon={faArrowLeft} color="#6f6f8b" size="2x" />
      </NavLink>
      {user && (
        <article className="user">
          <h1 className="user__name">{user.login}</h1>
          <div>
            <img
              src={user.avatar_url}
              alt={`${user.login} avatar`}
              className="user__avatar"
            />
            <div>
              <span className="user__name">
                {user.name ? user.name : "Has no name"}
              </span>
              <span className="user__followers">
                {user.followers}{" "}
                <FontAwesomeIcon icon={faUser} color="white" size="1x" />
              </span>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default DetailPage;
