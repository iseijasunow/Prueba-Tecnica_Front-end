import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./UserDetail.scss";
import { SiBloglovin, SiGithub } from "react-icons/si";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const UserDetail = () => {
  const [user, setUser] = useState([]);
  const { login } = useParams();

  const petition = async () => {
    await axios
      .get(`https://api.github.com/users/${login}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    petition();
  }, []); // eslint-disable-line

  return (
    <div className="user-detail">
      <h1 className="user-detail-title">/{user.login}</h1>
      <p className="user-detail-id">{user.id}</p>
      <img src={user.avatar_url} alt="avatar" className="user-detail-avatar" />
      <p className="user-detail-bio">{user.bio}</p>
      <p className="user-detail-location">{user.location}</p>
      <div className="user-detail-links">
        <a href={user.blog} target="_blank" rel="noopener noreferrer" className="user-detail-link" >
          <SiBloglovin /> | Blog
        </a>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="user-detail-link" >
          <SiGithub />  | Github
        </a>
      </div>
      <NavLink to="/">
        <button className="btn-back"><MdOutlineKeyboardBackspace /> Back</button>
      </NavLink>
    </div>
  );
};
export default UserDetail;
