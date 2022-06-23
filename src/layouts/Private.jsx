import React, { createContext, useContext, useState } from "react";
import Navbar from "../components/navigation/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Private(props) {
  const [navTitle, setNavTitle] = useState(null);
  const [navType, setNavType] = useState(null);
  return (
    <>
      <div className="md:bg-white md:shadow-md md:mb-5 mb-10">
        <div className="container mx-auto">
          <Navbar title={navTitle} type={navType} />
        </div>
      </div>
      <div className="container mx-auto px-5">
        <Outlet context={{ setNavTitle, setNavType }} />
      </div>
    </>
  );
}

export default Private;
