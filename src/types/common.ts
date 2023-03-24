import { Animated } from "react-native";
import { Theme } from "../constants/Colors";
import { ICategory } from "../redux/types";

export interface IShared {
    theme: Theme;
    animatedValue: Animated.Value;
    category: ICategory;
}