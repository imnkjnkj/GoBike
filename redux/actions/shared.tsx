import {CHANGE_THEME} from "../types";

const setThemeApp=(payload: number) => ({
	type: CHANGE_THEME,
	payload,
});

export default {
	setThemeApp,
};