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
    isLoaded:false ,
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
    logout(state  ){
      state.loggedIn = false;
      state.id = null;
      state.type = null ;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogginDetails.fulfilled, (state, action) => {
      state.isLoaded = true
      state.id = action.payload.id;
      state.loggedIn = action.payload.loggedIn;
      state.type = action.payload.type
    });
  },
});

const store = configureStore({ reducer: { store: slice.reducer } });

export const actions = slice.actions;
export default store;
