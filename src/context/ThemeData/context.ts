import React from 'react';
import { ThemeData } from './reducer';

interface Context {
  themeData: ThemeData;
  changeThemeData: (theme: Partial<ThemeData>) => void;
}

export const ThemeDataContext = React.createContext<Context>({} as Context);
