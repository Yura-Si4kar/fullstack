import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import authReducer from "./slices/authSlice";
import usersReducer from "./slices/usersSlice";
import rolesReducer from "./slices/rolesSlice";

const logger = createLogger({
  collapsed: true,
});

const store = configureStore({
  reducer: combineReducers({
    authorization: authReducer,
    users: usersReducer,
    roles: rolesReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default store;