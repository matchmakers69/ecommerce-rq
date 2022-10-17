import { Dispatch, useState, SetStateAction, useCallback } from "react";
import { queryKeys } from "constants/queryKeys";
import useSnackbar from "hooks/useSnackbar";
import { errorMessage } from "utils/helpers/errorMessageTitle";
import { useQuery } from "react-query";
import { getProducts } from "services/api/shop";
import { Product } from "types/products";
import filteredProductsCategory from "utils/products/filterProductsByCategory";

interface UseProducts {
  products: Product[];
  categoryName: string;
  setCategoryName: Dispatch<SetStateAction<string>>;
}

const useProductsSelect = (): UseProducts => {
  const [categoryName, setCategoryName] = useState("all");
  const { snackError } = useSnackbar();
  const selectFn = useCallback(
    (unfilteredProducts: Product[]) =>
      filteredProductsCategory(unfilteredProducts, categoryName),
    [categoryName]
  );

  const { data: products = [] } = useQuery(queryKeys.products, getProducts, {
    onError: (error) => {
      snackError(errorMessage(error));
    },
    select: categoryName !== "all" ? selectFn : undefined,
  });

  return { products, categoryName, setCategoryName };
};

export default useProductsSelect;
