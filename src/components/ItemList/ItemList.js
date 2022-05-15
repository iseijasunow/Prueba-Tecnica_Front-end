import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import './ItemList.scss';

const ItemList = ({ users }) => {
  return (
    <div className="item-list">
      {users.slice(0, 10).map((user, index) => (
        <div key={index} className="item-list-item">
          <p>User: {user.login}</p>
          <p>ID: {user.id}</p>

          <NavLink to={`/user/${user.login}`}>
            <Button textButton="Go to user" className="button" />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
