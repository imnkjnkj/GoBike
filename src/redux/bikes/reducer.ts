import { PayloadAction } from "@reduxjs/toolkit";
import {
  IBikesStore,
  IBikesDetail,
  IDashboardData,
  IParamsFilterBikes,
} from "../../types/bikes";
import { bikesApi } from "../../api";
export const bikesReducer = {
  setDetailData: (state: IBikesStore, action: PayloadAction<IBikesDetail>) => {
    state.detailData = action.payload;
  },
  filteredList: (
    state: IBikesStore,
    action: PayloadAction<IParamsFilterBikes>
  ) => {
    const filteredList = (params?: IParamsFilterBikes) => {
      if (params?.categoryId)
        return state.dashboardData.content.filter(
          (item) => item.categoryId === params?.categoryId
        );
      else return state.dashboardData.content;
    };
    state.dashboardData.content = filteredList(action.payload);
  },
};
