import { unstable_makeStyles } from '../../hooks';

const useClassName = unstable_makeStyles((token) => ({
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  backgroundImage: 'none',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  boxSizing: 'border-box',
  flexShrink: 0,
  position: 'fixed',
  zIndex: token.zIndexPopupBase + 1,
  top: 0,
  left: 'auto',
  right: 0,
  backgroundColor: token.colorBgContainer,
  ...(token.mode !== 'dark' && {
    boxShadow: 'rgb(100 116 139 / 12%) 0px 1px 4px',
  }),
  '& > div': {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    left: 0,
    paddingLeft: 16,
    paddingRight: 16,
    minHeight: 48,
  },
  [`@media screen and (min-width: ${token.screenXL}px)`]: {
    left: 280,
    width: 'calc(100% - 280px)',
  },
}));

export default useClassName;
