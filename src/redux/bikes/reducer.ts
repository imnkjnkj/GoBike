import {PayloadAction} from "@reduxjs/toolkit"
import {IBikesStore,IBikesDetail,IDashboardData} from "../../types/bikes"
import {bikesApi} from "../../api"
export const bikesReducer={
  setDetailData: (state: IBikesStore,action: PayloadAction<IBikesDetail>) => {
    state.detailData=action.payload
  },
}

