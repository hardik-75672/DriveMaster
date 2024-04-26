import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createFolderApi, currrentFolderChange, getDataApi } from "./folderApi";
import { useDispatch } from "react-redux";
const initialState = {
  isLoading: true,
  folder: "root",
  userFolders: [],
  userFiles: [],
  adminFolders: [],
  adminFiles: [],
  currentFolder: [],
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
  const res = await getDataApi();
  const data = res.querySnapshot.docs;
  const arr = data.map((data) => {
    console.log(data.data());
    const val = { userData: data.data(), userID: data.id };
    return val;
  });
  return arr;
});

export const currentChangeAsync = createAsyncThunk(
  "Slice/currrentFolderChange",
  async (id) => {
    const res = await currrentFolderChange(id);

    return id;
  }
);
export const currentChangePOPAsync = createAsyncThunk("Slice/", async (id) => {
  const res = await currrentFolderChange(id);

  return id;
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
      })
      .addCase(currentChangeAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(currentChangeAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload);
        state.currentFolder.push(action.payload);
      })
      .addCase(currentChangePOPAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(currentChangePOPAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action.payload);
        state.currentFolder.pop();
      });
  },
});
export const selectUserFolder = (state) => state.folder.userFolders;
export const selectisLoading = (state) => state.folder.isLoading;
export const selectCurrentFolder = (state) => state.folder.currentFolder;
export default folderSlice.reducer;
