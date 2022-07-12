import privateAxios from "./config/privateAxios";
import publicAxios from "./config/publicAxios";

const whishlistApi = {
  postWish: ({ data, authToken }) =>
    privateAxios(authToken).post("/wish", data),
};
export default whishlistApi;
