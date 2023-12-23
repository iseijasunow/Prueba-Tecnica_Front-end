import { useContext } from "react";
import UsersContext from "../../store/users/context/UsersContext";
import UserCard from "../UserCard/UserCard";
import "./UserList.scss";

const UserList = () => {
  const { users } = useContext(UsersContext);

  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
