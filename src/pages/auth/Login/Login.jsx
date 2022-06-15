import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
  return (
    <div className="Login">
      <div className="flex">
        <div className="background-image flex-1 flex items-center">
          <span className="ml-20 font-bold text-white text-4xl">
            Second<br></br>Hand.
          </span>
        </div>
        <div className="form-login flex-1 flex items-center justify-center">
          <form className="form-form-login">
            <h1 className="text-2xl font-bold">Masuk</h1>
            <label class="block font-regular mt-5 text-xs">Email</label>
            <input
              type="text"
              placeholder="Email"
              className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-xl"
            />
            <label class="block mt-3 font-regular text-xs">Password</label>
            <input
              type="password"
              placeholder="Password"
              className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-xl"
            />
            <button className="button button-primary bg-purple-600 text-white w-full py-3 rounded-xl mt-7">
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
    </div>
  );
};

export default Login;
