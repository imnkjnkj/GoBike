import { createSlice } from "@reduxjs/toolkit";

import { extraReducers } from "./thunkApi";
import { postsReducer } from "./reducer";
import { DataUser, IUserProfileRes, IUserRole } from "../../types/users";
import { INewsStore } from "../../types/posts";

const initialState: INewsStore = {
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
    title: "",
    description: "",
    thumbnail: "",
    coverImage: "",
    sapo: "",
    status: "",
    category: {
      id: 0,
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: postsReducer,
  extraReducers: extraReducers,
});
export const {} = postsSlice.actions;
export default postsSlice.reducer;
