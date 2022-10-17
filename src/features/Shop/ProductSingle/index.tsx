import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";

import { red } from "@mui/material/colors";
import { CartContext } from "context/CartContext";
import { useContext } from "react";
import { Product } from "types/products";

type ProductProps = {
  product: Product;
  isDisabled?: boolean;
};

const ProductSingle = ({ product, isDisabled }: ProductProps) => {
  const { addToCart, addToCartText } = useContext(CartContext);
  const theme = useTheme();
  return (
    <Card
      variant="outlined"
      sx={{
        p: 3,
        background: `${theme.colors.alpha.black[5]}`,
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="product-details">
            P
          </Avatar>
        }
        title={product.title}
        subheader={product.category}
      />
      <CardMedia
        component="img"
        height="194"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary.light">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          disabled={isDisabled}
          onClick={() => addToCart(product)}
          size="small"
          variant="contained"
        >
          {addToCartText(product)}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductSingle;
