import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingFull from "../../../components/loading/lodingFull/LoadingFull";
import useForm from "../../../hooks/useForm";
import {
  authUser,
  setUserProfile,
  setUserMessage,
} from "../../../services/actions/userAction";
import apiStatus from "../../../services/utils/apiStatus";
import { parseJwt, saveLocalJWT } from "../../../services/utils/jwtHandler";
import "./login.css";
import { Helmet } from "react-helmet-async";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  const [isAction, setIsAction] = useState(false);
  const { values, errors, handleChange } = useForm();
  const { token, message, status } = useSelector((state) => state.user);
  const [showPass, setShowPass] = useState(false);

  const isAllValid = () => {
    if (Object.keys(values).length === 0) return false;
    return errors.email === null && errors.password === null;
  };
  const doLogin = (e) => {
    e.preventDefault();
    if (isAllValid()) {
      setIsAction(true);
      dispatch(authUser(values));
    } else {
      toast.warn("Data belum lengkap");
    }
  };
  useEffect(() => {
    if (status === apiStatus.success && token && isAction) {
      saveLocalJWT(token);
      const user = parseJwt(token);
      dispatch(setUserProfile(user));
      toast.success("Login berhasil");
      setIsAction(false);
      navigate("/");
    }
  }, [status]);
  useEffect(() => {
    if (location.state) {
      if (location.state.page)
        dispatch(
          setUserMessage({
            message: location.state.page.message,
            status: location.state.page.status,
          })
        );
      else {
        dispatch(
          setUserMessage({
            message: location.state.message,
            status: apiStatus.success,
          })
        );
        emailRef.current.value = location.state.email;
        const e = {
          target: {
            name: emailRef.current.name,
            value: emailRef.current.value,
          },
        };
        handleChange(e);
      }
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title>Seconhand. Masuk</title>
      </Helmet>
      <div className="Login">
        <div className="loginWrapper">
          <div className="background-image flex-1 flex items-center">
            <span className="ml-20 font-bold text-white text-4xl">
              Second<br></br>Hand.
            </span>
          </div>
          <div className="form-login flex-1 flex items-center justify-center">
            <form className="form-form-login" onSubmit={doLogin} method="post">
              <Link to="/" className="menuListItem ">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  size="lg"
                  className="mb-5"
                />
              </Link>
              <h1 className="text-2xl font-bold">Masuk</h1>
              {message && (
                <div
                  className={
                    status === apiStatus.error
                      ? "message bg-red-500"
                      : "message bg-green-600"
                  }
                >
                  {message}
                </div>
              )}
              <label className="block font-regular mt-5 text-sm">Email</label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                ref={emailRef}
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <label className="block mt-3 font-regular text-sm">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
                <div
                  className="absolute right-3 top-5"
                  onClick={() => setShowPass((prev) => !prev)}
                >
                  <FontAwesomeIcon icon={showPass ? faEye : faEyeSlash} />
                </div>
              </div>
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
              <button className="button button-primary bg-purple-400 text-white w-full py-3 rounded-xl mt-7">
                Masuk
              </button>
              <span className="flex justify-center mt-5">
                Belum punya akun?
                <Link to="/register" className="ml-2 font-bold text-purple-700">
                  Daftar Disini
                </Link>
              </span>
            </form>
          </div>
        </div>
        {status === apiStatus.pending && <LoadingFull />}
      </div>
    </>
  );
};

export default Login;
