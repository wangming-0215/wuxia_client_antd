import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { rootReducer } from './reducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppState;
  dispatch: AppDispatch;
  rejectValue: unknown;
}>();

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type RejectValue = string | HttpError | undefined;
export type AppThunkApiConfig = {
  state?: AppState;
  dispatch?: AppDispatch;
  extra?: unknown;
  rejectValue?: RejectValue;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
};
