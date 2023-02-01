import {CHANGE_THEME} from '../types';

interface State {
	theme: string;
}
const initialState: State={
	theme: 'light'
};

type Action={
	type: string;
	payload: string;
}

export default (state: State=initialState,action: Action) => {
	switch(action.type) {
		case CHANGE_THEME:
			return {
				...state,
				theme: action.payload
			};
		default:
			return state;
	}
};