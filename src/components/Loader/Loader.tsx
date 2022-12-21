import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import useClassName from './Loader.styles';

export interface Props extends CommonComponentProps {
  center?: boolean;
  fullscreen?: boolean;
}

export default function Loader(props: PropsWithChildren<Props>) {
  const { className, center = true, fullscreen = false } = props;
  const rootClassName = useClassName({ center, fullscreen });

  return (
    <div className={clsx('Loader_Root', rootClassName, className)}>
      <span className="loader" />
    </div>
  );
}
