import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createFolderApi, getDataApi } from "./folderApi";
import { useDispatch } from "react-redux";
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

    console.log(res.res.id);
    return res.res.id;
  }
);

export const getdataAsync = createAsyncThunk("Slice/getDataApi", async () => {
  console.log("gcghjkjh");
  const res = await getDataApi();
  console.log("opop");
  console.log(res.querySnapshot.docs);
  const data = res.querySnapshot.docs;
  const arr = data.map((data) => {
    console.log(data.data());
    return data.data();
  });
  return arr;
});

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
        state.userFolders = [...state.userFolders, action.payload];
        state.isLoading = false;
      })
      .addCase(getdataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getdataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userFolders = action.payload;
        state.isLoading = false;
      });
  },
});
export const selectUserFolder = (state) => state.folder.userFolders;
export const selectisLoading = (state) => state.folder.isLoading;
export default folderSlice.reducer;
