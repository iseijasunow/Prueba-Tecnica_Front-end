import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const UserCard = ({ login, id, avatar }) => {
  return (
    <div className="user-card">
      <Link to={`/user-details/${login}`}>
        <img src={avatar} alt="User Avatar" />
        <h3>{login}</h3>
        <FontAwesomeIcon icon={faUser} />
        <h4>{id}</h4>
      </Link>
    </div>
  );
};

export default UserCard;
