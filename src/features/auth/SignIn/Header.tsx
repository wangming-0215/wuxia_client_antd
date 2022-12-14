import { Typography } from 'antd';

import LogoImage from 'src/assets/logo.png';
import classes from './SignIn.module.scss';

export default function Header() {
  return (
    <div className={classes.Header}>
      <div className={classes.Header_Logo}>
        <img width={38} height={38} src={LogoImage} alt="秋" />
      </div>
      <Typography.Title level={1} className={classes.Header_Title}>
        千秋几世
      </Typography.Title>
    </div>
  );
}
