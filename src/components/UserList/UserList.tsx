import { useContext } from "react";
import UsersContext from "../../store/users/context/UsersContext";
import UserCard from "../UserCard/UserCard";

const UserList = () => {
  const { users } = useContext(UsersContext);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
