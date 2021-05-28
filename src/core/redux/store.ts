import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import sidebarReducer from "components/Sidebar/Sidebar.slice";
import categoryReducer from "components/Category/Category.slice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    category: categoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
