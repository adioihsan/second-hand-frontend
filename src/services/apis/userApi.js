import privateAxios from "./config/privateAxios";
import publicAxios from "./config/publicAxios";
// import qs from "qs";
const userApi = {
  authRegister: (data) => publicAxios.post("/register", data),
  authLogin: (data) => publicAxios.post("/login", data),
  fetchUserDetail: (authToken) => privateAxios(authToken).get("/user-detail"),
  updateUserDetail: ({ data, authToken }) =>
    privateAxios(authToken).put("/user-detail", data),
};
export default userApi;
