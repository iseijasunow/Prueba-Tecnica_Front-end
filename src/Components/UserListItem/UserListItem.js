import React from "react";
import { Link } from "react-router-dom";

export default function UserListItem({id, userName}) {
  return (
    <Link to={`/users/${userName}`}>
      <p>Name: {userName}</p>
      <p>Id: {id}</p>
    </Link>
  );
}
