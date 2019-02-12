import React from "react";
import { toast } from "react-toastify";

const landingPage = () => {
  const token = window.localStorage.getItem("token");
  if (token) {
    return (
      <div className="text-center">
        <h1>You are welcome to FAST FOOD</h1>
      </div>
    );
  } else {
    return (
      <div className="text-center">
        <h1>Please login in again</h1>
      </div>
    )
  }
};

export default landingPage;
