import { PayloadAction } from "@reduxjs/toolkit"
import { INewsStore, IPostsDetail } from "../../types/posts"
export const postsReducer = {
    setDetailData: (state: INewsStore, action: PayloadAction<IPostsDetail>) => {
        state.detailData = action.payload
      },
}

