import React, { type Ref } from 'react';
import Icon from '@ant-design/icons';

export interface IconProps {
  className?: string;
  rotate?: number;
  spin?: boolean;
  style?: React.CSSProperties;
}

/**
 * 创建svg图标
 * @param path
 * @param displayName
 * @returns
 */
function createIcon(path: React.ReactNode, displayName: string) {
  function SvgComponent() {
    return (
      <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
        {path}
      </svg>
    );
  }

  function Component(props: IconProps, ref: Ref<HTMLSpanElement> | undefined) {
    return <Icon component={SvgComponent} ref={ref} {...props} />;
  }

  if (process.env.NODE_ENV !== 'production') {
    Component.displayName = `${displayName}Icon`;
  }

  return React.memo(React.forwardRef<HTMLSpanElement, IconProps>(Component));
}

export default createIcon;
