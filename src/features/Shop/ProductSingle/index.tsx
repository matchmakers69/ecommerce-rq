import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";

import { red } from "@mui/material/colors";
import { Product } from "types/products";

type ProductProps = {
  product: Product;
};

const ProductSingle = ({ product }: ProductProps) => {
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
    </Card>
  );
};

export default ProductSingle;
