import { Box, Avatar, Typography, Divider, useTheme } from "@mui/material";
import { Product } from "types/products";
import QuantitySwitcher from "../QuantitySwitcher";

type SingleCartProduct = {
  product: Product;
};

const SingleCartProduct = ({ product }: SingleCartProduct) => {
  const theme = useTheme();
  return (
    <>
      <Box
        display="flex"
        sx={{
          pt: 2,
          pb: 2,
        }}
        alignItems="start"
        justifyContent="space-between"
      >
        <Avatar
          src={product.thumbnail}
          sx={{
            width: 46,
            height: 46,
            mr: 2,
          }}
        />
        <Box display="flex" flexDirection="column">
          <Typography variant="h6">{product.title}</Typography>
        </Box>
        <Typography justifyContent="end" variant="body1">
          {`£${product.price}`}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pb={2}
      >
        <QuantitySwitcher product={product} />
      </Box>
      <Divider
        sx={{
          background: theme.colors.alpha.white[50],
        }}
      />
    </>
  );
};

export default SingleCartProduct;
