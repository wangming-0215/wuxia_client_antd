import { useEffect, type PropsWithChildren } from 'react';
import { useToken } from '../../hooks';

import './styles.scss';

export default function GlobalStyles({ children }: PropsWithChildren) {
  const { token } = useToken();

  useEffect(() => {
    document.body.style.backgroundColor = token.colorBgLayout;
  });

  return <>{children}</>;
}
