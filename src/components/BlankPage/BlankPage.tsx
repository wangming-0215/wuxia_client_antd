import { type PropsWithChildren } from 'react';
import { Typography } from 'antd';
import { makeStyles } from 'src/hooks';
import Container from '../Container';

import classes from './BlankPage.module.scss';

const { Text } = Typography;

const useStyles = makeStyles<{ large: boolean }>((token, props) => ({
  text: {
    fontSize: token.fontSize * 2,
  },
}));

function BlankPage({ children }: PropsWithChildren) {
  const styles = useStyles();
  return (
    <Container className={classes.Root}>
      <Text style={styles.text}>{children}</Text>
    </Container>
  );
}

export default BlankPage;
