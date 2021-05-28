import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "core/redux/store";
import { getData } from "core/axios/axios.api";
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
  async (params: any) => {
    const [id] = params;
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
      .addCase(getCategoryAsync.pending, (state, action) => {
        state.status = "loading";
        const [id] = action.meta.arg;
        state.categoryId = id;
      })
      .addCase(getCategoryAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const [id, type] = action.meta.arg;

        if (type === "moreButton") {
          state.items.push(...action.payload);
        } else {
          state.items = action.payload;
        }
      });
  },
});

export const category = (state: RootState) => state.category;

export default categorySlice.reducer;
