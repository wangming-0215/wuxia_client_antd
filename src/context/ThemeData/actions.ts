import { type ThemeData } from './reducer';

export function changeThemeData(themeData: Partial<ThemeData>) {
  return {
    type: 'CHANGE_THEME_DATA',
    payload: themeData,
  };
}

export type Actions = ReturnType<typeof changeThemeData>;
