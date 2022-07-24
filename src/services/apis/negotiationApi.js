import privateAxios from "./config/privateAxios";

const negotiationApi = {
  postBuyerNego: ({ data, authToken }) =>
    privateAxios(authToken).post("/negotiation", data),
  getSellerNegoList: ({ data, authToken }) =>
    privateAxios(authToken).get(
      `/negotiations/me?page=${data.page || 1}&limit=${
        data.limit || 12
      }&filter=${data.filter || ""}`
    ),
  getBuyerNegoList: ({ data, authToken }) =>
    privateAxios(authToken).get(
      `/negotiations?page=${data.page || 1}&limit=${data.limit || 12}&filter=${
        data.filter || " "
      }`
    ),
  getNego: ({ negoId, authToken }) =>
    privateAxios(authToken).get("/negotiation/" + negoId),
  rejectNego: ({ negoId, authToken }) =>
    privateAxios(authToken).patch(`/negotiation/${negoId}/reject`),
  acceptNego: ({ negoId, authToken }) =>
    privateAxios(authToken).patch(`/negotiation/${negoId}/confirm`),
  doneNego: ({ negoId, authToken }) =>
    privateAxios(authToken).patch(`/negotiation/${negoId}`, { status: true }),
};

export default negotiationApi;
