import clsx from 'clsx';
import { type PropsWithChildren } from 'react';
import useClassName from './styles';

type ContainerProps = PropsWithChildren<CommonComponentProps>;

/**
 * 页面容器
 * @param props
 * @returns
 */
export default function Container({ children, className }: ContainerProps) {
  const rootClassName = useClassName();
  return (
    <div className={clsx('Container_Root', rootClassName, className)}>
      {children}
    </div>
  );
}
