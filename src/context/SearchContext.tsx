import { createContext, ReactNode, useMemo, useState } from "react";

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
  const [filterValue, setFilterValue] = useState<string>("");

  const handleUpdateFilterValue = (searchValue: string) => {
    setFilterValue(searchValue);
  };

  const value = useMemo(
    () => ({
      filterValue,
      handleUpdateFilterValue,
    }),
    [filterValue]
  );
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
