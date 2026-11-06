import { Box, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import type { Product } from "../types/product";

interface PopularProductsProps {
  products: Product[];
}

function PopularProducts({ products }: PopularProductsProps) {
  return (
    <Box
      sx={{
        mx: "auto",
        maxWidth: 1300,
        py: 4,
        placeItems: "center",
        display: "grid",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            mb: 1,
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
          }}
        >
          Popular Products
        </Typography>
        <Typography
          sx={{
            mb: 1,
            textAlign: "center",
            color: "text.secondary",
            fontWeight: "bold",
          }}
        >
          A taste above the rest
        </Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          padding: { xs: 2, sm: 3, md: 4 },
          gap: 2,
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
}

export default PopularProducts;
