import React from "react";
import { getCategories } from "../hooks/useCategoriesData";

const DropDown = ({ setGetTradeCode,getTradeCode }) => {
  const [tradesCode, loading] = getCategories();
  const handleOnchange = (e) => {
    setGetTradeCode(e.target.value);
  };
  if (loading) {
    return (
      <div className="flex mt-20 justify-center">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );
  }
  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Select trade code</legend>
        <select
          onChange={handleOnchange}
          value={getTradeCode || ''}
          className="select"
        >
          <option disabled={true}>Pick a option</option>
          {tradesCode.map((item, index) => (
            <option key={item.trade_code} value={item.trade_code}>{item.trade_code}</option>
          ))}
        </select>
      </fieldset>
    </>
  );
};

export default DropDown;
