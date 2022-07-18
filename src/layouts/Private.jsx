import React, { createContext, useContext, useState } from "react";
import Navbar from "../components/navigation/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getLocalJWT,
  isJwtValid,
  parseJwt,
} from "../services/utils/jwtHandler";
import { setUserProfile, setUserToken } from "../services/actions/userAction";
import { useNavigate } from "react-router-dom";
import LoadingFull from "../components/loading/lodingFull/LoadingFull";
import LinearProgress from "@material/react-linear-progress";
function Private(props) {
  // hooks
  const { token, userProfile } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //
  const [navTitle, setNavTitle] = useState(null);
  const [navType, setNavType] = useState(null);
  const [showBar, setShowBar] = useState(false);
  useEffect(() => {
    try {
      if (!token) {
        const localToken = getLocalJWT();
        dispatch(setUserToken(localToken));
        const user = parseJwt(localToken);
        dispatch(setUserProfile(user));
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
      navigate("/login");
    }
  }, []);
  if (!token) return <LoadingFull />;
  else
    return (
      <>
        <div className="md:bg-white md:shadow-md md:mb-5 mb-10">
          <div className="container mx-auto">
            <Navbar title={navTitle} type={navType} userData={userProfile} />
          </div>
          {showBar && (
            <LinearProgress indeterminate buffer={0.9} progress={0.8} />
          )}
        </div>
        <div className="container mx-auto px-5">
          <Outlet context={{ setNavTitle, setNavType, setShowBar }} />
        </div>
      </>
    );
}

export default Private;
