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
  currentFolder: ["Root"],
};
export const createFolderAsync = createAsyncThunk(
  "Slice/createFolderApi",
  async ({ data, str }) => {
    console.log(str);
    const res = await createFolderApi(data, str);

    return res.res;
  }
);
const serializeTimestamp = (timestamp) => {
  if (timestamp && timestamp.toMillis) {
    return timestamp.toMillis(); // Convert Firestore Timestamp to milliseconds
  }
  return timestamp;
};

export const getdataAsync = createAsyncThunk(
  "Slice/getDataApi",
  async (path) => {
    console.log(path);
    const res = await getDataApi(path);
    const data = res.querySnapshot.docs;
    const arr = data.map((data) => {
      const temp = data.data();
      const val = {
        ...temp,
        createdAt: serializeTimestamp(temp.createdAt),
        updatedAt: serializeTimestamp(temp.updatedAt),
        lastAccesed: serializeTimestamp(temp.lastAccesed),
        userId: data.id,
      };
      return val;
    });
    console.log(arr);
    return arr;
  }
);

export const currentChangeAsync = createAsyncThunk(
  "Slice/currrentFolderChange",
  async (id) => {
    const res = await currrentFolderChange(id);

    return id;
  }
);
export const currentChangePOPAsync = createAsyncThunk("Slice/", async (id) => {
  console.log("p");
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
        state.currentFolder.push(action.payload);
      })
      .addCase(currentChangePOPAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(currentChangePOPAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.currentFolder.pop();
      });
  },
});
export const selectUserFolder = (state) => state.folder.userFolders;
export const selectisLoading = (state) => state.folder.isLoading;
export const selectCurrentFolder = (state) => state.folder.currentFolder;
export default folderSlice.reducer;
