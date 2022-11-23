import Page from "components/ui/Page";
import PageTitleWrapper from "components/ui/PageTitleWrapper";
import { SearchContext } from "context/SearchContext";
import useSearchProduts from "features/Shop/hooks/useSearchProduts";
import SearchProductsList from "features/Shop/SearchProductsList";
import { useContext } from "react";

const SearchPage = () => {
  const { filterValue } = useContext(SearchContext);
  const { data: products } = useSearchProduts(filterValue);
  console.log(products);
  return (
    <PageTitleWrapper>
      <Page title="Search results">
        {products?.length && products ? (
          <SearchProductsList products={products} />
        ) : (
          "Sorry no products"
        )}
      </Page>
    </PageTitleWrapper>
  );
};

export default SearchPage;
