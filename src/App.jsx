import React from "react";
import { hot } from "react-hot-loader";
import { ToastContainer } from "react-toastify";
import Routes from "./Router";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  return (
    <div className="App">
      <Routes />
      <ToastContainer />
    </div>
  );
};

export default hot(module)(App);
