import { useLocalStorage } from "hooks/useLocalStorage";
import { createContext, ReactNode, useCallback, useMemo } from "react";

type SearchContextProps = {
  children: ReactNode;
};

type SearchContextType = {
  filterValue: string;
  handleUpdateFilterValue: (searchValue: string) => void;
};

export const SearchContext = createContext<SearchContextType>(
  {} as SearchContextType
);

const SearchProvider = ({ children }: SearchContextProps) => {
  const [filterValue, setFilterValue] = useLocalStorage<string>(
    "searchValue",
    ""
  );

  const handleUpdateFilterValue = useCallback(
    (searchValue: string) => {
      setFilterValue(searchValue);
    },
    [setFilterValue]
  );

  const value = useMemo(
    () => ({
      filterValue,
      handleUpdateFilterValue,
    }),
    [filterValue, handleUpdateFilterValue]
  );
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
