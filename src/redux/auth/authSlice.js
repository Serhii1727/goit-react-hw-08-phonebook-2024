import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = true;
  state.error = action.payload;
};

export const $authInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  $authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const apiRegisterUser = createAsyncThunk(
  'auth/apiRegisterUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await $authInstance.post('/users/signup', formData);

      setToken(data.token);

      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  'auth/apiLoginUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await $authInstance.post('/users/login', formData);

      setToken(data.token);

      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  token: null,
  isLoggedIn: false,
  userData: null,
  error: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(apiRegisterUser.pending, handlePending)
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiRegisterUser.rejected, handleRejected)
      .addCase(apiLoginUser.pending, handlePending)
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiLoginUser.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;
