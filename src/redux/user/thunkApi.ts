import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import {IUserStore} from ".";
import {userApi} from "../../api";
import {ILoginGoogle,IUserLogin,IUserProfileRes} from "../../types/users";
import {saveStorage} from "../../utils/asyncStorage";

export const loginUser=createAsyncThunk(
  "user/login",
  async (token: IUserLogin) => {
    return await userApi.login(token);
  }
);

export const getUser=createAsyncThunk("user/getUser",async () => {
  return await userApi.getUserInfor();
});
export const extraReducers=(
  builders: ActionReducerMapBuilder<IUserStore>
) => {
  builders.addCase(
    loginUser.fulfilled,
    (state: IUserStore,action: PayloadAction<ILoginGoogle>) => {
      saveStorage("accessToken",action.payload.accessToken);
      state.isLogIn=true;
    }
  );
  builders.addCase(
    getUser.fulfilled,
    (state: IUserStore,action: PayloadAction<IUserProfileRes>) => {
      state.userProfile=action.payload;
    }
  );
};
