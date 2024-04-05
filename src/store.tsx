import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "@/services/homeServices";
import { combineReducers } from "redux";
import friendReducer from "./slices/friendSlice";

const reducers = combineReducers({
  [homeApi.reducerPath]: homeApi.reducer,
  friendReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
