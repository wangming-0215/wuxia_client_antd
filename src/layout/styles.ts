import { unstable_makeStyles } from '../hooks';

const useClassName = unstable_makeStyles(() => ({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
}));

export default useClassName;
