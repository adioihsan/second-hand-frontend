import React from "react";
import Navbar from "../components/navigation/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Guest(props) {
  return (
    <>
      <div className="md:bg-white md:shadow-md">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Guest;
