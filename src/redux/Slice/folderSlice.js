import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createFolderApi } from "./folderApi";

const initialState = {
  isLoading: true,
  folder: "root",
  userFolders: [],
  userFiles: [],
  adminFolders: [],
  adminFiles: [],
  currentFolder: "root",
};
export const createFolderAsync = createAsyncThunk(
  "Slice/createFolderApi",
  async (data) => {
    const res = await createFolderApi(data);
    console.log(res);
    return res;
  }
);

export const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createFolderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createFolderAsync.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});

export default folderSlice.reducer;
