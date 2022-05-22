import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./users.css";

const Users = () => {
  const [users, setUser] = useState([]);
  const [userLogin, setUserLogin] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://api.github.com/search/users?q=YOUR_NAME").then((res) => {
      console.log(res.data.items);
      setUser(res.data.items);
    });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    navigate(`/${userLogin}`);
  };

  return (
    <>
      <form onSubmit={submit} className="input-container">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="user name"
          value={userLogin}
          onChange={(e) => setUserLogin(e.target.value)}
        />
        <button className="btn-search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>

      <div className="wrapper-users">
        <h3>User List</h3>
        {users.map((user) => (
          <Link to={`/${user.login}`} key={user.id}>
            <div className="container-user">
              <div className="user-info">
                <p>
                  <b>User login:</b>
                  {user.login}
                </p>
                <p>
                  <b>User id:</b>
                  {user.id}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Users;
