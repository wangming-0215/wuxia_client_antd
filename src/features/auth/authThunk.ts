import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import * as authService from './authApi';

export const signInThunk = createAsyncThunk<
  { token: string },
  { username: string; password: string },
  { rejectValue: AxiosError<HttpError> }
>('auth/signIn', async ({ username, password }, { rejectWithValue }) => {
  try {
    const response = await authService.signIn(username, password);
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error as AxiosError<HttpError>);
  }
});
