import { Animated } from "react-native";
import { Theme } from "../constants/Colors";
import { ICategory } from "../redux/types";

export interface IShared {
  theme: Theme;
  animatedValue: Animated.Value;
  category: ICategory;
  categoryId?: number;
}
export interface IRequestParams {
  page?: number;
  size?: number;
  sort?: string;
  categoryId?: number;
  brand?: string;
  riderHeight?: string;
  weightLimit?: string;
  riderAge?: string;
  wheelSize?: string;
}
