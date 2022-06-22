import axios from "axios";

const publicAxios = axios.create({
  baseURL: process.env.REACT_APP_API,
});
export default publicAxios;
