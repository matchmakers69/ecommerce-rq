import { useContext } from "react";
import { CartContext } from "context/CartContext";
import { IconButton, TextField, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Product } from "types/products";

type QuantitySwitcherProps = {
  product: Product;
};

const QuantitySwitcher = ({ product }: QuantitySwitcherProps) => {
  const theme = useTheme();
  const {
    quantities,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleQuantityChange,
  } = useContext(CartContext);
  // const currentProductQnt = quantities[product.id];

  return (
    <Box display="flex">
      <IconButton
        sx={{
          width: 40,
          height: 40,
          borderRadius: 0,
          background: `${theme.colors.alpha.trueWhite[50]}`,
        }}
        disabled={product.quantity <= 1}
        onClick={() => handleDecreaseQuantity(product.id)}
      >
        <RemoveIcon />
      </IconButton>
      <Box
        display="flex"
        alignItems="center"
        alignContent="center"
        sx={{
          maxWidth: 80,
          height: 40,
          border: `1px solid ${theme.colors.alpha.trueWhite[50]}`,
          px: 2,
        }}
      >
        <TextField
          onChange={(e) =>
            handleQuantityChange(product.id, Number(e.target.value))
          }
          variant="standard"
          InputProps={{ disableUnderline: true }}
          value={product.quantity ?? 1}
        />
      </Box>

      <IconButton
        sx={{
          width: 40,
          height: 40,
          borderRadius: 0,
          background: `${theme.colors.alpha.trueWhite[50]}`,
        }}
        onClick={() => handleIncreaseQuantity(product.id)}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default QuantitySwitcher;
