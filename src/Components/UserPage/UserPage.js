import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackBtn from "../BackBtn/BackBtn";

export default function UserPage() {
  const { userName } = useParams();
  const [user, setUser] = useState();

  const getData = async () => {
    try {
      const data = await fetch(`https://api.github.com/users/${userName}`);
      const userData = await data.json();
      setUser(userData);
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, userName);

  return (
    <div>
      {user ? (
        <>
          <p>User name: {user.login}</p>
          <p>User id: {user.id}</p>
         <img src={user.avatar_url}></img>
         <a href={user.html_url} target="_blank">Github profile</a>
        </>
      ) : (
        <p>Loading</p>
      )}
      <BackBtn />
    </div>
  );
}
