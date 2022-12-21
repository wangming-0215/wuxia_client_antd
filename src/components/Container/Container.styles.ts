import { unstable_makeStyles } from '../../hooks';

const useClassName = unstable_makeStyles((token) => ({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  boxSizing: 'border-box',
  display: 'block',
  paddingLeft: 16,
  paddingRight: 16,
  background: token.colorBgContainer,
}));

export default useClassName;
