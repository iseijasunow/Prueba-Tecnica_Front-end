import React from "react";
import UserListItem from "../UserListItem/UserListItem";

export default function SearchList({searchName, user}) {
  return (
    <>
      <h1>Results for: {searchName}</h1>
      <ul>
        {user &&
          user.map((item) => (
            <li key={item.id}>
              <UserListItem
                key={item.id}
                id={item.id}
                userName={item.userName}
              />
            </li>
          ))}
      </ul>
    </>
  );
}
