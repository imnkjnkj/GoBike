import {CHANGE_THEME} from "../types";

const setThemeApp=(payload: string) => ({
	type: CHANGE_THEME,
	payload,
});

export default {
	setThemeApp,
};