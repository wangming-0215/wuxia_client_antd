import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import jwtDecode, { type JwtPayload } from 'jwt-decode';
import store from 'store2';

import { type RejectValue } from '../../app/store';
import { LoadingStatus } from '../../constants/enums';
import { StorageKey } from '../../constants';
import { login, logout, profile } from './authThunk';
import type { Account } from './typing';

interface State {
  authenticated: boolean;
  status: LoadingStatus;
  token: string;
  account: Account | undefined;
}

/**
 * 是否登录
 * @returns
 */
function isAuthenticated() {
  const token = store.get(StorageKey.jwt);
  if (!token) return false;
  const { exp } = jwtDecode<JwtPayload>(token);
  return Boolean(exp && Date.now() <= exp * 1000);
}

const initialState: State = {
  authenticated: isAuthenticated(),
  status: LoadingStatus.Idle,
  token: '',
  account: undefined,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = LoadingStatus.Pending;
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<{ token: string }>) => {
          state.status = LoadingStatus.Fulfilled;
          state.authenticated = true;
          state.token = action.payload.token;
        },
      )
      .addCase(login.rejected, (state) => {
        state.status = LoadingStatus.Rejected;
        state.authenticated = false;
        state.token = '';
      })
      .addCase(logout.fulfilled, (state) => {
        state.authenticated = false;
        state.token = '';
      })
      .addCase(profile.fulfilled, (state, action: PayloadAction<Account>) => {
        state.account = action.payload;
      })
      .addCase(profile.rejected, (state) => {
        state.account = undefined;
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action: PayloadAction<RejectValue>) => {
          if (
            action.payload &&
            typeof action.payload !== 'string' &&
            action.payload.code === 401
          ) {
            state.authenticated = false;
          }
        },
      );
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
