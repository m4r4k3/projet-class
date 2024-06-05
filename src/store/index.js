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
    const data= await res.data ;
    return data;
  }
);

const slice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    id: null,
    type: null
  },
  reducers: {
    login(state, action) {
      state.loggedIn = true;
      state.id = action.payload.id;
      state.type = action.payload.type
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogginDetails.fulfilled, (state, action) => {
      state.id = action.payload.id;
      state.loggedIn = action.payload.loggedIn;
      state.type = action.payload.type
    });
  },
});

const store = configureStore({ reducer: { store: slice.reducer } });

export const actions = slice.actions;
export default store;
