import { ActionReducerMapBuilder, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { IUserStore } from "."
import { userApi } from "../../api"
import { ILoginGoogle, IUserLogin } from "../../types/users"

export const loginUser = createAsyncThunk(
  "user/login",
  async (token: string) => {
    return await userApi.login(token)
  }
)
export const extraReducers = (
  builders: ActionReducerMapBuilder<IUserStore>
) => {
  builders.addCase(
    loginUser.fulfilled,
    (state: IUserStore, action: PayloadAction<ILoginGoogle>) => {
      console.log(action.payload);
      
    }
  )

}