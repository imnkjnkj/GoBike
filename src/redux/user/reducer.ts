import { PayloadAction } from "@reduxjs/toolkit"
import { IUserStore } from "."
export const userReducer = {
  setRoleName: (state: IUserStore, action: PayloadAction<string>) => {
    state.roleName = action.payload
  },
}
