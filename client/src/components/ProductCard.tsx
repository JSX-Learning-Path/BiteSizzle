import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import type { Product } from "../types/product";
import { Link as RouterLink } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card sx={{}}>
      <CardActionArea component={RouterLink} to={`/product/${product.id}`}>
        <CardMedia
          component="img"

          image={product.imageUrl}
          alt={product.name}
          sx={{ width: "100%", height: 180, objectFit: "cover" }}
        ></CardMedia>
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "primary.dark",
            }}
          >
            {product.name}
          </Typography>
          <Typography color="text.secondary" sx={{ textAlign: "center" }}>
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ProductCard;
