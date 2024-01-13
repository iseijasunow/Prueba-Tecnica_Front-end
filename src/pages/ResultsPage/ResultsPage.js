import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackBtn from "../../components/BackBtn/BackBtn";
import Form from "../../components/Form/Form";
import SearchList from "../../components/SearchList/SearchList";

export default function Results() {
  const { searchName } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch(`https://api.github.com/search/users?q=${searchName}&per_page=10`)
      .then((response) => response.json())
      .then((json) => {
        setUser([]);
        if (json.items && Array.isArray(json.items)) {
          json.items.map((item) => {
            setUser((user) => [
              ...user,
              {
                id: item.id,
                userName: item.login,
                image: item.avatar_url,
                followers: item.followers_url,
                profileUrl: item.url,
              },
            ]);
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchName]);

  return (
    <div>
      <Form />
      <SearchList searchName={searchName} user={user}/>
      <BackBtn />
    </div>
  );
}
