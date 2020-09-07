import axios from "axios";

const baseAxiosMethod = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});

export default baseAxiosMethod;
