import React from "react";
import "./userInfo.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const UserInfo = () => {
  const { id } = useParams();

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios.get(`https://api.github.com/users/${id}`).then((res) => {
      setUserInfo(res.data);
      console.log(res.data);
    });
  }, [id]);

  return (
    <>
      <Link to="/">
        <div className="btn">
          <i className="fa-solid fa-arrow-left"></i>
        </div>
      </Link>
      <h3 className="title">Info User : {userInfo.name}</h3>
      <div className="conteiner-user-info">
        <div className="img-user">
          <img src={userInfo.avatar_url} alt="" />
        </div>
        <div className="info-user">
          <p>
            <b>Name:</b>
            {userInfo.name}
          </p>
          <p>
            <b>Email:</b> {userInfo.email}
          </p>
          <p>
            <b>Public Repos: </b>
            {userInfo.public_repos}
          </p>

          <div className="progres-bars">
            <p>
              <b>followers </b>
              <b>{userInfo.followers}/100</b>
            </p>
            <progress value={userInfo.followers} max="100"></progress>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
