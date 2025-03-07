import React, { useState } from "react";

const RowData = ({ rowData ,handleModal}) => {
  const { _id, trade_code, date, high, low, open, close, volume } = rowData;

  return (
    <>
      <tr>
        <th>{trade_code}</th>
        <td>{date}</td>
        <td>{high}</td>
        <td>{low}</td>
        <td>{open}</td>
        <td>{close}</td>
        <td>{volume}</td>
        <td>
          <button
            className="btn btn-sm btn-success"
            onClick={()=>handleModal(rowData)}
          >
            Edit
          </button>
        </td>
      </tr>

    </>
  );
};

export default RowData;
// onClick={
//     () =>
//   handleModal({
//     _id,
//     trade_code,
//     date,
//     high,
//     low,
//     open,
//     close,
//     volume,
//   })
// }