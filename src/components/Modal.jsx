import React from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
const Modal = ({ setSelectedData, selectedData }) => {
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setSelectedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:5000/trade/${selectedData._id}`,
        selectedData
      );
      if(response){
        toast.success('Successfully updated!');
      }
    } catch (err) {
        toast.error('Updated failed!');
    }
  };
  return (
    <>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <form action="">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Trade Code</legend>
            <input
              type="text"
              value={selectedData?.trade_code || ""}
              className="input input-info"
              disabled
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">High</legend>
            <input
              type="text"
              name="high"
              value={selectedData?.high || ""}
              onChange={handleOnchange}
              className="input input-info"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Low</legend>
            <input
              type="text"
              name="low"
              value={selectedData?.low || ""}
              onChange={handleOnchange}
              className="input input-info"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Open</legend>
            <input
              type="text"
              name="open"
              value={selectedData?.open || ""}
              onChange={handleOnchange}
              className="input input-info"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Close</legend>
            <input
              type="text"
              name="close"
              value={selectedData?.close || ""}
              onChange={handleOnchange}
              className="input input-info"
            />
          </fieldset>
          <div className="mt-2 flex justify-center">
            <button className="btn" type="submit" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </>
  );
};

export default Modal;
