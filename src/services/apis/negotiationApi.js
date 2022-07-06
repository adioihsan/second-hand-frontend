import privateAxios from "./config/privateAxios";

const negotiationApi = {
  postBuyerNego: ({ data, authToken }) =>
    privateAxios(authToken).post("/negotiation", data),
  getSellerNegoList: ({ data, authToken }) =>
    privateAxios(authToken).get(
      `/negotiations/me?page=${data.page || 1}&limit=${data.limit || 12}`
    ),
};

export default negotiationApi;
