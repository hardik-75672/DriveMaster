import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useToast } from "@chakra-ui/react";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoginUser, SignUpUser, logOutApi } from "./authApi";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};
export const loginAsync = createAsyncThunk(
  "Slice/authApi",
  async (userData) => {
    console.log(userData);
    const { email, password } = userData;
    const response = await LoginUser(userData);

    return response.user.uid;
  }
);

export const signUpAsync = createAsyncThunk(
  "Slice/SignUpUser",
  async (userData) => {
    console.log(userData);
    const { email, password } = userData;
    const response = await SignUpUser(userData);

    return response.user.uid;
  }
);

export const logOutAsync = createAsyncThunk("Slice/logOutApi", async () => {
  console.log("oppppppppppppppppppppppppp");
  const response = await logOutApi();
  return response.data;
});
export const authSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action);
        state.user = action.payload;
        console.log(state.user);
      })
      .addCase(signUpAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action);
        state.user = action.payload;
        console.log(state.user);
      })
      .addCase(logOutAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logOutAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log(action);
        state.user = null;
      });
  },
});
export const { increment } = authSlice.actions;
export const selectUser = (state) => state.login.user;
export default authSlice.reducer;
