import { CHANGE_ANIMATEDVALUE, CHANGE_THEME } from "../types";
import Color, { Theme } from "../../constants/Colors";
import { Animated } from "react-native";
import { useRef } from "react";
interface State {
  theme: Theme;
}

const initialState: State = {
  theme: Color["light"],
};

type Action = {
  type: string;
  payload: string;
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: Color[action.payload],
      };

    default:
      return state;
  }
};
