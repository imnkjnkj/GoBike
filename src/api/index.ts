import axios from "axios";
import { setupInterceptors } from "./interceptors";

export * as userApi from "./apiUser";

const AxiosClient = axios.create({
  baseURL: "http://10.10.10.18:8089",
  headers: {
    Accept: "application/json",
  },
});

setupInterceptors(AxiosClient);

export default AxiosClient;
