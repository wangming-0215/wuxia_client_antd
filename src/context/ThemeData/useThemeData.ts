import { useContext } from 'react';

import { ThemeDataContext } from './context';

export default function useThemeData() {
  return useContext(ThemeDataContext);
}
