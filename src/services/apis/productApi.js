import privateAxios from "./config/privateAxios";
import publicAxios from "./config/publicAxios";
// import qs from "qs";
const productApi = {
  createProduct: ({ data, authToken }) =>
    privateAxios(authToken).post("/product", data),
};
export default productApi;
