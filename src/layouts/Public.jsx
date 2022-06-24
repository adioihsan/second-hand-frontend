import React from "react";
import Navbar from "../components/navigation/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLocalJWT, parseJwt } from "../services/utils/jwtHandler";
import {
  readUserDetail,
  setUserData,
  setUserToken,
} from "../services/actions/userAction";
import { useNavigate } from "react-router-dom";
function Public(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token, userData } = useSelector((state) => state.user);

  useEffect(() => {
    try {
      if (!token) {
        const localToken = getLocalJWT();
        dispatch(setUserToken(localToken));
        const user = parseJwt(localToken);
        dispatch(setUserData(user));
        dispatch(readUserDetail());
      }
    } catch (error) {
      // console.log(error);
    }
  }, []);

  return (
    <>
      <div className="md:bg-white md:shadow-md sticky top-0 z-10">
        <div className="container mx-auto">
          <Navbar userData={userData} />
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Public;
