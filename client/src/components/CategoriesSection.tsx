import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useCategories } from "../context/CategoriesContext";
import CategoryCard from "./CategoryCard";
import { useState } from "react";

function CategoriesSection() {
  const { categories, isLoading, error } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory((currentId) =>
      currentId === categoryId ? null : categoryId,
    );
  };
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, sm: 3, lg: 4 },
        bgcolor: "background.default",
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            sx={{
              color: "primary.main",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Explore the menu
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-brand)",
              fontWeight: 700,
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                md: "3rem",
              },
              mt: 1,
            }}
          >
            Check your Favorite Foods
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              mt: 1,
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            Discover our delicious selection of freshly prepared food.
          </Typography>
        </Box>
        {/* Grid */}
        <Box
          sx={{
            mt: 5,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2 , minmax(0,1fr))",
              md: "repeat(4 , minmax(0,1fr))",
            },
            gap: { xs: 2, md: 3 },
          }}
        >
          {isLoading ? (
            <Typography>Loading categories...</Typography>
          ) : error ? (
            <Typography>Error loading categories</Typography>
          ) : (
            categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isSelected={selectedCategory === category.id}
                onSelect={handleSelectCategory}
              />
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
}
export default CategoriesSection;
