import axios from "axios";
import {setupInterceptors} from "./interceptors";

export * as userApi from "./apiUser";
export * as postsApi from "./apiPosts";

const AxiosClient=axios.create({
  baseURL: "http://ec2-54-151-167-185.ap-southeast-1.compute.amazonaws.com/v1",
  headers: {
    Accept: "application/json",
  },
});

setupInterceptors(AxiosClient);

export default AxiosClient;
