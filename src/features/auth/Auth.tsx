import { Row, Col, Typography } from 'antd';
import clsx from 'clsx';

import BackgroundImage from '../../assets/login_background.png';
import LogoImage from '../../assets/logo.png';
import LoginForm from './LoginForm';
import useClassName from './styles';

export default function Auth() {
  const rootClassName = useClassName();
  return (
    <div className={clsx('Auth_Root', rootClassName)}>
      <Row>
        <Col xs={0} sm={0} md={0} xl={8} xxl={8}>
          <div className="image">
            <div>
              <img src={BackgroundImage} alt="" />
            </div>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} xl={16} xxl={16}>
          <div className="login-form">
            <div className="header">
              <div className="logo">
                <img width={38} height={38} src={LogoImage} alt="秋" />
              </div>
              <Typography.Title level={1} className="title">
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
