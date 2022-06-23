import React, { createContext, useContext, useState } from "react";
import Navbar from "../components/navigation/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLocalJWT, parseJwt } from "../services/utils/jwtHandler";
import { setUserToken } from "../services/actions/userAction";
function Buyer(props) {
  const [navTitle, setNavTitle] = useState(null);
  const [navType, setNavType] = useState(null);
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.user);
  const localToken = getLocalJWT();
  useEffect(() => {
    if (!token && localToken) {
      dispatch(setUserToken(localToken));
    }
  }, []);
  if (token) console.log("parsed jwt : ", parseJwt(token));
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

export default Buyer;
