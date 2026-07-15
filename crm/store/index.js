import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import authReducer from "./slices/authSlice";
import usersReducer from "./slices/usersSlice";
import rolesReducer from "./slices/rolesSlice";
import clientsReducer from "./slices/clientsSlice";

const logger = createLogger({
  collapsed: true,
});

const store = configureStore({
  reducer: combineReducers({
    authorization: authReducer,
    users: usersReducer,
    roles: rolesReducer,
    clients: clientsReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default store;