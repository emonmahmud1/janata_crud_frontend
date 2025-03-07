import React, { useEffect, useState } from "react";

const useCategoriesData = () => {
  return <div></div>;
};

export default useCategoriesData;

export const singleCategoryData = (trade_code) => {
  const [categoryData, setCategoryData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/trade/${trade_code}`);
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
          const res = await fetch("http://localhost:5000/tradecodes");
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
