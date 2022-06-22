import publicAxios from "./config/publicAxios";
const categoryApi = {
  fetchAll: () =>
    publicAxios.get("https://secondhand-be-test.herokuapp.com/categories"),
};
export default categoryApi;
