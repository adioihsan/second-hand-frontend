import React from "react";
import { Link } from "react-router-dom";
import "./register.css";
import useForm from "../../../hooks/useForm";
import ButtonPrimary from "../../../components/button/buttonPrimary/ButtonPrimary";

const Register = () => {
  const { values, errors, handleChange } = useForm();
  console.log("values :", values);
  console.log("errors :", errors);
  return (
    <div className="Register">
      <div className="registerWraper">
        <div className="background-image flex-1 flex items-center">
          <span className="ml-20 font-bold text-white text-4xl">
            Second<br></br>Hand.
          </span>
        </div>
        <div className="form-register">
          <form className="form-form-register">
            <h1 className="text-2xl font-bold">Daftar</h1>
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
            <ButtonPrimary className="w-full mt-5">Masuk</ButtonPrimary>
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
