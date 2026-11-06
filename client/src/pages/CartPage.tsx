import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { useCart } from "../context/CartContext";

function CartPage() {
  const { items } = useCart();
  return (
    <Box
      component="main"
      sx={{
        maxWidth: "1200px",
        margin: "0 auto",
        placeContent: "center",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
      }}
    >
      <Box
        sx={{
          mt: 3,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: 1,
        }}
      >
        {items.map((item) => (
          <Card key={item.id} sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              image={item.imageUrl}
              alt={item.name}
              sx={{
                width: 120,
                height: 130,
                objectFit: "cover",
                borderRadius: 2,
                p: 2,
              }}
            />
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2">Quantity: {item.quantity}</Typography>
            </CardContent>
            <Box sx={{ ml: "auto", alignSelf: "end", p: 2 }}>
              <Typography variant="h6" color="primary">
                €{(item.price * item.quantity).toFixed(2)}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
      <Box component="div">
        <Typography variant="h3">
          Total: €
          {items.reduce(
            (total, item) => total + item.price.toFixed(2) * item.quantity,
            0,
          )}
        </Typography>
      </Box>
    </Box>
  );
}

export default CartPage;
