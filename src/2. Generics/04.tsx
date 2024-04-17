import React, {
  ComponentProps,
  ComponentType,
  Suspense,
  lazy,
  useMemo,
} from "react";

type Props<C extends ComponentType<any>> = {
  loader: () => Promise<{
    default: C;
  }>;
} & ComponentProps<C>;

// const Home = lazy(() => import(""))

function LazyLoad<C extends ComponentType<any>>({
  loader,
  ...props
}: Props<C>) {
  const LazyComponent = useMemo(() => lazy(loader), [loader]);

  return (
    <Suspense>
      <LazyComponent {...props} />
    </Suspense>
  );
}

<>
  {/** @ts-expect-error */}
  <LazyLoad loader={() => import("../App")} />
</>;
