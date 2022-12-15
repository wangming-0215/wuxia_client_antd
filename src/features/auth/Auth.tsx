import { Row, Col, Typography } from 'antd';

import BackgroundImage from '../../assets/login_background.png';
import LogoImage from '../../assets/logo.png';
import LoginForm from './LoginForm';
import classes from './Auth.module.scss';

export default function Auth() {
  return (
    <div className={classes.root}>
      <Row>
        <Col xs={0} sm={0} md={0} xl={8} xxl={8}>
          <div className={classes.image_root}>
            <div>
              <img src={BackgroundImage} alt="" />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} xl={16} xxl={16}>
          <div className={classes.login_form_root}>
            <div className={classes.login_form_header}>
              <div className={classes.logo}>
                <img width={38} height={38} src={LogoImage} alt="秋" />
              </div>
              <Typography.Title level={1} className={classes.title}>
                千秋几世
              </Typography.Title>
            </div>
            <LoginForm />
          </div>
        </Col>
      </Row>
    </div>
  );
}
