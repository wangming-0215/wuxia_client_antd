import { unstable_makeStyles } from '../../hooks';

const useClassName = unstable_makeStyles((token) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 48,
  [`@media (min-width: ${token.screenXL}px)`]: {
    paddingLeft: 280,
  },
  '& > div': {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%',

    '& > main': {
      flexGrow: 1,
      paddingTop: 16,
      paddingBlock: 16,
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
}));

export default useClassName;
