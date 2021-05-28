import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "core/redux/store";
import { getData } from "core/axios/axios.api";
import { ICategory } from "types/category";

export interface SidebarState {
  menuItems: ICategory[];
  isSidebarMenuOpen: boolean;
  isMobile: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: SidebarState = {
  menuItems: [],
  isSidebarMenuOpen: false,
  isMobile: false,
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
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
    toggleSidebarMenu: (state) => {
      state.isSidebarMenuOpen = state.isMobile ? !state.isSidebarMenuOpen : true;
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

export const { toggleSidebarMenu, setIsMobile } = sidebarSlice.actions;

export const sidebar = (state: RootState) => state.sidebar;

export default sidebarSlice.reducer;
