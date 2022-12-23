import { PropsWithChildren } from 'react';
import clsx from 'clsx';

import Container from '../../components/Container';
import useClassName from './styles';

function Content({ children }: PropsWithChildren) {
  const className = useClassName();
  return (
    <div className={clsx('layout-content', className)}>
      <div>
        <main>
          <Container>{children}</Container>
        </main>
      </div>
    </div>
  );
}

export default Content;
