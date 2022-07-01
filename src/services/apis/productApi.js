import privateAxios from "./config/privateAxios";
import publicAxios from "./config/publicAxios";

const productApi = {
  createProduct: ({ data, authToken }) =>
    privateAxios(authToken).post("/product", data),
  getMyProduct: ({ productId, authToken }) =>
    privateAxios(authToken).get("/product/" + productId + "/me"),
  getMyProductList: ({ pageConfig, authToken }) =>
    privateAxios(authToken).get(
      `products/me?page=${pageConfig.page || 1}&limit=${
        pageConfig.limit || 12
      }&filter=${pageConfig.filter || 1}`
    ),
  updateProduct: ({ data, authToken }) =>
    privateAxios(authToken).put("/product/" + data.id, data),
  releaseProduct: ({ productId, authToken }) =>
    privateAxios(authToken).patch("/product/" + productId + "/release", {
      is_release: true,
    }),
  unReleaseProduct: ({ productId, authToken }) =>
    privateAxios(authToken).patch("/product/" + productId + "/release", {
      is_release: false,
    }),
  soldProduct: ({ productId, authToken }) =>
    privateAxios(authToken).patch("/product/" + productId + "/sold"),
  deleteProduct: ({ productId, authToken }) =>
    privateAxios(authToken).delete("/product/" + productId),
  //
  getProductList: (pageConfig) =>
    publicAxios.get(
      `/products?page=${pageConfig.page || 1}&limit=${
        pageConfig.limit || 12
      }&search=${pageConfig.search || ""}&category_id=${
        pageConfig.categoryId || ""
      }`
    ),
  getProduct: (productId) => publicAxios.get("/product/" + productId),
};

export default productApi;
