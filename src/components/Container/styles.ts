import { unstable_makeStyles } from '../../hooks';

const useClassName = unstable_makeStyles(() => ({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  boxSizing: 'border-box',
  display: 'block',
  paddingLeft: 16,
  paddingRight: 16,
}));

export default useClassName;
