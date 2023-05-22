import { createSelector } from "@reduxjs/toolkit";
import { IUserProfileRes, USER_ROLES_NAME } from "../../types/users";
import { State } from "../store";

const getUserProfile = (state: State) => state.user.userProfile;

export const sGetUserPermissions = createSelector(
  getUserProfile,
  (state: IUserProfileRes) => state.roles
);

export const sIsAdmin = createSelector(
  getUserProfile,
  (state: IUserProfileRes) =>
    state.roles?.some((x) => x.name === USER_ROLES_NAME.ADMIN)
);

export const sGetUserId = createSelector(
  getUserProfile,
  (state: IUserProfileRes) => state.id
);
