import {
  CHANGE_THEME,
  ICategory,
  UPDATE_ANIMATED_VALUE,
  UPDATE_CATEGORY_VALUE,
} from "../types";
import { Animated } from "react-native";
import Color, { Theme } from "../../constants/Colors";
import { PayloadAction } from "@reduxjs/toolkit";
import { IShared } from "../../types/common";

export const sharedReducer = {
  setThemeApp: (state: IShared, action: PayloadAction<string>) => {
    state.theme = Color[action.payload];
  },
  setAnimatedValue: (state: IShared, action: PayloadAction<Animated.Value>) => {
    state.animatedValue = action.payload;
  },
  setCategoryValue: (state: IShared, action: PayloadAction<ICategory>) => {
    state.category = action.payload;
  },
};
