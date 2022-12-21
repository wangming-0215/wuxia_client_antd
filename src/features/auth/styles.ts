import { unstable_makeStyles } from '../../hooks';

const useClassName = unstable_makeStyles((token) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  '& > div': {
    flex: '1 1 auto',
  },
  '& .image': {
    padding: '8px 0 8px 8px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '& > div': {
      flex: '1 1 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: token.colorBgContainer,
      borderRadius: 6,
      padding: token.sizeStep * 6,
      boxShadow: '0 5px 14px rgb(100 116 139 / 12%)',
      '& > img': {
        width: '100%',
        height: 'auto',
      },
    },
  },
  '& .login-form': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 600,
    paddingLeft: 24,
    paddingRight: 24,
    marginLeft: 'auto',
    marginRight: 'auto',
    '& .header': {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      '& .logo': {
        fontSize: 0,
        width: 38,
        height: 38,
        marginRight: 16,
        '& > img': {
          width: '100%',
          height: 'auto',
        },
      },
      '& .title': {
        fontFamily: 'ZCOOL QingKe HuangYou',
        fontWeight: 500,
        marginBottom: 0,
      },
    },
    '& form': {
      position: 'relative',
      marginTop: 56,
      width: '100%',
      '& button': {
        marginTop: 24,
      },
      [`@media screen and (min-width: ${token.screenXL}px)`]: {
        width: 480,
      },
    },
  },
}));

export default useClassName;
