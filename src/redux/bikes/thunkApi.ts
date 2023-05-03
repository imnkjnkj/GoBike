import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import {bikesApi} from "../../api";
import {IRequestParams} from "../../types/common";
import {IBikesStore,IDashboardData} from "../../types/bikes";

export const getBikes=createAsyncThunk(
  "bikes",
  async () => {
    //const { page = 0, size = 1000, sort = "updatedAt", categoryId } = params;
    //return await postsApi.getPosts({ page, size, sort, categoryId });
    return await bikesApi.getBikes()
  }
);
export const extraReducers=(
  builders: ActionReducerMapBuilder<IBikesStore>
) => {
  builders.addCase(
    getBikes.fulfilled,
    (state: IBikesStore,action: PayloadAction<IDashboardData>) => {
      state.dashboardData=action.payload
    }
  );
};
