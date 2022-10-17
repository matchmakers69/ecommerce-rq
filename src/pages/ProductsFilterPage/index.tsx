import Page from "components/ui/Page";
import PageTitleWrapper from "components/ui/PageTitleWrapper";
import useProducts from "features/Shop/hooks/useProducts";
import useShopCategories from "features/Shop/hooks/useShopCategories";
import { useEffect } from "react";

const ProductsFilterPage = () => {
  const { data: products, isSuccess } = useProducts();
  const { data: shopCategories, refetch } = useShopCategories(isSuccess);
  //   useEffect(() => {
  //     if (isSuccess) {
  //       refetch();
  //     }
  //   }, [isSuccess, refetch]);

  const productsByCategory = shopCategories?.map((category) => {
    const filteredProductsByCategory = products?.filter((product) => {
      return product.category === category;
    });

    return {
      category,
      products: filteredProductsByCategory,
    };
  });
  console.log(shopCategories, "shopCategories");
  console.log(products, "products");

  return (
    <PageTitleWrapper>
      <Page title="Products filter">gdebnrtgfn</Page>
    </PageTitleWrapper>
  );
};

export default ProductsFilterPage;
