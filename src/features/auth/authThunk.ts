import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import * as authService from './authService';

/**
 * login action creator;
 */
export const login = createAsyncThunk<
  { token: string },
  { username: string; password: string },
  { rejectValue: AxiosError<HttpError> }
>('auth/login', async ({ username, password }, { rejectWithValue }) => {
  try {
    const response = await authService.login(username, password);
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error as AxiosError<HttpError>);
  }
});

/**
 * 退出
 */
export const logout = createAsyncThunk('auth/logout', () => {
  authService.logout();
});

/**
 * profile action creator
 */
export const profile = createAsyncThunk<
  void,
  void,
  { rejectValue: AxiosError<HttpError> }
>('auth/profile', async (_, { rejectWithValue }) => {
  try {
    await authService.profile();
  } catch (error) {
    return rejectWithValue(error as AxiosError<HttpError>);
  }
});
