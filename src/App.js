import React from "react";
import "./App.css";
import MainBoard from "./components/MainBoard";
import Navbar from "./components/NavMenu";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const { tickets, error } = useSelector((state) => state.response);

  React.useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <div>
      {tickets ? (
        <>
          <Navbar />
          <MainBoard/>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default App;
