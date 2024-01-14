import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import BackBtn from "../../components/BackBtn/BackBtn";
import "./UserPage.scss";
import { getUserData, getUserFollowers, getUserRepos } from "../../api/userApi";

export default function UserPage() {
  const { userName } = useParams();
  const [users, setUsers] = useState();

  useEffect(() => {
    getUserData(userName, setUsers);
  }, [userName]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
    <div className="user-page">
      {users ? (
        <div className="user-card">
          <img src={users.avatar_url}></img>
          <section className="user-data">
            <p>@{users.login}</p>
            {
              users.followers ? 
              <a><b>{users.followers}</b> {users.followers == 1 ? "Follower" : "Followers"}</a> : ""
            }
            {
              users.public_repos ? 
              <a><b>{users.public_repos}</b> {users.public_repos == 1 ? "Repo" : "Repos"}</a> : ""
            }
            <a href={users.html_url} target="_blank" className="link">
              Github profile
            </a>
          </section>
        </div>
      ) : (
        <p>Loading</p>
      )}
      <BackBtn />
    </div>
    </motion.div>
  );
}
