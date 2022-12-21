import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import store from 'store2';
import { type ThemeMode } from '../theme';
import { StorageKey } from '../constants';

interface State {
  mode: ThemeMode;
}

const initialState: State = {
  mode: store.get(StorageKey.theme) || 'light',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme(state, action: PayloadAction<ThemeMode>) {
      store.set(StorageKey.theme, action.payload);
      state.mode = action.payload;
    },
  },
});

export const { switchTheme } = slice.actions;
export default slice.reducer;
