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

const clearToken = () => {
  $authInstance.defaults.headers.common.Authorization = ``;
};

export const apiRegisterUser = createAsyncThunk(
  'auth/apiRegisterUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await $authInstance.post('/users/signup', formData);

      setToken(data.token);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
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
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiLogOutUser = createAsyncThunk(
  'auth/apiLogOutUser',
  async (_, thunkApi) => {
    try {
      await $authInstance.post('/users/logout');

      clearToken();

      return;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  'auth/apiRefreshUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) {
      return thunkApi.rejectWithValue('Error');
    }
    try {
      setToken(token);
      const { data } = await $authInstance.get('/users/current');

      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: 'contacts',
  initialState: {
    token: null,
    isLoggedIn: false,
    userData: null,
    error: null,
    isLoading: false,
  },
  extraReducers: builder =>
    builder
      .addCase(apiRegisterUser.pending, handlePending)
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiRegisterUser.rejected, handleRejected)
      .addCase(apiLoginUser.pending, handlePending)
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiLoginUser.rejected, handleRejected)
      .addCase(apiRefreshUser.pending, handlePending)
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
      })
      .addCase(apiRefreshUser.rejected, handleRejected)
      .addCase(apiLogOutUser.pending, handlePending)
      .addCase(apiLogOutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.userData = null;
        state.error = null;
        state.token = null;
      })
      .addCase(apiLogOutUser.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;
