import { PayloadAction } from "@reduxjs/toolkit";
import { initialState, IUserStore } from ".";
import { ILoginGoogle } from "../../types/users";
import { removeStorage } from "../../utils/asyncStorage";
export const userReducer = {
  setRoleName: (state: IUserStore, action: PayloadAction<string>) => {
    state.roleName = action.payload;
  },
  logOutUser: (state: IUserStore) => {
    removeStorage("accessToken");
    state.isLogIn = false;
    state.userProfile = initialState.userProfile
  },
};
