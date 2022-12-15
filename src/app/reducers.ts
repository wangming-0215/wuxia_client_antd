import { combineReducers } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';

export const rootReducer = combineReducers({
  auth,
});
