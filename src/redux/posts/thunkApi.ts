import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { postsApi, userApi } from "../../api";
import { IRequestParams } from "../../types/common";
import { IDashboarData, INewsStore } from "../../types/posts";
import { ILoginGoogle, IUserLogin } from "../../types/users";

export const getNews = createAsyncThunk(
  "news",
  async (params: IRequestParams) => {
    const { page = 0, size = 1000, sort = "updatedAt", categoryId } = params;
    return await postsApi.getPosts({ page, size, sort, categoryId });
  }
);
export const extraReducers = (
  builders: ActionReducerMapBuilder<INewsStore>
) => {
  builders.addCase(
    getNews.fulfilled,
    (state: INewsStore, action: PayloadAction<IDashboarData>) => {  
      state.dashboardData = action.payload
    }
  );
};
