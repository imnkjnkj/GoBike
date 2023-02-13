import { Animated } from "react-native";
import {UPDATE_ANIMATED_VALUE, CHANGE_THEME, ICategory, UPDATE_CATEGORY_VALUE} from "../types";

const setThemeApp=(payload: string) => ({
	type: CHANGE_THEME,
	payload,
});
const setAnimatedValue=(animatedValue: Animated.Value) => ({
	type: UPDATE_ANIMATED_VALUE,
	animatedValue,
});
const setCategoryValue=(category: ICategory) => ({
	type: UPDATE_CATEGORY_VALUE,
	category,
});
export default {
	setThemeApp,
	setAnimatedValue,
	setCategoryValue,
};