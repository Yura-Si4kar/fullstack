import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import authReducer from "./slices/authSlice";

const logger = createLogger({
  collapsed: true,
});

const store = configureStore({
  reducer: combineReducers({
    authorization: authReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default store;