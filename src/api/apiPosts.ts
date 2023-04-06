import axios from "axios";
import AxiosClient from ".";
import { IRequestParams } from "../types/common";

const url = "/news";
const baseURL =
  "http://ec2-54-151-167-185.ap-southeast-1.compute.amazonaws.com/v1";

export const getPosts = (params: IRequestParams) => {
  return AxiosClient.get(`${url}`, { params })
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
};
