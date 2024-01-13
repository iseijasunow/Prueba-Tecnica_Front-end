import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import BackBtn from "../../components/BackBtn/BackBtn";
import "./UserPage.scss";
import { getUserData, getUserFollowers, getUserRepos } from "../../api/userApi";

export default function UserPage() {
  const { userName } = useParams();
  const [users, setUsers] = useState();
  const [userFollowers, setUserFollowers] = useState();
  const [userRepos, setUserRepos] = useState();



  useEffect(() => {
    getUserData(userName, setUsers);
    getUserFollowers(userName, setUserFollowers);
    getUserRepos(userName, setUserRepos);
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
              userFollowers ? 
              <a><b>{userFollowers.length}</b> Followers</a> : ""
            }
            {
              userRepos ? 
              <a><b>{userRepos.length}</b> Repos</a> : ""
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
