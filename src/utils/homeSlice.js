import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfigForHomeSlice: (state, action) => {
      state.url = action.payload;
    },
    getGenresforHomeSlice: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfigForHomeSlice, getGenresforHomeSlice } =
  homeSlice.actions;

export const stateForgetApiConfigForHomeSlice = (state) => state.home.url;

export default homeSlice.reducer;
