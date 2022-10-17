import { SnackbarProvider as SnackbarProviderDefault } from "notistack";

type SnackbarProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
  return (
    <SnackbarProviderDefault
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      hideIconVariant
      preventDuplicate
      autoHideDuration={4000}
    >
      {children}
    </SnackbarProviderDefault>
  );
};

export default SnackbarProvider;
