import React, { useEffect, useState } from "react";


export const singleCategoryData = (trade_code) => {
  const [categoryData, setCategoryData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}trade/${trade_code}`);
        const result = await res.json();
        setCategoryData(result);
      } catch (err) {
        console.log("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [trade_code]);
  return [categoryData, loading];
};

export const getCategories = () => {
    const [tradesCode, setTradesCode] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const loadData = async () => {
        try {
          const res = await fetch(`${import.meta.env.VITE_BASE_URL}tradecodes`);
          const result = await res.json();
        //   console.log(result);
          setTradesCode(result);
        } catch (err) {
          console.log("Error fetching data");
        } finally {
          setLoading(false);
        }
      };
      loadData();
    }, []);
    return [tradesCode, loading];

};
