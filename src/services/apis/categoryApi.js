import publicAxios from "./config/publicAxios";
const categoryApi = {
  fetchAll: () => publicAxios.get("/categories"),
};
export default categoryApi;
