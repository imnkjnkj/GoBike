import { Animated } from "react-native";
import {CHANGE_ANIMATEDVALUE, CHANGE_THEME} from "../types";

const setThemeApp=(payload: string) => ({
	type: CHANGE_THEME,
	payload,
});
const setAnimatedValue=(payload: Animated.Value) => ({
	type: CHANGE_ANIMATEDVALUE,
	payload,
});

export default {
	setThemeApp,
	setAnimatedValue
};