import axios from "axios";
const privateAxios = (authToken) => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: "Bearer " + authToken,
    },
  });
};
export default privateAxios;
