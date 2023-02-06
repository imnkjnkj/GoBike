import { Animated } from "react-native";
import {UPDATE_ANIMATED_VALUE, CHANGE_THEME, ICategory, UPDATE_CATEGORY_VALUE} from "../types";

const setThemeApp=(payload: string) => ({
	type: CHANGE_THEME,
	payload,
});
const setAnimatedValue=(payload: Animated.Value) => ({
	type: UPDATE_ANIMATED_VALUE,
	payload,
});
const setCategoryValue=(payload: ICategory) => ({
	type: UPDATE_CATEGORY_VALUE,
	payload,
});
export default {
	setThemeApp,
	setAnimatedValue,
	setCategoryValue,
};