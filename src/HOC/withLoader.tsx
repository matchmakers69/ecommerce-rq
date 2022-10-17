import SuspenseLoader from "components/ui/SuspenseLoader";
import { ComponentType, Suspense } from "react";

const withLoader = <T extends Record<string, unknown>>(
  Component: ComponentType<T>
) => {
  return (hocProps: T) => {
    return (
      <Suspense fallback={<SuspenseLoader />}>
        <Component {...hocProps} />
      </Suspense>
    );
  };
};

export default withLoader;
