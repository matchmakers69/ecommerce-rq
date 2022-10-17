import { queryKeys } from "constants/queryKeys";
import useSnackbar from "hooks/useSnackbar";
import { useQuery } from "react-query";
import { getProducts } from "services/api/shop";
import { errorMessage } from "utils/helpers/errorMessageTitle";

const useProducts = () => {
  const { snackError } = useSnackbar();
  return useQuery(queryKeys.products, getProducts, {
    onError: (error) => {
      snackError(errorMessage(error));
    },
  });
};

export default useProducts;
