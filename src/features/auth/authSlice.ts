import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AxiosError } from 'axios';
import jwtDecode, { type JwtPayload } from 'jwt-decode';
import store from 'store2';
import { LoadingStatus } from '../../constants/enums';
import { StorageKey } from '../../constants';
import { signInThunk } from './authThunk';

interface State {
  authenticated: boolean;
  status: LoadingStatus;
  token: string;
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
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => ({ ...initialState }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInThunk.pending, (state) => {
        state.status = LoadingStatus.Pending;
      })
      .addCase(
        signInThunk.fulfilled,
        (state, action: PayloadAction<{ token: string }>) => {
          state.status = LoadingStatus.Fulfilled;
          state.authenticated = true;
          state.token = action.payload.token;
        },
      )
      .addCase(signInThunk.rejected, (state) => {
        state.status = LoadingStatus.Rejected;
        state.authenticated = false;
        state.token = '';
      })
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action: PayloadAction<AxiosError<HttpError>>) => {
          const { response } = action.payload;
          if (response && response.status === 401) {
            state.authenticated = false;
          }
        },
      );
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
