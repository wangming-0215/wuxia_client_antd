import { type PropsWithChildren } from 'react';
import { injectGlobal } from '@emotion/css';
import { useToken } from '../../hooks';

export default function GlobalStyles({ children }: PropsWithChildren) {
  const { token } = useToken();

  injectGlobal({
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },

    html: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100%',
      WebkitOverflowScrolling: 'touch',
      WebkitFontSmoothing: 'antialiased',
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100%',
      flex: '1 1 auto',
      backgroundColor: token.colorBgLayout,
    },
    '#root': {
      flex: '1 1 auto',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },
  });

  return <>{children}</>;
}
