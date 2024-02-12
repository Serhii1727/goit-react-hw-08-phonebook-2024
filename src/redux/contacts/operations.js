import { createAsyncThunk } from '@reduxjs/toolkit';
import { $authInstance } from '../auth/authSlice';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await $authInstance.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Error, something went wrong`);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await $authInstance.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Error, something went wrong`);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await $authInstance.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(`Error, something went wrong`);
    }
  }
);
