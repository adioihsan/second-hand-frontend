import React, { createContext, useContext, useState } from "react";
import Navbar from "../components/navigation/navbar/Navbar";
import { Outlet } from "react-router-dom";
function Buyer(props) {
  const [navTitle, setNavTitle] = useState(null);
  const [navType, setNavType] = useState(null);
  return (
    <>
      <div className="md:bg-white md:shadow-md md:mb-5 mb-10">
        <div className="container mx-auto">
          <Navbar title={navTitle} />
        </div>
      </div>
      <div className="container mx-auto px-5">
        <Outlet context={setNavTitle} />
      </div>
    </>
  );
}

export default Buyer;
