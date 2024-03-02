import { useState, useEffect } from "react";
import { getUser, userFollowers } from "../utils/endpoints";

const useFetchFollowers = (users) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        setLoading(true);

        const promises = users.map(async (user) => {
          const response = await fetch(getUser(user.login));
          const followers = await response.json();
          return followers.followers;
        });

        const followersCountData = await Promise.all(promises);
        setData(followersCountData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchFollowers();
  }, [users]);

  return { data, loading, error };
};

export default useFetchFollowers;
