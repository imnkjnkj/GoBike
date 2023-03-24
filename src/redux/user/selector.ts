
import { createSelector } from "@reduxjs/toolkit"
import { IUserInformationSelector, IUserProfileRes, USER_ROLES_NAME } from "../../types/users"
import { State } from "../store"

const getUserProfile = (state: State) => state.user.userProfile

export const sGetUserPermissions = createSelector(
  getUserProfile,
  (state: IUserProfileRes) => state.roles?.map((role) => role.name)
)

export const sIsAdmin = createSelector(
  getUserProfile,
  (state: IUserProfileRes) =>
    state.roles?.map((role) => role.name)?.includes(USER_ROLES_NAME.ADMIN)
)

export const sGetUserId = createSelector(
  getUserProfile,
  (state: IUserProfileRes) => state.id
)

export const sIsExpiredToken = createSelector(
  getUserProfile,
  (state: IUserProfileRes) => state.exp <= 0
)

export const sGetUserInform = createSelector(
  getUserProfile,
  (state: IUserProfileRes) =>
    ({
      id: state.id,
      name: state.name,
      avatar: state.avatar,
      surname: state.surname,
    } as IUserInformationSelector)
)
