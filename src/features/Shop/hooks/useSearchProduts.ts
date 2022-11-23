import { queryKeys } from "constants/queryKeys";
import useSnackbar from "hooks/useSnackbar";
import { useQuery } from "react-query";
import { getSearchProductsBySearchValue } from "services/api/shop";
import { errorMessage } from "utils/helpers/errorMessageTitle";

const useSearchProduts = (searchValue: string) => {
  const { snackError } = useSnackbar();
  return useQuery(
    [queryKeys.searchProducts, searchValue],
    () => getSearchProductsBySearchValue(searchValue),
    {
      onError: (error) => {
        snackError(errorMessage(error));
      },
      enabled: Boolean(searchValue),
    }
  );
};

export default useSearchProduts;
