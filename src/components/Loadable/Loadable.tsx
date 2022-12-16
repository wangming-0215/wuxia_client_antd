import React, { PropsWithChildren } from 'react';
import Loader from '../Loader';

/**
 * lazy load component
 * @param Component
 * @returns
 */
export default function Loadable<T>(Component: React.ComponentType<T>) {
  return function LoadedComponent(props: PropsWithChildren<T>) {
    return (
      <React.Suspense fallback={<Loader fullscreen />}>
        <Component {...props} />
      </React.Suspense>
    );
  };
}
