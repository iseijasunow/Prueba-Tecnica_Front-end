import React, { useEffect, useState } from "react";
import UserListItem from "../UserListItem/UserListItem";
import "./SearchList.scss";

export default function SearchList({ searchName, user, userFollowers }) {
  const [resultsLoaded, setResultsLoaded] = useState(false);

  useEffect(() => {
    if (user && user.length > 0) {
      setResultsLoaded(true);
    } else {
      const delay = setTimeout(() => {
        setResultsLoaded(true);
      }, 10000);

      return () => clearTimeout(delay);
    }
  }, [user]);

  return (
    <>
      {resultsLoaded ? (
        <div className="results">
          {user && user.length > 0 ? (
            <div>
              <h3>Results for: {searchName}</h3>
              <ul className="list-parent">
                {user.map((item) => (
                  <li key={item.id}>
                    <UserListItem
                      key={item.id}
                      id={item.id}
                      userName={item.userName}
                      followers={item.followers}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>
              There are no results for <i>{searchName}</i>
            </p>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
