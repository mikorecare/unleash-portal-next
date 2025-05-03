import { combineReducers } from "@reduxjs/toolkit"
import { authReducer } from "./slices/auth.slice"
import { errorReducer } from "./reducers/errorHandler.reducer"

const rootReducer = combineReducers({
  Auth: authReducer,
  Error: errorReducer
})

export default rootReducer