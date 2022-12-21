import { keyframes } from '@emotion/css';

import { unstable_makeStyles } from '../../hooks';

type StyleProps = { center?: boolean; fullscreen?: boolean };

const rotation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

const useClassName = unstable_makeStyles<StyleProps>(
  (token, { center, fullscreen }) => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    ...(center && {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    ...(fullscreen && {
      flex: '1 1 auto',
      width: '100%',
      height: '100vh',
    }),
    '& .loader': {
      width: 48,
      height: 48,
      border: `3px solid ${token.colorPrimary}`,
      borderRadius: '50%',
      display: 'inline-block',
      position: 'relative',
      boxSizing: 'border-box',
      animation: `${rotation} 1s linear infinite`,
      '&::after': {
        content: '""',
        boxSizing: 'border-box',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 56,
        height: 56,
        borderRadius: '50%',
        border: '3px solid',
        borderColor: '#ff3d00 transparent',
      },
    },
  }),
);

export default useClassName;
