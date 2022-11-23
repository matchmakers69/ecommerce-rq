import { Grid } from "@mui/material";
import { Product } from "types/products";
import ProductSingle from "../ProductSingle";

type SearchProductsList = {
  products: Product[];
};
const SearchProductsList = ({ products }: SearchProductsList) => {
  return (
    <Grid
      container
      columnSpacing={{
        xs: 3,
        md: 4,
      }}
      rowSpacing={{
        xs: 3,
        md: 4,
      }}
    >
      {products.map((product) => {
        // const isAlreadyAddedtoBasket = checkIsAlreadyAdded(product);

        return (
          <Grid key={product.id} item xs={12} sm={12} md={4}>
            <ProductSingle
              // isDisabled={isAlreadyAddedtoBasket}
              product={product}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SearchProductsList;
