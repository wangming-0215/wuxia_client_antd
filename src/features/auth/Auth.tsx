import { Row, Col } from 'antd';

import Image from './Image';
import SignIn from './SignIn';
import classes from './Auth.module.scss';

export default function Auth() {
  return (
    <div className={classes.root}>
      <Row>
        <Col xs={0} sm={0} md={0} xl={8} xxl={8}>
          <Image />
        </Col>
        <Col xs={24} sm={24} md={24} xl={16} xxl={16}>
          <SignIn />
        </Col>
      </Row>
    </div>
  );
}
