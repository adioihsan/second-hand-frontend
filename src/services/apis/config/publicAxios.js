import axios from "axios";

const publicAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // headers: {
  //   "Content-Type": "application/x-www-form-urlencoded",
  // },
});
export default publicAxios;
