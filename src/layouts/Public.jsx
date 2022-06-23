import React from "react";
import Navbar from "../components/navigation/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLocalJWT, parseJwt } from "../services/utils/jwtHandler";
import { setUserToken } from "../services/actions/userAction";
function Public(props) {
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
      <div className="md:bg-white md:shadow-md sticky top-0 z-10">
        <div className="container mx-auto">
          <Navbar />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Public;
