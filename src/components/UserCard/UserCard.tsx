import { User } from "../../types";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user: { id, login, avatar_url } }: UserCardProps) => {
  return (
    <article className="user-card">
      <img src={avatar_url} alt={`${login} avatar`} />
      <h2 className="user-card__name">{login}</h2>
      <span className="user-card__id">{id}</span>
    </article>
  );
};

export default UserCard;
