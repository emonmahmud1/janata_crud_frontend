import React, { PureComponent, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
} from "recharts";
import { singleCategoryData } from "../hooks/useCategoriesData";
import DropDown from "./DropDown";

const LineChartTrades = () => {
  const [getTradeCode, setGetTradeCode] = useState("SINGERBD");
  const [categoryData, loading] = singleCategoryData(getTradeCode);

  if (loading) {
    return (
      <div className="flex mt-20 justify-center">
        <span className="loading loading-spinner text-accent"></span>
      </div>
    );
  }
  return (
    <div className="w-full h-[300px] mb-30">
      <div className="flex justify-between px-5">
        <div className="flex gap-1 items-center">
          <h1 className="text-green-600">Trade Code:</h1>
          <p className="text-sm">{categoryData.tradeCode}</p>
        </div>
        <div>
          <DropDown setGetTradeCode={setGetTradeCode} getTradeCode={getTradeCode}/>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={categoryData.trades}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="close"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          {/* <Bar dataKey="volume" fill="#8884d8" /> */}
          {/* <Line type="monotone" dataKey="" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartTrades;
