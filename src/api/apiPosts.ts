import axios from "axios";
import AxiosClient from ".";
import {IRequestParams} from "../types/common";

const url="/news";

export const getPosts=(params: IRequestParams) => {
  return AxiosClient.get(`${url}`,{params})
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
};
