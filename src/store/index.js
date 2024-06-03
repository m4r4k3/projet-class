import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { Axios } from "../axios";

export const fetchLogginDetails = createAsyncThunk(
  "user/inintiate",
  async function (state) {
    const res = await Axios.get("/api/islogged");
    return res;
  }
);

const slice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    id: null,
  },
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.id = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogginDetails.fulfilled, (state, action) => {
      state.id = action.payload.data.id;
      state.loggedIn = action.payload.data.loggedIn;
    });
  },
});

const store = configureStore({ reducer: { store: slice.reducer } });

export const actions = slice.actions;
export default store;
