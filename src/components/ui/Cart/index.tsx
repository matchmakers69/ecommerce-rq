import { Box, Typography, useTheme } from "@mui/material";
import { CartContext } from "context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const theme = useTheme();
  const { cartProducts } = useContext(CartContext);
  console.log(cartProducts, "cartProducts");
  return (
    <Box
      sx={{
        mt: theme.spacing(2),
        mx: theme.spacing(2),
      }}
    >
      {!cartProducts.length ? (
        <Typography variant="h5">
          Currently no products in the basket
        </Typography>
      ) : (
        "cfvb"
      )}
    </Box>
  );
};

export default Cart;
