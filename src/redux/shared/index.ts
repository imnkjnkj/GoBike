import {
    UPDATE_ANIMATED_VALUE,
    CHANGE_THEME,
    ICategory,
    UPDATE_CATEGORY_VALUE,
  } from "../types";
  import Color, { Theme } from "../../constants/Colors";
  import { Animated } from "react-native";
import { createSlice } from "@reduxjs/toolkit";
import { sharedReducer } from "./reducer";
  
  interface State {
    theme: Theme;
    animatedValue: Animated.Value;
    category: ICategory;
  }
  
  const initialState: State = {
    theme: Color["light"],
    animatedValue: new Animated.Value(0),
    category: { key: "news", title: "NEWS" },
  };
  
const userSlice = createSlice({
  name: "shared",
  initialState,
  reducers: sharedReducer,
  
})
export const {
    setThemeApp,
    setAnimatedValue,
    setCategoryValue
} = userSlice.actions
export default userSlice.reducer
