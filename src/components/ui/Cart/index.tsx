import { Box, Typography, useTheme } from "@mui/material";
import { CartContext } from "context/CartContext";
import { useContext } from "react";
import SingleCartProduct from "./SingleCartProduct";

const Cart = () => {
  const theme = useTheme();
  const { cartProducts } = useContext(CartContext);

  return (
    <Box
      sx={{
        mt: theme.spacing(2),
        mx: theme.spacing(2),
      }}
    >
      {cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <Box key={product.id}>
            <SingleCartProduct product={product} />
          </Box>
        ))
      ) : (
        <Typography variant="h5">
          Currently no products in the basket
        </Typography>
      )}
    </Box>
  );
};

export default Cart;
