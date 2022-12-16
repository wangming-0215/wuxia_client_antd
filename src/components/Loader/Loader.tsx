import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import classes from './Loader.module.scss';

export interface Props extends CommonComponentProps {
  center?: boolean;
  fullscreen?: boolean;
}

export default function Loader(props: PropsWithChildren<Props>) {
  const { className, center = true, fullscreen = false } = props;

  return (
    <div
      className={clsx(classes.root, className, {
        [classes.center]: center,
        [classes.fullscreen]: fullscreen,
      })}
    >
      <span className={classes.loader} />
    </div>
  );
}
