import { Box, CardMedia, Typography, Button } from "@mui/material";
import { useCart } from "../context/CartContext";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

function ProductDetailsPage() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const { products, isLoading, error } = useProducts();
  const product = products.find((product) => product.id === id);
  if (isLoading) {
    return (
      <Box sx={{ py: 6, textAlign: "center" }}>
        <Typography>Loading product...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ py: 6, textAlign: "center" }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }
  if (!product) {
    return (
      <Box sx={{ py: 6, px: 3, textAlign: "center" }}>
        <Typography variant="h6">Product not found</Typography>
      </Box>
    );
  }
  return (
    <Box component="main" sx={{ py: 6, px: 3 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 3,
        }}
      >
        <CardMedia
          component="img"
          image={product.imageUrl}
          alt={product.name}
          sx={{
            width: "100%",
            height: { xs: 250, md: 400 },
            objectFit: "cover",
            borderRadius: 3,
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            {product.name}
          </Typography>
          <Typography sx={{ mt: 2 }}>{product.description}</Typography>
          <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="h6" sx={{ mt: 4 }}>
            Ingredients:
          </Typography>
          <Box component="ul" sx={{}}>
            {product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </Box>
          <Box sx={{ mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDetailsPage;
