import { unstable_makeStyles } from '../../hooks';

const useClassName = unstable_makeStyles((token) => ({
  position: 'relative',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export default useClassName;
