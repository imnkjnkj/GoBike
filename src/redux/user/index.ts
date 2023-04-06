import { createSlice } from "@reduxjs/toolkit";

import { extraReducers } from "./thunkApi";
import { userReducer } from "./reducer";
import { DataUser, IUserProfileRes, IUserRole } from "../../types/users";

export interface IUserStore {
  token: string;
  users: DataUser[];
  errorMessage: string;
  userRoles: IUserRole[];
  roleName: string;
  userProfile: IUserProfileRes;
  isLogIn: boolean;
}
export const initialState: IUserStore = {
  token: "",
  users: [],
  errorMessage: "",
  userRoles: [],
  roleName: "",
  userProfile: {
    id: 0,
    username: "",
    email: "",
    roles: [],
  },
  isLogIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: userReducer,
  extraReducers: extraReducers,
});
export const { setRoleName, logOutUser } = userSlice.actions;
export default userSlice.reducer;
