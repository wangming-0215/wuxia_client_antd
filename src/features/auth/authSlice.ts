import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AxiosError } from 'axios';
import { LoadingStatus } from '../../constants/enums';
import { signInThunk } from './authThunk';

interface State {
  authenticated: boolean;
  status: LoadingStatus;
  token: string;
}

const initialState: State = {
  authenticated: false,
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
