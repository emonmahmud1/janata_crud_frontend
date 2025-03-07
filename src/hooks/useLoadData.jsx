import { useState, useEffect } from "react";

const useLoadData = (page, limit) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:5000/trades?page=${page}&limit=${limit}`
        );
        const result = await res.json();
        setData(result);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return [data, loading]; // Returning as an array
};

export default useLoadData;
