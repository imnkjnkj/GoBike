import { createSelector } from "@reduxjs/toolkit"
import { IGlobalStore } from "."
import { State } from "../store"

const getGlobalState = (state: State) => state.global

export const sIsLoading = createSelector(
  getGlobalState,
  (state: IGlobalStore) => state.isLoading > 0
)
