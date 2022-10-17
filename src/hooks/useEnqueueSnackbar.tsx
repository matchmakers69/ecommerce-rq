import { useSnackbar as useDefaultSnackbar, OptionsObject } from "notistack";
import Snackbar from "components/ui/Snackbar";

const useEnqueueSnackbar = () => {
  const { enqueueSnackbar } = useDefaultSnackbar();

  const pushSnackbar = (
    message: string,
    // extend the default options object
    options?: OptionsObject &
      Partial<{ variant: "success" | "error" | "warning" }>
  ) => {
    enqueueSnackbar(message, {
      ...options,
      persist: true,
      content: (key) => {
        const { variant } = options || { variant: undefined };
        return (
          <Snackbar id={key} message={message} variant={variant || "success"} />
        );
      },
    });
  };

  return pushSnackbar;
};

export default useEnqueueSnackbar;
