import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye, faLink } from "@fortawesome/free-solid-svg-icons";

const UserDetails = () => {
  const match = useParams();
  const login = match.login;
  const [user, setUser] = useState();

  const fetchUser = useCallback(async () => {
    const response = await fetch(`https://api.github.com/users/${login}`);
    const data = await response.json();
    setUser(data);
    console.log(data);
  }, [login]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div>
      {user ? (
        <div className="user-card">
          <img src={user.avatar_url} alt={`${login} Avatar`} />
          <div className="details">
            <div className="detail">
              <FontAwesomeIcon icon={faUser} />
              <h1>{user.login}</h1>
            </div>
            <div className="detail">
              <FontAwesomeIcon icon={faEye} />
              <p>{`Followers: ${user.followers}`}</p>{" "}
            </div>
            <div className="detail">
              <FontAwesomeIcon icon={faLink} />
              <p>{`Following: ${user.following}`}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserDetails;
