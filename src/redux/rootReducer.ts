import { AnyAction, combineReducers, Reducer } from "redux"
import posts from "./posts"
import shared from "./shared"
import { State } from "./store"
import user from "./user"

export const DESTROY_ACTION = "DESTROY_STORE"

export const combinedReducer = combineReducers({
  shared: shared,
  user: user,
  posts: posts
})

const rootReducer: Reducer = (state: State, action: AnyAction) => {
  if (action.type === DESTROY_ACTION) {
    state = {} as State
  }
  return combinedReducer(state, action)
}

export default rootReducer
