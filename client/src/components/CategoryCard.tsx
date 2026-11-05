import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";

import type { Category } from "../types/category";

interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  onSelect: (categoryId: string) => void;
}

function CategoryCard({ category, isSelected, onSelect }: CategoryCardProps) {
  return (
    <Card
      component="article"
      elevation={1}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: "background.paper",
        border: `2px solid ${
          isSelected ? "var(--brand-primary)" : "transparent"
        }`,
        transition: "transform 250ms ease, border-color 250ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
        },
      }}
    >
      <CardActionArea
        onClick={() => onSelect(category.id)}
        aria-pressed={isSelected}
      >
        <Box
          component="img"
          src={category.image}
          alt={category.name}
          loading="lazy"
          decoding="async"
          sx={{
            display: "block",
            aspectRatio: "4 / 3",
            width: "100%",
            objectFit: "cover",
          }}
        />

        <CardContent sx={{ textAlign: "center", py: 2 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontFamily: "var(--font-brand)",
              fontWeight: 700,
            }}
          >
            {category.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CategoryCard;
