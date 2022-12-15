import { Typography } from 'antd';

import LogoImage from '../../../assets/logo.png';
import classes from './styles.module.scss';

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header_logo}>
        <img width={38} height={38} src={LogoImage} alt="秋" />
      </div>
      <Typography.Title level={1} className={classes.header_title}>
        千秋几世
      </Typography.Title>
    </div>
  );
}
