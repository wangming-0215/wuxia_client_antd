import { combineReducers } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';
import theme from './themeSlice';

export const rootReducer = combineReducers({
  auth,
  theme,
});
