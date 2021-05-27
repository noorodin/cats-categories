import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "core/store";
import { getData } from "core/Axios/axios.api";
import { ICategories } from "types/category";

export interface CategoryState {
  items: ICategories[];
  categoryId: number;
  status: "idle" | "loading" | "failed";
}

const initialState: CategoryState = {
  items: [],
  categoryId: -1,
  status: "idle",
};

export const getCategoryAsync = createAsyncThunk(
  "category/getCategory",
  async (id: number) => {
    const response = await getData(
      `/images/search?limit=10&category_ids=${id}`
    );
    return response.data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCategoryAsync.fulfilled, (state, action) => {
        state.status = "idle";

        if (action?.meta?.arg === state.categoryId) {
          state.items.push(...action.payload);
        } else {
          state.items = action.payload;
          state.categoryId = action.meta.arg;
        }
      });
  },
});

export const category = (state: RootState) => state.category;

export default categorySlice.reducer;
