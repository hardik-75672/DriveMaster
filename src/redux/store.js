import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./Slice/authSlice";
import folderReducer from "./Slice/folderSlice";
export const store = configureStore({
  reducer: { login: loginReducer, folder: folderReducer },
});
