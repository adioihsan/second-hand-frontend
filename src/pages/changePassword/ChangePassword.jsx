import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePassword } from "../../services/actions/userAction";
import { useOutletContext } from "react-router-dom";
import apiStatus from "../../services/utils/apiStatus";
function ChangePassword(props) {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const navProps = useOutletContext();
  const [showNewPass, setShowNewPass] = useState(false);
  const { values, errors, handleChange } = useForm();
  const { status, message } = useSelector((state) => state.user);
  const [isAction, setIsAction] = useState(false);
  const doChangePassword = (e) => {
    e.preventDefault();
    if (isAllValid()) {
      dispatch(changePassword(values));
      setIsAction(true);
    } else toast.warn("Data belum lengkap");
  };
  const isAllValid = () => {
    if (Object.keys(values).length === 0) return false;
    return errors.new_password === null && errors.password === null;
  };
  useEffect(() => {
    if (status === apiStatus.pending) navProps.setShowBar(true);
    if (status !== apiStatus.pending) navProps.setShowBar(false);
    if (status === apiStatus.success && isAction) {
      toast.success("Password berhasil diganti");
      setIsAction(false);
    }
    if (status === apiStatus.error && isAction) {
      toast.error(message);
      console.log("Proses error");
      setIsAction(false);
    }
  }, [status]);
  useEffect(() => {
    navProps.setNavType("back");
    navProps.setNavTitle("Ganti Password");
  });
  return (
    <div className="flex flex-col items-center justify-center ">
      <form className="form-form-login max-w-xl" method="post">
        <label className="block mt-3 font-regular text-sm">Password Lama</label>
        <div className="relative">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password Lama"
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
        {errors.password && <span className="error">{errors.password}</span>}
        {/*  */}
        <label className="block mt-3 font-regular text-sm">
          Buat password Baru
        </label>
        <div className="relative">
          <input
            type={showNewPass ? "text" : "password"}
            placeholder="Password Baru"
            name="new_password"
            onChange={handleChange}
          />
          <div
            className="absolute right-3 top-5"
            onClick={() => setShowNewPass((prev) => !prev)}
          >
            <FontAwesomeIcon icon={showNewPass ? faEye : faEyeSlash} />
          </div>
        </div>
        {errors.new_password && (
          <span className="error">{errors.new_password}</span>
        )}
        <button
          onClick={doChangePassword}
          className="button button-primary bg-purple-400 text-white w-full py-3 rounded-xl mt-7"
        >
          Ganti Password
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
