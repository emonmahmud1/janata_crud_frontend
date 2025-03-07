import React, { useState } from "react";
import RowData from "./RowData";
import Modal from "./Modal";

const Datatable = ({ trades, handlePage, currentPage }) => {
  const [selectedData, setSelectedData] = useState({});



  const handlePrev = () => {
    if (currentPage > 1) handlePage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < trades.totalPage) handlePage(currentPage + 1);
  };

  const handleModal = (e) => {
    setSelectedData(e);
    document.getElementById("my_modal_3").showModal();
  };
  return (
    <>
      <div className="overflow-x-auto">
        <div className="mb-2 flex items-center gap-2">
          <h1 className="text-2xl text-teal-600">Total Data</h1>
          <p className="mt-[1px] bg-amber-300 rounded-md p-2 text-white">
            {trades.totalDocuments}
          </p>
        </div>
        <table className="table table-xs">
          <thead>
            <tr>
              <th>Trade code</th>
              <th>Date</th>
              <th>High</th>
              <th>Low</th>
              <th>Open</th>
              <th>Close</th>
              <th>Volume</th>
              <th></th>
            </tr>
          </thead>
          {trades?.data && (
            <tbody>
              {trades.data?.map((rowData) => (
                <RowData
                  key={rowData._id}
                  rowData={rowData}
                  handleModal={handleModal}
                />
              ))}
            </tbody>
          )}
        </table>
        <div className="mt-3 flex gap-3 justify-center items-center">
          <button className="btn" onClick={handlePrev}>
            {" "}
            prev{" "}
          </button>
          <p className="text-sm ">
            Total Page{" "}
            <span className="text-blue-400">{trades.totalPage}</span>
          </p>
          <p className="text-sm ">
            Current Page <span className="text-blue-400">{currentPage}</span>
          </p>

          <button className="btn" onClick={handleNext}>
            next
          </button>
        </div>
      </div>
      <div>
        <dialog id="my_modal_3" className="modal">
          <Modal
            setSelectedData={setSelectedData}
            selectedData={selectedData}
          />
        </dialog>
      </div>
    </>
  );
};

export default Datatable;
