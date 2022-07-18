import privateAxios from "./config/privateAxios";

const negotiationApi = {
  postBuyerNego: ({ data, authToken }) =>
    privateAxios(authToken).post("/negotiation", data),
  getSellerNegoList: ({ data, authToken }) =>
    privateAxios(authToken).get(
      `/negotiations/me?page=${data.page || 1}&limit=${data.limit || 12}`
    ),
  getNego: ({ negoId, authToken }) =>
    privateAxios(authToken).get("/negotiation/" + negoId),
  // rejectNego: ({ negoId, authToken }) =>
  //   privateAxios(authToken).patch(`/negotiation/${negoId}/reject`),
  rejectNego: ({ negoId, authToken }) =>
    privateAxios(authToken).patch(`/negotiation/${negoId}`, { status: false }),
  acceptNego: ({ negoId, authToken }) =>
    privateAxios(authToken).patch(`/negotiation/${negoId}/confirm`),
  doneNego: ({ negoId, authToken }) =>
    privateAxios(authToken).patch(`/negotiation/${negoId}`, { status: true }),
};

export default negotiationApi;
