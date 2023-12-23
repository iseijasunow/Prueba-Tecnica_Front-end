import { useParams } from "react-router-dom";
import useUsersApi from "../../hook/useUsersApi";
import { useEffect, useState } from "react";
import { User } from "../../types";

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
      {user && (
        <article className="user">
          <img
            src={user.avatar_url}
            alt={`${user.login} avatar`}
            className="user__avatar"
          />
          <div>
            <h1 className="user__name">{user.login}</h1>
            <span>{user.name}</span>
            <span>{user.followers}</span>
          </div>
        </article>
      )}
    </>
  );
};

export default DetailPage;
