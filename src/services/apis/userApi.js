import publicAxios from "./config/publicAxios";
// import qs from "qs";
const userApi = {
  authRegister: (data) => publicAxios.post("/register", data),
};
export default userApi;
