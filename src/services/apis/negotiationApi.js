import privateAxios from "./config/privateAxios";

const negotiationApi = {
  postBuyerNego: ({ data, authToken }) =>
    privateAxios(authToken).post("/negotiation", data),
  getSellerNegoList: ({ data, authToken }) =>
    privateAxios(authToken).get(
      `/negotiations/me?page=${data.page || 1}&limit=${data.limit || 12}`
    ),
  rejectNego: ({ negoId, authToken }) =>
    privateAxios(authToken).patch(`/negotiation/${negoId}/reject`),
  acceptNego: ({ negoId, authToken }) =>
    privateAxios(authToken).patch(`/negotiation/${negoId}/confirm`),
};

export default negotiationApi;
