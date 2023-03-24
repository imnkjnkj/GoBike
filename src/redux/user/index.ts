import { createSlice } from "@reduxjs/toolkit"

import { extraReducers } from "./thunkApi"
import { userReducer } from "./reducer"
import { DataUser, IUserProfileRes, IUserRole } from "../../types/users"

export interface IUserStore {
  token: string
  users: DataUser[]
  errorMessage: string
  userRoles: IUserRole[]
  roleName: string
  userProfile: IUserProfileRes
}
const initialState: IUserStore = {
  token: "",
  users: [],
  errorMessage: "",
  userRoles: [],
  roleName: "",
  userProfile: {
    id: NaN,
    createdBy: "",
    createdTime: "",
    updatedBy: "",
    updatedTime: "",
    deletedBy: NaN,
    deletedTime: "",
    isDeleted: false,
    userName: "",
    emailAddress: "",
    name: "",
    surname: "",
    phoneNumber: "",
    avatar: "",
    komuUserName: "",
    userCode: NaN,
    roles: [],
    iat: NaN,
    exp: 0,
  },
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: userReducer,
  extraReducers: extraReducers,
})
export const {
  setRoleName,
} = userSlice.actions
export default userSlice.reducer
