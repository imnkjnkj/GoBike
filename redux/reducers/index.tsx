import {combineReducers} from 'redux';
import shared from './shared';


const appReducer=combineReducers({
	shared,
});

export default appReducer;
export type State=ReturnType<typeof appReducer>;