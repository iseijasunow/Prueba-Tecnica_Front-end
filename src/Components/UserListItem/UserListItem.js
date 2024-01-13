import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserFollowers } from "../../api/userApi";
import "./UserListItem.scss";
import FollowersChart from "../FollowersChart/FollowersChart";

export default function UserListItem({ id, userName }) {
  const [userFollowers, setUserFollowers] = useState();

  useEffect(() => {
    getUserFollowers(userName, setUserFollowers);
  }, [userName]);

  return (
    <Link to={`/users/${userName}`}>
      <div className="list-item">
        <span className="username">@{userName}</span>
        <span className="id">Id: {id}</span>
        {userFollowers ? (
          <span>
            <FollowersChart followersCount={userFollowers.length} />
            Followers
          </span>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
}
