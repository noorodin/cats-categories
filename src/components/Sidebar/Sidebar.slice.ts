import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "core/store";
import { getData } from "core/Axios/axios.api";
import { ICategory } from "types/category";

export interface SidebarState {
  menuItems: ICategory[];
  isSidebarOpen: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: SidebarState = {
  menuItems: [{}],
  isSidebarOpen: window.innerWidth > 1200,
  status: "idle",
};

export const getCategoriesAsync = createAsyncThunk(
  "sidebar/getCategories",
  async () => {
    const response = await getData("/categories");
    return response.data;
  }
);

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen =
        window?.innerWidth > 1200 ? true : !state.isSidebarOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.menuItems = action.payload;
      });
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export const sidebar = (state: RootState) => state.sidebar;

export default sidebarSlice.reducer;
