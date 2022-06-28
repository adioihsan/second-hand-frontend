import privateAxios from "./config/privateAxios";
import publicAxios from "./config/publicAxios";
// import qs from "qs";
const productApi = {
  createProduct: ({ data, authToken }) =>
    privateAxios(authToken).post("/product", data),
  getMyProduct: ({ productId, authToken }) =>
    privateAxios(authToken).get("/product/" + productId + "/me"),
  updateProduct: ({ data, authToken }) =>
    privateAxios(authToken).put("/product/" + data.id, data),
};

export default productApi;
