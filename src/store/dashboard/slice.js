import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/helper/api";
import { state } from "./state";
import axios from "axios";

let cancelToken

export const getTrendingMovies = createAsyncThunk(
  'getTrendingMovies',
  async ({ type }, { rejectWithValue }) => {
    try {
      const res = await api.get(
        `/3/trending/${type}/week?language=en-US&page=1`
      )
      return { type, data: res.data }
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const searchMovies = createAsyncThunk(
  'searchMovies',
  async ({ search }, { rejectWithValue }) => {
    try {
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel('Operation canceled due to new request.')
      }
      cancelToken = axios.CancelToken.source()
      const res = await api.get(
        `/3/search/multi?query=${search}&language=en-US&page=1&type=movie`,
        { cancelToken: cancelToken.token }
      )
      return res.data
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const getMovie = createAsyncThunk(
  'getMovie',
  async ({ type, id }, { rejectWithValue }) => {
    try {
      const res = await api.get(
        `/3/${type}/${id}?language=en-US&append_to_response=videos,credits,images,external_ids,content_ratings,release_dates&include_image_language=en`
      )
      return res.data
    } catch (error) {
      if (!error) {
        throw error
      }
      return rejectWithValue(error.response.data)
    }
  }
)

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: state,
  extraReducers: {
    [getTrendingMovies.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getTrendingMovies.fulfilled]: (state, action) => {
      state.status = 'succeed'
      state.data = {
        ...state.data,
        [action.payload.type]: action.payload.data?.results ?? [],
      }
    },
    [getTrendingMovies.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
    [searchMovies.pending]: (state, action) => {
      state.status = 'loading'
    },
    [searchMovies.fulfilled]: (state, action) => {
      state.status = 'succeed'
      state.searchData = action.payload
    },
    [searchMovies.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
    [getMovie.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getMovie.fulfilled]: (state, action) => {
      state.status = 'succeed'
      state.movieData = action.payload
    },
    [getMovie.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  },
})

const { reducer } = dashboardSlice

export default reducer;
