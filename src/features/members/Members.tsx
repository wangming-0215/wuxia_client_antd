import { Typography } from 'antd';

import Container from '../../components/Container';
import classes from './Members.module.scss';

export default function Members() {
  return (
    <Container className={classes.root}>
      <Typography.Text>帮派成员</Typography.Text>
    </Container>
  );
}
