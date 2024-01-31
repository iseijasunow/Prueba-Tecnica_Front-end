import React from "react";
import { Link } from "react-router-dom";
import FollowersChart from "../FollowersChart/CircularChart";
import "./UserListItem.scss";

export default function UserListItem({ id, userName, followers }) {
  return (
    <Link to={`/users/${userName}`}>
      <div className="list-item">
        <span className="username">@{userName}</span>
        <span className="id">Id: {id}</span>
        <span>
          <FollowersChart followersCount={followers} />
          Followers
        </span>
      </div>
    </Link>
  );
}
