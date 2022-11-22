import SearchForm from "components/ui/forms/SearchForm";
import SearchWrapper from "components/ui/SearchWrapper";

const HomePage = () => {
  return (
    <SearchWrapper title="Search Products">
      <SearchForm />
    </SearchWrapper>
  );
};

export default HomePage;
