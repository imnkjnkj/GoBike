import axios from "axios";
import AxiosClient from ".";
import { IRequestParams } from "../types/common";
import { listDataBikes } from "./data/listBike";

const url = "/bicycle";

export const getBikes = (params: IRequestParams) => {
  return AxiosClient.get(`${url}`, { params })
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));
};
