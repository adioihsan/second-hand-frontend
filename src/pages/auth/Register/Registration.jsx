import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import useForm from "../../../hooks/useForm";
import ButtonPrimary from "../../../components/button/buttonPrimary/ButtonPrimary";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { createUser } from "../../../services/actions/userAction";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {
  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, pending, error, success } = useSelector(
    (state) => state.user
  );
  const { values, errors, handleChange } = useForm();

  // actions
  const doRegister = (e) => {
    e.persist();
    e.preventDefault();
    if (isAllValid()) dispatch(createUser(values));
  };
  const isAllValid = () => {
    if (Object.keys(errors).length === 0) return false;
    return (
      errors.name === null && errors.password === null && errors.email === null
    );
  };
  useEffect(() => {
    if (success)
      navigate("/login", {
        state: {
          email: values.email,
          message: "Registrasi berhasil, silahkan login",
        },
      });
  }, [success]);
  return (
    <div className="Register">
      <div className="registerWraper">
        <div className="background-image flex-1 flex items-center">
          <span className="ml-20 font-bold text-white text-4xl">
            Second<br></br>Hand.
          </span>
        </div>
        <div className="form-register">
          <form
            className="form-form-register"
            onSubmit={doRegister}
            method="post"
          >
            <h1 className="text-2xl font-bold">Daftar</h1>
            {message && (
              <div
                className={
                  error ? "message bg-red-500" : "message bg-green-600"
                }
              >
                {message}
              </div>
            )}
            <label>Nama</label>
            <input
              type="text"
              name="name"
              placeholder="Nama Lengkap"
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
            <ButtonPrimary className="w-full mt-5">Daftar</ButtonPrimary>
            <span className="flex justify-center mt-5">
              Sudah punya akun?
              <Link to="/register" className="ml-2 font-bold text-purple-700">
                Masuk Disini
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
