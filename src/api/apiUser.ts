import axios from "axios";
import AxiosClient from ".";

const url = "/user";
const baseURL =
  "http://ec2-54-151-167-185.ap-southeast-1.compute.amazonaws.com/v1";
const headers = {
  Accept: "application/json",
};
export const login = (data: any) => {
  return AxiosClient
    .post(`${url}/authenticate`, data)
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((e) => console.log(e));
};
export const getUserInfor = () => {
  return AxiosClient
    .get(`${url}/info`)
    .then((res) => {
      console.log(res.data);
      
      return res.data;
    })
    .catch((e) => console.log(e));
};
export const logout = () => {
  return AxiosClient.get("/auth/logout").then((res) => res.data);
};
