import {createSlice} from "@reduxjs/toolkit";

import {extraReducers} from "./thunkApi";
import {bikesReducer} from "./reducer";
import {IBikesStore} from "../../types/bikes";

export const initialState: IBikesStore={
  dashboardData: {
    content: [],
  },
  detailData: {
    id: "",
    name: "",
    thumbnail: "",
    createdAt: new Date(),
    bikesCategory: "",
    images: [],
    information: {
      paintMaterial: "",
      handlebarStemMaterial: "",
      handlebar: "",
      saddleMaterial: "",
      seatpost: "",
      seatpostMaterial: "",
      steel: "",
      bicycleSaddleBrand: "",
      features: "",
      brand: "",
    },
    suitableUser: {
      recommendedAge: "",
      recommendedHeight: "",
      bikeWeightLimit: "",
      pillionWeightLimit: "",
      sizeWeight: "",
    },
    transmissionSystem: {
      shiftLever: "",
      shiftLeverType: "",
      crankset: "",
      brakeSystem: "",
      brakeLever: "",
      brakeType: "",
      cassette: "",
      chain: "",
      chainring: "",
    },
    frame: {
      frame: "",
      fuspension: "",
    },
    wheelset: {
      wheelSize: "",
      rim: "",
      hub: "",
      spoke: "",
      tire: "",
      valveType: "",
      brand: "",
    }
  }
};

const bikesSlice=createSlice({
  name: "posts",
  initialState,
  reducers: bikesReducer,
  extraReducers: extraReducers,
});
export const {setDetailData}=bikesSlice.actions;
export default bikesSlice.reducer;
