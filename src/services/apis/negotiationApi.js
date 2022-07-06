import privateAxios from "./config/privateAxios";

const negotiationApi = {
  postBuyerNego: ({ data, authToken }) =>
    privateAxios(authToken).post("/negotiation", data),
};

export default negotiationApi;
