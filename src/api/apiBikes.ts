import axios from "axios";
import AxiosClient from ".";
import {IRequestParams} from "../types/common";
import {listDataBikes} from "./data/listBike";

const url="/bikes";

export const getBikes=() => {
	return listDataBikes
};
