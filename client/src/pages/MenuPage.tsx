import { Box, Typography, Button, Divider } from "@mui/material";
import { useState } from "react";
import { categories } from "../data/categories";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { products, isLoading, error } = useProducts();
  const filteredProducts = products.filter((product) => {
    return selectedCategory === null || product.categoryId === selectedCategory;
  });
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: "background.default",
        maxWidth: "1250px",
        mx: "auto",
        p: 2,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Menu
      </Typography>
      {/* <Typography
        sx={{
          fontWeight: "tight",
          fontSize: { xs: "15px", md: "18px", xl: "23px" },
          fontFamily: '"Lilita One", sans-serif',
        }}
      >
        "Big flavors. Fresh ingredients. Serious cravings. Let's make your next
        meal unforgettable."
      </Typography> */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 4 }}>
        <Button
          variant={selectedCategory === null ? "contained" : "outlined"}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={
              selectedCategory === category.id ? "contained" : "outlined"
            }
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </Box>
      <Typography
        sx={{
          mt: 2,
          textAlign: "center",
          fontWeight: "tight",
          fontSize: { xs: "15px", md: "18px", xl: "23px" },
          fontFamily: '"Fredoka Variable", sans-serif',
        }}
      >
        "Big flavors. Fresh ingredients. Serious cravings. Let's make your next
        meal unforgettable."
      </Typography>
      <Divider
        sx={{
          mt: 2,
        }}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2 ,1fr)",
            md: "repeat(3 ,1fr)",
          },
          gap: 3,
          mt: 5,
        }}
      >
        {isLoading ? (
          <Typography>Loading products...</Typography>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </Box>
    </Box>
  );
}

export default MenuPage;
