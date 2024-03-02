import { useState } from "react";
import { getAllUsers } from "../utils/endpoints";

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (name) => {
    try {
      setLoading(true);

      // Simulando una solicitud fetch, reemplázalo con tu lógica real
      const response = await fetch(getAllUsers(name));
      const result = await response.json();

      setData(result);
      setError(null);
    } catch (error) {
      setData(null);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetchData;
