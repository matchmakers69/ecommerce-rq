import { Product } from "types/products";

const filteredProductsCategory = (
  productsArr: Product[],
  categoryValue: string
) => {
  return productsArr?.filter((product) =>
    product.category
      .toLocaleLowerCase()
      .includes(categoryValue.toLocaleLowerCase())
  );
};

export default filteredProductsCategory;
