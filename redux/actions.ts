import { Dispatch } from 'redux';

export const updateThemeState = (themeState: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: 'SET_THEME',
      payload: themeState
    });
  };
};
