import { useCallback, useEffect, useState } from "react";

export const useFetchAll = (urls) => {
  const TOKEN = import.meta.env.VITE_API_TOKEN;
  const headers = {
    Authorization: `Bearer ${TOKEN}`,
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    
    if (urls.length) {
      setLoading(true);
      try {
        const promises = urls.map(async (url) => {
          const response = await fetch(url, {
            method: "GET",
            headers: headers,
          });
          if (!response.ok) throw new Error(`Error fetching data from ${url}`);
          return response.json();
        });

        const responseData = await Promise.all(promises);

        setData(responseData);
      } catch (error) {
        setData([]);
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  }, [urls]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};
