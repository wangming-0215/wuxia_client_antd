import clsx from 'clsx';
import { type PropsWithChildren } from 'react';
import classes from './styles.module.scss';

type ContainerProps = PropsWithChildren<CommonComponentProps>;

/**
 * 页面容器
 * @param props
 * @returns
 */
export default function Container({ children, className }: ContainerProps) {
  const classNames = clsx(classes.root, className);
  return <div className={classNames}>{children}</div>;
}
