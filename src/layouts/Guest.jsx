import React from "react";
import Navbar from "../components/navigation/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Guest(props) {
  return (
    <>
      <div className="md:bg-white md:shadow-md sticky top-0 z-10">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Guest;
