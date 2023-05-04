import {createSlice} from "@reduxjs/toolkit";

import {extraReducers} from "./thunkApi";
import {bikesReducer} from "./reducer";
import {IBikesStore} from "../../types/bikes";

export const initialState: IBikesStore={
  dashboardData: {
    totalPages: 0,
    totalElements: 0,
    size: 0,
    content: [],
    number: 0,
    sort: {
      empty: true,
      sorted: true,
      unsorted: true,
    },
    numberOfElements: 0,
    pageable: {
      offset: 0,
      sort: {
        empty: true,
        sorted: true,
        unsorted: true,
      },
      unpaged: true,
      pageNumber: 0,
      pageSize: 0,
      paged: true,
    },
    first: true,
    last: true,
    empty: true,
  },
  detailData: {
    id: 0,
    name: "",
    thumbnail: "",
    createdAt: new Date(),
    updatedAt: new Date(),
    categoryId: 0,
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
