import React, { useState } from "react";
import Navbar from "../components/navigation/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LoadingFull from "../components/loading/lodingFull/LoadingFull";
import { getLocalJWT, parseJwt } from "../services/utils/jwtHandler";
import {
  getUserDetail,
  setUserData,
  setUserToken,
} from "../services/actions/userAction";
import { useNavigate } from "react-router-dom";
function Public(props) {
  const { token, userDetail, userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    try {
      if (!token) {
        const localToken = getLocalJWT();
        dispatch(setUserToken(localToken));
        const user = parseJwt(localToken);
        console.log(user);
        dispatch(setUserData(user));
        dispatch(getUserDetail());
      }
    } catch (error) {
      navigate("/login");
      setIsGuest(true);
    }
  }, []);
  if (!token || isGuest) return <LoadingFull />;
  else
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
