import Page from "components/ui/Page";
import PageTitleWrapper from "components/ui/PageTitleWrapper";
import ProductsList from "features/Shop/ProductsList";

const OnlineShopPage = () => {
  return (
    <PageTitleWrapper>
      <Page title="Online shop">
        <ProductsList />
      </Page>
    </PageTitleWrapper>
  );
};

export default OnlineShopPage;
