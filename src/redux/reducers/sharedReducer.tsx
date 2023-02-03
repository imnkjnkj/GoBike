import { UPDATE_ANIMATED_VALUE, CHANGE_THEME } from "../types";
import Color, { Theme } from "../../constants/Colors";
import { Animated } from "react-native";
import { useRef } from "react";
interface State {
  theme: Theme;
  animatedValue: Animated.Value;
}

const initialState: State = {
  theme: Color["light"],
  animatedValue: new Animated.Value(0),
};

type Action = {
  type: string;
  payload: string ;
  animatedValue: Animated.Value
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: Color[action.payload],
      };
      case UPDATE_ANIMATED_VALUE:
        return {
          ...state,
          animatedValue: action.animatedValue,
        };
    default:
      return state;
  }
};
