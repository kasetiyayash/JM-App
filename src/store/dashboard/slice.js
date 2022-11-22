import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/helper/api";
import { state } from "./state";

export const getTrendingMovies = createAsyncThunk(
  "getTrendingMovies",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get(`/3/trending/all/day`);
      return res.data;
    } catch (error) {
      if (!error) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: state,
  extraReducers: {
    [getTrendingMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [getTrendingMovies.fulfilled]: (state, action) => {
      state.status = "succeed";
      state.data = action.payload;
    },
    [getTrendingMovies.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
  // reducers: {
  //   setToken(state, action) {
  //     state.token = action.payload;
  //   },
  // },
});

// export const { setToken } = dashboardSlice.actions;

const { reducer } = dashboardSlice;

export default reducer;
