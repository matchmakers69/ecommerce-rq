import { CssBaseline } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/ui/ErrorFallback";
import { errorHandler } from "utils/helpers/errorHandler";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRoutes } from "react-router-dom";
import router from "./routes/router";
import ThemeProviderWrapper from "theme/ThemeProvider";
import SnackbarProvider from "components/ui/Snackbar/SnackbarProvider";
import { queryClient } from "lib/react-query";

const App = () => {
  const content = useRoutes(router);
  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV !== "test" && (
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      )}
      <ThemeProviderWrapper>
        <CssBaseline />
        <SnackbarProvider>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={errorHandler}
          >
            {content}
          </ErrorBoundary>
        </SnackbarProvider>
      </ThemeProviderWrapper>
    </QueryClientProvider>
  );
};

export default App;
