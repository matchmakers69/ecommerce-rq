import { queryKeys } from "constants/queryKeys";
import useSnackbar from "hooks/useSnackbar";
import { useQuery } from "react-query";
import { getShopCategories } from "services/api/shop";
import { errorMessage } from "utils/helpers/errorMessageTitle";

const useShopCategories = (enabled = false) => {
  const { snackError } = useSnackbar();
  return useQuery(queryKeys.shopCategories, getShopCategories, {
    onError: (error) => {
      snackError(errorMessage(error));
    },
    enabled,
  });
};

export default useShopCategories;
