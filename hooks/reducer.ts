import { State, Actions, initialState } from '../types';

const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
