import { useReducer } from 'react';

import { type ThemeData, initialState, reducer } from './reducer';
import {
  type Actions,
  changeThemeData as changeThemeDataAction,
} from './actions';
import { ThemeDataContext } from './context';

export type ThemeDataProviderProps = React.PropsWithChildren<
  Partial<ThemeData>
>;

/**
 * ThemeData Provider
 * @param props
 * @returns
 */
function ThemeDataProvider({ children, ...restProps }: ThemeDataProviderProps) {
  const [state, dispatch] = useReducer<React.Reducer<ThemeData, Actions>>(
    reducer,
    { ...initialState, ...restProps },
  );

  const changeThemeData = (themeData: Partial<ThemeData>) => {
    dispatch(changeThemeDataAction(themeData));
  };

  return (
    <ThemeDataContext.Provider value={{ themeData: state, changeThemeData }}>
      {children}
    </ThemeDataContext.Provider>
  );
}

export default ThemeDataProvider;
