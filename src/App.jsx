import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Routes from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
        <ToastContainer />
      </div>
    );
  }
}

export default hot(module)(App);
