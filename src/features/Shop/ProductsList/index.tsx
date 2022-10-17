import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { CartContext } from "context/CartContext";
import { useContext } from "react";

import useCategories from "../hooks/useCategories";
import useProductsSelect from "../hooks/useProductsSelect";
import ProductSingle from "../ProductSingle";

const ProductsList = () => {
  const { data: categories } = useCategories();
  const { checkIsAlreadyAdded } = useContext(CartContext);
  const { products, categoryName, setCategoryName } = useProductsSelect();
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName((event.target as HTMLInputElement).value);
  };
  return (
    <Box mb={2}>
      <Box mb={6}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Categories
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={categoryName}
            row
            onChange={handleCategoryChange}
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            {categories?.map((category) => (
              <FormControlLabel
                key={category}
                value={category}
                control={<Radio />}
                label={category}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>

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
        {products?.map((product) => {
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
    </Box>
  );
};

export default ProductsList;
