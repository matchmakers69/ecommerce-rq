import { DefaultOptions, QueryClient } from "react-query";

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
