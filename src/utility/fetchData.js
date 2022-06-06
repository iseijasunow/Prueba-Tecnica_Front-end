import { useState, useEffect } from "react";

const fetchData = (API, method = "GET") => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(API, { method: method })
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setData(resp);
      });
  }, []);
  return data;
};

export { fetchData };
