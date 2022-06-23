import React, { createContext, useContext, useState } from "react";
import Navbar from "../components/navigation/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLocalJWT, parseJwt } from "../services/utils/jwtHandler";
import { setUserData, setUserToken } from "../services/actions/userAction";
import { useNavigate } from "react-router-dom";
function Private(props) {
  // hooks
  const { token, userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  const [navTitle, setNavTitle] = useState(null);
  const [navType, setNavType] = useState(null);

  useEffect(() => {
    try {
      if (!token) {
        const localToken = getLocalJWT();
        dispatch(setUserToken(localToken));
        const user = parseJwt(localToken);
        dispatch(setUserData(user));
      }
    } catch (error) {
      navigate("/login");
    }
  }, []);

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
