import publicAxios from "./config/publicAxios";
// import qs from "qs";
const userApi = {
  authRegister: (data) => publicAxios.post("/register", data),
  authLogin: (data) => publicAxios.post("/login", data),
};
export default userApi;
