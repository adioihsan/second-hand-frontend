import privateAxios from "./config/privateAxios";
import publicAxios from "./config/publicAxios";

const userApi = {
  authRegister: (data) => publicAxios.post("/register", data),
  authLogin: (data) => publicAxios.post("/login", data),
  getUserProfile: (authToken) => privateAxios(authToken).get("/profile"),
  getUserDetail: (authToken) => privateAxios(authToken).get("/user-detail"),
  updateUserDetail: ({ data, authToken }) =>
    privateAxios(authToken).put("/user-detail", data),
};
export default userApi;
