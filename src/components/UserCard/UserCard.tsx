import { NavLink } from "react-router-dom";
import { User } from "../../types";
import "./UserCard.scss";
import paths from "../../paths/paths";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user: { id, login, avatar_url } }: UserCardProps) => {
  return (
    <NavLink to={`${paths.search}/${login}`}>
      <article className="user-card">
        <div>
          <img
            src={avatar_url}
            alt={`${login} avatar`}
            className="user-card__avatar"
          />
          <h2 className="user-card__name">{login}</h2>
        </div>
        <span className="user-card__id">{id}</span>
      </article>
    </NavLink>
  );
};

export default UserCard;
