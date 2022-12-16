import { createAsyncThunk } from '@reduxjs/toolkit';

import { getErrorInfo } from '../../utils';
import { AppThunkApiConfig } from '../../app/store';
import * as authService from './authService';

/**
 * login thunk
 */
export const login = createAsyncThunk<
  { token: string },
  { username: string; password: string },
  AppThunkApiConfig
>('auth/login', async ({ username, password }, { rejectWithValue }) => {
  try {
    const response = await authService.login(username, password);
    return response.data.data;
  } catch (error) {
    return rejectWithValue(getErrorInfo(error));
  }
});

/**
 * logout thunk
 */
export const logout = createAsyncThunk('auth/logout', () => {
  authService.logout();
});

/**
 * profile thunk
 */
export const profile = createAsyncThunk<void, void, AppThunkApiConfig>(
  'auth/profile',
  async (_, { rejectWithValue }) => {
    try {
      await authService.profile();
    } catch (error) {
      return rejectWithValue(getErrorInfo(error));
    }
  },
);
