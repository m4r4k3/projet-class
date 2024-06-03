import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { Axios } from "../axios";

const res = createAsyncThunk("user/inintiate", async function () {
  console.log("dd");
  return Axios.get("/api/islogged").then((res) =>  res.data );
});

const slice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(res.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.loggedIn = action.payload.loggedIn;
    });
    builder.addCase(res.pending, (state, action) => {
      console.log("ddddddddddddd")
      state.id = action.payload.id;
      state.loggedIn = action.payload.loggedIn;
    });
  },
});

const store = configureStore({ reducer: { store: slice.reducer } });

export const actions = slice.actions;
export default store;
