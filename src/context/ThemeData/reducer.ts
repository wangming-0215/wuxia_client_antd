import { Actions } from './actions';

export interface ThemeData {
  mode: 'dark' | 'light';
  compact: boolean;
  colorPrimary: string;
}

export const initialState: ThemeData = {
  mode: 'light',
  compact: false,
  colorPrimary: '#00b96b',
};

export function reducer(state: ThemeData, action: Actions) {
  switch (action.type) {
    case 'CHANGE_THEME_DATA': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
