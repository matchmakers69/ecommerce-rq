import { useSnackbar as useDefaultSnackbar, OptionsObject } from "notistack";
import Snackbar from "components/ui/Snackbar";

const useSnackbar = () => {
  const { enqueueSnackbar } = useDefaultSnackbar();

  const openSnackbar = (
    message: string,
    options: OptionsObject & {
      variant: "success" | "error" | "warning" | "default";
    }
  ) => {
    enqueueSnackbar(message, {
      ...options,
      persist: false, // snacks are transient and therefore, should NEVER persist across pages
      content: (key) => {
        const { variant } = options;
        return <Snackbar id={key} message={message} variant={variant} />;
      },
    });
  };

  return {
    snackSuccess: (msg: string) => openSnackbar(msg, { variant: "success" }),
    snackWarning: (msg: string) => openSnackbar(msg, { variant: "warning" }),
    snackError: (msg: string) => openSnackbar(msg, { variant: "error" }),
  };
};

export default useSnackbar;
