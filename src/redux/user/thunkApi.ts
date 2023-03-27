import {ActionReducerMapBuilder,createAsyncThunk,PayloadAction} from "@reduxjs/toolkit"
import {IUserStore} from "."
import {userApi} from "../../api"
import {ILoginGoogle,IUserLogin, IUserProfileRes} from "../../types/users"

export const loginUser=createAsyncThunk(
  "user/login",
  async (token: IUserLogin) => {
    console.log(token);
    
    return await userApi.login(token)
  }
)
export const extraReducers=(
  builders: ActionReducerMapBuilder<IUserStore>
) => {
  builders.addCase(
    loginUser.fulfilled,
    (state: IUserStore,action: PayloadAction<IUserProfileRes>) => {
      state.userProfile= action.payload
      state.isLogIn=true;
    }
  )

}