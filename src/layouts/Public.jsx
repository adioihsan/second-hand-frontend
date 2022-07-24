import React, { useState } from "react";
import Navbar from "../components/navigation/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import LinearProgress from "@material/react-linear-progress";
import LoadingFull from "../components/loading/lodingFull/LoadingFull";
import {
  getLocalJWT,
  isJwtValid,
  parseJwt,
} from "../services/utils/jwtHandler";
import {
  getUserDetail,
  getUserProflie,
  setUserProfile,
  setUserToken,
} from "../services/actions/userAction";
import { useNavigate } from "react-router-dom";
import MobileNav from "../components/navigation/mobileNav/MobileNav";
function Public(props) {
  const { token, userProfile, status } = useSelector((state) => state.user);
  const [showBar, setShowBar] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  const [navTitle, setNavTitle] = useState(null);
  const [navType, setNavType] = useState(null);
  //
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    try {
      if (!token) {
        const localToken = getLocalJWT();
        if (localToken) {
          dispatch(setUserToken(localToken));
          const user = parseJwt(localToken);
          dispatch(setUserProfile(user));
          setIsGuest(false);
        } else {
          setIsGuest(true);
        }
      } else {
        if (!isJwtValid(token)) {
          navigate("/login", {
            state: {
              page: {
                message: "Sesi telah berakhir, silahkan login",
                domain: "/",
              },
            },
          });
        }
      }
    } catch (error) {
      setIsGuest(true);
    }
  }, []);
  if (!token && !isGuest) return <LoadingFull />;
  else if (token || isGuest)
    return (
      <>
        <div className=" md:shadow-md sticky top-0 z-10 md:bg-white">
          <div className="container mx-auto">
            <Navbar title={navTitle} type={navType} userData={userProfile} />
          </div>
          {showBar && (
            <LinearProgress indeterminate buffer={0.3} progress={0.9} />
          )}
        </div>
        <Outlet context={{ setShowBar, setNavType, setNavTitle }} />
        <div className="mt-20"></div>
        <MobileNav />
      </>
    );
}

export default Public;
