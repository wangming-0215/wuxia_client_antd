import { useEffect, type PropsWithChildren } from 'react';
import { useToken } from '../../hooks';

import './styles.scss';

function setCssVariable(
  name: string,
  value: string,
  element: HTMLElement = document.documentElement,
) {
  element.style.setProperty(name, value);
}

export default function GlobalStyles({ children }: PropsWithChildren) {
  const { token } = useToken();

  useEffect(() => {
    setCssVariable('--layout-bg-color', token.colorBgLayout);
    setCssVariable('--primary-color', token.colorPrimary);
  }, [token]);

  return <>{children}</>;
}
