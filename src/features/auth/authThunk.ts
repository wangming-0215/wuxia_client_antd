import { createAsyncThunk } from '@reduxjs/toolkit';

import { getErrorInfo } from '../../utils';
import { AppThunkApiConfig } from '../../app/store';
import * as authService from './authService';
import type { Account } from './typing';

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
export const profile = createAsyncThunk<Account, void, AppThunkApiConfig>(
  'auth/profile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await authService.profile();
      return response.data.data;
    } catch (error) {
      return rejectWithValue(getErrorInfo(error));
    }
  },
);
