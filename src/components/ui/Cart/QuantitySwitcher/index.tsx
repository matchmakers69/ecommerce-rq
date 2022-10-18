import { useContext } from "react";
import { CartContext } from "context/CartContext";
import { IconButton, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Product } from "types/products";

type QuantitySwitcherProps = {
  product: Product;
};

const QuantitySwitcher = ({ product }: QuantitySwitcherProps) => {
  const theme = useTheme();
  const { quantities, handleIncreaseQuantity } = useContext(CartContext);
  const currentProductQnt = quantities[product.id];
  console.log(currentProductQnt);
  return (
    <Box display="flex">
      <IconButton
        sx={{
          width: 40,
          height: 40,
          borderRadius: 0,
          background: `${theme.colors.alpha.trueWhite[50]}`,
        }}
      >
        <RemoveIcon />
      </IconButton>
      <Box
        display="flex"
        alignItems="center"
        alignContent="center"
        sx={{
          height: 40,
          border: `1px solid ${theme.colors.alpha.trueWhite[50]}`,
          px: 2,
        }}
      >
        {currentProductQnt ?? 1}
      </Box>

      <IconButton
        sx={{
          width: 40,
          height: 40,
          borderRadius: 0,
          background: `${theme.colors.alpha.trueWhite[50]}`,
        }}
        onClick={() => handleIncreaseQuantity(product)}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default QuantitySwitcher;
