import {
  UPDATE_ANIMATED_VALUE,
  CHANGE_THEME,
  ICategory,
  UPDATE_CATEGORY_VALUE,
} from "../types";
import Color, { Theme } from "../../constants/Colors";
import { Animated } from "react-native";

interface State {
  theme: Theme;
  animatedValue: Animated.Value;
  category: ICategory;
}

const initialState: State = {
  theme: Color["light"],
  animatedValue: new Animated.Value(0),
  category: { key: "", title: "" },
};

type Action = {
  type: string;
  payload: string;
  animatedValue: Animated.Value;
  category: ICategory;
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
    case UPDATE_CATEGORY_VALUE:
      console.log("haha");
      return {
        ...state,
        category: action.category,
      };
    default:
      return state;
  }
};
