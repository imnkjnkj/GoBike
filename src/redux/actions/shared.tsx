import { Animated } from "react-native";
import {UPDATE_ANIMATED_VALUE, CHANGE_THEME} from "../types";

const setThemeApp=(payload: string) => ({
	type: CHANGE_THEME,
	payload,
});
const setAnimatedValue=(payload: Animated.Value) => ({
	type: UPDATE_ANIMATED_VALUE,
	payload,
});

export default {
	setThemeApp,
	setAnimatedValue
};