import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
  const TOKEN = import.meta.env.VITE_API_TOKEN;
  const headers = {
    Authorization: `Bearer ${TOKEN}`,
  };
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (url) {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${url}`,
          {
            method: "GET",
            headers: headers,
          }
        );
        if (!response.ok) throw new Error("Error fetching data");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error.message);
        setData([]);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};
