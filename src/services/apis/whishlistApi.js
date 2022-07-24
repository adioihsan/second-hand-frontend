import privateAxios from "./config/privateAxios";
import publicAxios from "./config/publicAxios";

const whishlistApi = {
  postWish: ({ data, authToken }) =>
    privateAxios(authToken).post("/wish", data),
  getWishes: (authToken) => privateAxios(authToken).get("/wishes"),
};
export default whishlistApi;
