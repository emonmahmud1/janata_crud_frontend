import { useState } from "react";
import Datatable from "./components/Datatable";
import useLoadData from "./hooks/useLoadData";

function App() {
  const [page, setPage] = useState(1);
  const [data, loading] = useLoadData(page, 20);
  const handlePage = (e) => {
    setPage(e);
  };
  return (
    <>
      <div className="max-w-[1444px] mx-auto">
        <h1 className="border text-3xl text-center text-green-500 my-3">
          Data Table
        </h1>
        {loading ? (
          <div className="flex mt-20 justify-center">
            <span className="loading loading-spinner text-accent"></span>
          </div>
        ) : (
          <Datatable trades={data} handlePage={handlePage} currentPage={page}/>
        )}
      </div>
    </>
  );
}

export default App;
