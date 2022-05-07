import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { carsReducer } from "./slices";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducers = {
  cars: carsReducer,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(reducers)
);
/**
 * createStore
 *
 * Features:
 * - Creates a redux store
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

export const createStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof createStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof createStore.dispatch;
