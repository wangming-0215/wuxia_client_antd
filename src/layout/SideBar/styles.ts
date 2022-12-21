import { unstable_makeStyles } from '../../hooks';

const useClassName = unstable_makeStyles((token) => ({
  flex: '0 0 auto',
  '& > div': {
    transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    boxShadow: 'none',
    backgroundImage: 'none',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flex: '1 0 auto',
    zIndex: token.zIndexPopupBase + 1,
    position: 'fixed',
    top: 0,
    outline: 0,
    left: 0,
    backgroundColor: '#111827',
    width: 280,
    ...(token.mode === 'dark' && {
      borderRight: `1px solid ${token.colorBorder}`,
      backgroundColor: token.colorBgContainer,
    }),
    '& .header': {
      color: '#fff',
      height: 48,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '1px solid rgb(45, 55, 72)',
      ...(token.mode === 'dark' && {
        borderBottom: `1px solid ${token.colorBorder}`,
      }),
      fontFamily: 'ZCOOL QingKe HuangYou',
      fontSize: 24,
      marginBottom: 24,
    },
    '& .menu': {
      paddingLeft: 8,
      paddingRight: 8,
      textTransform: 'uppercase',
      fontWeight: 500,
      '& .ant-menu .ant-menu-item-group .ant-menu-item-group-title': {
        fontSize: 12,
      },
    },
  },
}));

export default useClassName;
