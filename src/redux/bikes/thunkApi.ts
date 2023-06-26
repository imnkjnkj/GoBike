import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import {bikesApi} from "../../api";
import {IRequestParams} from "../../types/common";
import {
  IBikesDetail,
  IBikesStore,
  IDashboardData,
  IParamsFilterBikes,
} from "../../types/bikes";

export const getBikes=createAsyncThunk(
  "bikes",
  async (params: IRequestParams) => {
    const {
      page=0,
      size=1000,
      sort="updatedAt",
      categoryId,
      brand,
      riderHeight,
      weightLimit,
      riderAge,
      wheelSize,
    }=params;
    const bikesList=await bikesApi.getBikes({page,size,sort,categoryId});
    const filteredList=() => {
      if(categoryId) {
        bikesList.content=bikesList.content.filter(
          (item: IBikesDetail) => item.categoryId===categoryId
        );
      }
      if(brand) {
        bikesList.content=bikesList.content.filter(
          (item: IBikesDetail) => item.information.brand===brand
        );
      }
      if(riderHeight) {
        bikesList.content=bikesList.content.filter(
          (item: IBikesDetail) =>
            item.suitableUser.recommendedHeight===riderHeight
        );
      }
      if(weightLimit) {
        bikesList.content=bikesList.content.filter(
          (item: IBikesDetail) =>
            item.suitableUser.bikeWeightLimit===weightLimit
        );
      }
      if(riderAge) {
        bikesList.content=bikesList.content.filter(
          (item: IBikesDetail) => item.suitableUser.recommendedAge===riderAge
        );
      }
      if(wheelSize) {
        bikesList.content=bikesList.content.filter(
          (item: IBikesDetail) => item.wheelset.wheelSize===wheelSize
        );
      } else bikesList.content=bikesList.content;
    };
    filteredList();
    return bikesList;
  }
);
export const extraReducers=(
  builders: ActionReducerMapBuilder<IBikesStore>
) => {
  builders.addCase(
    getBikes.fulfilled,
    (state: IBikesStore,action: PayloadAction<IDashboardData>) => {
      state.dashboardData=action.payload;
    }
  );
};
