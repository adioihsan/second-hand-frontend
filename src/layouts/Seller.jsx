import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/navbar/Navbar";
function Seller(props) {
  const [navTitle, setNavTitle] = useState(null);
  const [navType, setNavType] = useState(null);
  return (
    <div>
      <div className="md:bg-white md:shadow-md sticky top-0 z-10">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </div>
      <div className="container mx-auto px-5">
        <Outlet context={{ setNavTitle, setNavType }} />
      </div>
    </div>
  );
}

export default Seller;
