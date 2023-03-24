import { configureStore } from "@reduxjs/toolkit"
import rootReducer, { combinedReducer } from "./rootReducer"

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type State = ReturnType<typeof combinedReducer>
