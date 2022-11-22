import axios from "axios";
// import Cookies from "js-cookie";

const urls = {
  development: process.env.NEXT_PUBLIC_PROD_URL,
  production: process.env.NEXT_PUBLIC_PROD_URL,
};

const token = process.env.NEXT_PUBLIC_TOKEN;

const api = axios.create({
  baseURL: urls[process.env.NODE_ENV],
});

api.defaults.headers.common["Authorization"] = `Bearer ${token}` ?? "";

export default api;
