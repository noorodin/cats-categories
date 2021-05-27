import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "core/store";
import { getData } from "core/Axios/axios.api";
import { IMenuItem } from "types/sidebar";

export interface SidebarState {
  menuItems: IMenuItem[];
  isSidebarOpen: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: SidebarState = {
  menuItems: [{}],
  isSidebarOpen: true,
  status: "idle",
};

export const getCategoriesAsync = createAsyncThunk(
  "sidebar/getMenuItems",
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
      state.isSidebarOpen = !state.isSidebarOpen;
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
