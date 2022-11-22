import Page from "components/ui/Page";
import PageTitleWrapper from "components/ui/PageTitleWrapper";
import { SearchContext } from "context/SearchContext";
import SearchProductsList from "features/Shop/SearchProductsList";
import { useContext } from "react";

const SearchPage = () => {
  const { filterValue } = useContext(SearchContext);
  console.log("value", filterValue);
  return (
    <PageTitleWrapper>
      <Page title="Search results">
        <SearchProductsList />
      </Page>
    </PageTitleWrapper>
  );
};

export default SearchPage;
