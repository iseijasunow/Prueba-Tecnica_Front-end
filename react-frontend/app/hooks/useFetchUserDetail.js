import { useState, useEffect } from "react";
import { getUser, userFollowers } from "../utils/endpoints";

const useFetchUserDetail = (name) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(getUser(name));
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [name]);

  return { data, loading, error };
};

export default useFetchUserDetail;
