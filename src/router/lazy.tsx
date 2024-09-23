import React, {
  ComponentType,
  PropsWithChildren,
  PropsWithoutRef,
  ReactNode,
  Suspense,
} from "react";

export interface ILazyLoader<P> {
  (): Promise<{ default: ComponentType<P> }>;
}

export const lazy = <P extends Record<string, unknown>>(
  loader: ILazyLoader<P>,
  loading: ReactNode = null
) => {
  const LazyComponent = React.lazy(loader);

  const SuspenseComponent = (props: PropsWithChildren<PropsWithoutRef<P>>) => (
    <Suspense fallback={loading}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return SuspenseComponent;
};
