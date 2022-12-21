import { useEffect, type PropsWithChildren } from 'react';
import { useToken } from '../../hooks';
import './styles.scss';

export default function GlobalStyles({ children }: PropsWithChildren) {
  const { token } = useToken();

  useEffect(() => {
    console.log('colorBgLayout: ', token.colorBgLayout);
    document.body.style.setProperty('--color-bg-layout', token.colorBgLayout);
  }, [token]);

  return <>{children}</>;
}
