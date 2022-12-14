import { Row, Col } from 'antd';

import LogoImage from 'src/assets/logo.png';
import Image from './Image';
import SignIn from './SignIn';
import classes from './Auth.module.scss';

export default function Auth() {
  return (
    <div className={classes.Root}>
      <Row>
        <Col xs={0} sm={0} md={0} xl={8} xxl={8}>
          <Image />
        </Col>
        <Col xs={24} sm={24} md={24} xl={16} xxl={16}>
          <SignIn />
          {/* <div className={classes.Auth_Form}>
            <img style={{ width: 24, height: 24 }} src={LogoImage} alt="logo" />
          </div> */}
        </Col>
      </Row>
    </div>
  );
}
