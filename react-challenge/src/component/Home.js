import { useState } from "react";
import UserCard from "./UserCards";
import Warning from "./Warning";

const Home = () => {
  const [user, setUser] = useState("");
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.trim().length > 4 && user.trim() !== "iseijasunow") {
      setError(false);
      fetchUser(user);
    } else {
      console.log("no valid");
      setError(true);
    }
  };

  const fetchUser = async (user) => {
    const response = await fetch(
      `https://api.github.com/search/users?q=${user}&per_page=10`
    );
    const data = await response.json();
    console.log(data);
    setUsersList(data.items);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          minLength="4"
          placeholder="Enter your name"
          onChange={(e) => setUser(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <div className="user-list">
        {usersList !== []
          ? usersList.map((user) => (
              <UserCard
                key={user.id}
                avatar={user.avatar_url}
                login={user.login}
                id={user.id}
              />
            ))
          : null}
      </div>

      {error ? <Warning /> : null}
    </div>
  );
};

export default Home;
