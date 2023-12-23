import { User } from "../../types";
import "./UserCard.scss";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user: { id, login, avatar_url } }: UserCardProps) => {
  return (
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
  );
};

export default UserCard;
