import { type PropsWithChildren } from 'react';
import { Typography } from 'antd';
import clsx from 'clsx';
import Container from '../Container';
import useClassName from './styles';

const { Text } = Typography;

type Props = PropsWithChildren<CommonComponentProps>;

function BlankPage({ children, className }: Props) {
  const rootClassName = useClassName();

  return (
    <Container className={clsx('BlankPage_Root', rootClassName, className)}>
      <Text>{children}</Text>
    </Container>
  );
}

export default BlankPage;
